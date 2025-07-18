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
DOMAIN_NAME="nestorainc.com"
TERRAFORM_DIR="terraform/aws-infrastructure"

echo -e "${GREEN}🚀 Starting AWS deployment for Nestora Chocolates...${NC}"

# Check prerequisites
check_prerequisites() {
    echo -e "${YELLOW}Checking prerequisites...${NC}"
    
    # Check AWS CLI
    if ! command -v aws &> /dev/null; then
        echo -e "${RED}❌ AWS CLI not found. Please install it first.${NC}"
        exit 1
    fi
    
    # Check Terraform
    if ! command -v terraform &> /dev/null; then
        echo -e "${RED}❌ Terraform not found. Please install it first.${NC}"
        exit 1
    fi
    
    # Check kubectl
    if ! command -v kubectl &> /dev/null; then
        echo -e "${RED}❌ kubectl not found. Please install it first.${NC}"
        exit 1
    fi
    
    # Check Flux
    if ! command -v flux &> /dev/null; then
        echo -e "${RED}❌ Flux CLI not found. Please install it first.${NC}"
        exit 1
    fi
    
    # Check AWS credentials
    if ! aws sts get-caller-identity &> /dev/null; then
        echo -e "${RED}❌ AWS credentials not configured. Please run 'aws configure' first.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ All prerequisites satisfied${NC}"
}

# Deploy infrastructure with Terraform
deploy_infrastructure() {
    echo -e "${YELLOW}Deploying AWS infrastructure...${NC}"
    
    cd $TERRAFORM_DIR
    
    # Copy example tfvars if it doesn't exist
    if [ ! -f "terraform.tfvars" ]; then
        cp terraform.tfvars.example terraform.tfvars
        echo -e "${YELLOW}⚠️  terraform.tfvars created from example. Please review and update as needed.${NC}"
    fi
    
    # Initialize Terraform
    terraform init
    
    # Plan the deployment
    terraform plan -out=tfplan
    
    # Apply the deployment
    terraform apply tfplan
    
    # Get outputs
    ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    ECR_REPO_URL=$(terraform output -raw ecr_repository_url)
    CERTIFICATE_ARN=$(terraform output -raw acm_certificate_arn)
    VPC_ID=$(terraform output -raw vpc_id)
    
    echo -e "${GREEN}✅ Infrastructure deployed successfully${NC}"
    echo -e "${GREEN}ECR Repository: $ECR_REPO_URL${NC}"
    echo -e "${GREEN}Certificate ARN: $CERTIFICATE_ARN${NC}"
    
    cd ../..
}

# Configure kubectl for EKS
configure_kubectl() {
    echo -e "${YELLOW}Configuring kubectl for EKS...${NC}"
    
    aws eks update-kubeconfig --region $AWS_REGION --name $CLUSTER_NAME
    
    # Verify connection
    if kubectl get nodes &> /dev/null; then
        echo -e "${GREEN}✅ kubectl configured successfully${NC}"
    else
        echo -e "${RED}❌ Failed to configure kubectl${NC}"
        exit 1
    fi
}

# Update Kubernetes manifests with actual values
update_manifests() {
    echo -e "${YELLOW}Updating Kubernetes manifests...${NC}"
    
    ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    CERTIFICATE_ARN=$(cd $TERRAFORM_DIR && terraform output -raw acm_certificate_arn)
    VPC_ID=$(cd $TERRAFORM_DIR && terraform output -raw vpc_id)
    
    # Update deployment image
    sed -i "s|ACCOUNT_ID|$ACCOUNT_ID|g" clusters/aws-production/apps/nestora-chocolates/deployment.yaml
    
    # Update ingress certificate ARN
    sed -i "s|CERTIFICATE_ARN|$CERTIFICATE_ARN|g" clusters/aws-production/apps/nestora-chocolates/ingress.yaml
    
    # Update infrastructure manifests
    sed -i "s|VPC_ID|$VPC_ID|g" clusters/aws-production/infrastructure/aws-load-balancer-controller.yaml
    sed -i "s|CERTIFICATE_ARN|$CERTIFICATE_ARN|g" clusters/aws-production/infrastructure/cert-manager.yaml
    sed -i "s|CERTIFICATE_ARN|$CERTIFICATE_ARN|g" clusters/aws-production/infrastructure/monitoring.yaml
    
    echo -e "${GREEN}✅ Manifests updated successfully${NC}"
}

# Build and push Docker image to ECR
build_and_push_image() {
    echo -e "${YELLOW}Building and pushing Docker image to ECR...${NC}"
    
    ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    ECR_REPO_URL="$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/nestora-chocolates"
    
    # Login to ECR
    aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REPO_URL
    
    # Build and push image
    docker build -t nestora-chocolates:latest .
    docker tag nestora-chocolates:latest $ECR_REPO_URL:latest
    docker push $ECR_REPO_URL:latest
    
    echo -e "${GREEN}✅ Docker image pushed to ECR${NC}"
}

# Bootstrap Flux
bootstrap_flux() {
    echo -e "${YELLOW}Bootstrapping Flux...${NC}"
    
    if [ -z "$GITHUB_TOKEN" ]; then
        echo -e "${RED}❌ GITHUB_TOKEN environment variable not set${NC}"
        exit 1
    fi
    
    flux bootstrap github \
        --owner=rahulrao21 \
        --repository=nestorachocolates \
        --branch=main \
        --path=./clusters/aws-production \
        --personal
    
    echo -e "${GREEN}✅ Flux bootstrapped successfully${NC}"
}

# Create IAM roles for service accounts
create_iam_roles() {
    echo -e "${YELLOW}Creating IAM roles for service accounts...${NC}"
    
    ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    OIDC_ISSUER=$(aws eks describe-cluster --name $CLUSTER_NAME --query "cluster.identity.oidc.issuer" --output text)
    
    # Create trust policy
    cat > trust-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::$ACCOUNT_ID:oidc-provider/${OIDC_ISSUER#https://}"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "${OIDC_ISSUER#https://}:sub": "system:serviceaccount:kube-system:aws-load-balancer-controller"
        }
      }
    }
  ]
}
EOF
    
    # Create AWS Load Balancer Controller role
    aws iam create-role \
        --role-name AmazonEKSLoadBalancerControllerRole \
        --assume-role-policy-document file://trust-policy.json || true
    
    aws iam attach-role-policy \
        --role-name AmazonEKSLoadBalancerControllerRole \
        --policy-arn arn:aws:iam::$ACCOUNT_ID:policy/AWSLoadBalancerControllerIAMPolicy || true
    
    # Update manifest with role ARN
    ROLE_ARN="arn:aws:iam::$ACCOUNT_ID:role/AmazonEKSLoadBalancerControllerRole"
    sed -i "s|AWS_LOAD_BALANCER_CONTROLLER_ROLE_ARN|$ROLE_ARN|g" clusters/aws-production/infrastructure/aws-load-balancer-controller.yaml
    
    rm trust-policy.json
    
    echo -e "${GREEN}✅ IAM roles created successfully${NC}"
}

# Main deployment function
main() {
    echo -e "${GREEN}Starting deployment process...${NC}"
    
    check_prerequisites
    deploy_infrastructure
    configure_kubectl
    create_iam_roles
    update_manifests
    build_and_push_image
    bootstrap_flux
    
    echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
    echo -e "${GREEN}Your application will be available at: https://$DOMAIN_NAME${NC}"
    echo -e "${GREEN}Grafana dashboard: https://grafana.$DOMAIN_NAME${NC}"
    echo -e "${YELLOW}Note: DNS propagation may take a few minutes.${NC}"
}

# Run main function
main "$@"