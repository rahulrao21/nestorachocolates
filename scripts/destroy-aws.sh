#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
AWS_REGION="us-east-1"
CLUSTER_NAME="nestora-chocolates-prod"
TERRAFORM_DIR="terraform/aws-infrastructure"

echo -e "${RED}🔥 Starting AWS resource destruction...${NC}"

# Warning prompt
echo -e "${YELLOW}⚠️  WARNING: This will destroy all AWS resources including:${NC}"
echo -e "${YELLOW}   - EKS Cluster${NC}"
echo -e "${YELLOW}   - ECR Repository${NC}"
echo -e "${YELLOW}   - VPC and networking${NC}"
echo -e "${YELLOW}   - Route53 records${NC}"
echo -e "${YELLOW}   - SSL certificates${NC}"
echo -e "${YELLOW}   - Load balancers${NC}"
echo ""
read -p "Are you sure you want to continue? (yes/no): " -r
if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
    echo -e "${GREEN}Operation cancelled.${NC}"
    exit 0
fi

# Delete Flux resources
delete_flux_resources() {
    echo -e "${YELLOW}Deleting Flux resources...${NC}"
    
    if kubectl get namespace flux-system &> /dev/null; then
        flux uninstall --silent
        echo -e "${GREEN}✅ Flux resources deleted${NC}"
    else
        echo -e "${YELLOW}⚠️  Flux not found, skipping...${NC}"
    fi
}

# Delete application resources
delete_app_resources() {
    echo -e "${YELLOW}Deleting application resources...${NC}"
    
    if kubectl get namespace nestora-chocolates &> /dev/null; then
        kubectl delete namespace nestora-chocolates
        echo -e "${GREEN}✅ Application resources deleted${NC}"
    else
        echo -e "${YELLOW}⚠️  Application namespace not found, skipping...${NC}"
    fi
}

# Delete load balancers manually (to avoid hanging)
delete_load_balancers() {
    echo -e "${YELLOW}Deleting load balancers...${NC}"
    
    # Get all load balancers with the cluster tag
    LBS=$(aws elbv2 describe-load-balancers --query 'LoadBalancers[?contains(LoadBalancerName, `nestora-chocolates`) || contains(LoadBalancerName, `k8s-`)].LoadBalancerArn' --output text)
    
    for lb in $LBS; do
        if [ ! -z "$lb" ]; then
            echo "Deleting load balancer: $lb"
            aws elbv2 delete-load-balancer --load-balancer-arn $lb || true
        fi
    done
    
    echo -e "${GREEN}✅ Load balancers deletion initiated${NC}"
}

# Delete security groups
delete_security_groups() {
    echo -e "${YELLOW}Deleting security groups...${NC}"
    
    # Wait a bit for resources to be deleted
    sleep 30
    
    # Get VPC ID
    VPC_ID=$(cd $TERRAFORM_DIR && terraform output -raw vpc_id 2>/dev/null || echo "")
    
    if [ ! -z "$VPC_ID" ]; then
        # Delete security groups (except default)
        SGs=$(aws ec2 describe-security-groups --filters "Name=vpc-id,Values=$VPC_ID" --query 'SecurityGroups[?GroupName!=`default`].GroupId' --output text)
        
        for sg in $SGs; do
            if [ ! -z "$sg" ]; then
                echo "Deleting security group: $sg"
                aws ec2 delete-security-group --group-id $sg || true
            fi
        done
    fi
    
    echo -e "${GREEN}✅ Security groups deletion initiated${NC}"
}

# Destroy infrastructure with Terraform
destroy_infrastructure() {
    echo -e "${YELLOW}Destroying AWS infrastructure...${NC}"
    
    cd $TERRAFORM_DIR
    
    # Initialize Terraform
    terraform init
    
    # Destroy the infrastructure
    terraform destroy -auto-approve
    
    echo -e "${GREEN}✅ Infrastructure destroyed successfully${NC}"
    
    cd ../..
}

# Clean up local files
cleanup_local() {
    echo -e "${YELLOW}Cleaning up local files...${NC}"
    
    # Remove kubeconfig context
    kubectl config delete-context "arn:aws:eks:$AWS_REGION:$(aws sts get-caller-identity --query Account --output text):cluster/$CLUSTER_NAME" || true
    
    # Remove Terraform state backup files
    find $TERRAFORM_DIR -name "*.backup" -delete || true
    
    echo -e "${GREEN}✅ Local cleanup completed${NC}"
}

# Main destruction function
main() {
    echo -e "${RED}Starting destruction process...${NC}"
    
    # Configure kubectl if cluster exists
    if aws eks describe-cluster --name $CLUSTER_NAME --region $AWS_REGION &> /dev/null; then
        aws eks update-kubeconfig --region $AWS_REGION --name $CLUSTER_NAME
        
        delete_flux_resources
        delete_app_resources
        delete_load_balancers
        
        # Wait for resources to be deleted
        echo -e "${YELLOW}Waiting for resources to be deleted...${NC}"
        sleep 60
    else
        echo -e "${YELLOW}⚠️  EKS cluster not found, skipping Kubernetes cleanup...${NC}"
    fi
    
    delete_security_groups
    destroy_infrastructure
    cleanup_local
    
    echo -e "${GREEN}🎉 Destruction completed successfully!${NC}"
    echo -e "${YELLOW}Note: Some resources may take additional time to be fully deleted.${NC}"
}

# Run main function
main "$@"