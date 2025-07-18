# AWS Deployment Guide

This guide will help you deploy the Nestora Chocolates application to AWS using EKS, ECR, and implement GitOps with Flux.

## Prerequisites

### 1. AWS Account Setup
- AWS account with appropriate permissions
- AWS CLI installed and configured
- Domain registered with GoDaddy (nestorainc.com)

### 2. Required Tools
- [AWS CLI](https://aws.amazon.com/cli/)
- [Terraform](https://www.terraform.io/downloads.html)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Flux CLI](https://fluxcd.io/docs/installation/)
- [Docker](https://docs.docker.com/get-docker/)

### 3. GitHub Setup
- GitHub repository (rahulrao21/nestorachocolates)
- GitHub personal access token with repo permissions
- GitHub Actions secrets configured

## Quick Start

### 1. Clone and Setup
```bash
git clone https://github.com/rahulrao21/nestorachocolates.git
cd nestorachocolates
```

### 2. Configure AWS Credentials
```bash
aws configure
```

### 3. Set Environment Variables
```bash
export GITHUB_TOKEN=your_github_token
export AWS_REGION=us-east-1
```

### 4. Deploy Everything
```bash
./scripts/deploy-aws.sh
```

This script will:
- Deploy AWS infrastructure (VPC, EKS, ECR, Route53, etc.)
- Configure kubectl for EKS
- Build and push Docker image to ECR
- Bootstrap Flux for GitOps
- Deploy the application

## Manual Deployment Steps

### 1. Deploy Infrastructure

```bash
cd terraform/aws-infrastructure
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars with your values
terraform init
terraform plan
terraform apply
```

### 2. Configure kubectl
```bash
aws eks update-kubeconfig --region us-east-1 --name nestora-chocolates-prod
```

### 3. Build and Push Docker Image
```bash
# Get ECR login
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com

# Build and push
docker build -t nestora-chocolates .
docker tag nestora-chocolates:latest ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/nestora-chocolates:latest
docker push ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/nestora-chocolates:latest
```

### 4. Bootstrap Flux
```bash
export GITHUB_TOKEN=your_token
flux bootstrap github \
  --owner=rahulrao21 \
  --repository=nestorachocolates \
  --branch=main \
  --path=./clusters/aws-production \
  --personal
```

## Domain Configuration

### 1. Update GoDaddy DNS
After deployment, update your GoDaddy DNS settings:

1. Go to GoDaddy DNS management
2. Update nameservers to use AWS Route53 nameservers (from Terraform output)
3. Or create A/CNAME records pointing to the ALB

### 2. Route53 Hosted Zone
The Terraform will create a Route53 hosted zone. You need to:
1. Note the nameservers from the Terraform output
2. Update GoDaddy to use these nameservers

## Infrastructure Components

### AWS Resources Created
- **VPC**: Custom VPC with public/private subnets
- **EKS Cluster**: Managed Kubernetes cluster
- **ECR Repository**: Container registry
- **ALB**: Application Load Balancer
- **Route53**: DNS management
- **ACM Certificate**: SSL certificate
- **IAM Roles**: Service account roles

### Kubernetes Components
- **Namespace**: nestora-chocolates
- **Deployment**: Application pods
- **Service**: Internal load balancing
- **Ingress**: External access via ALB
- **HPA**: Horizontal Pod Autoscaler
- **PDB**: Pod Disruption Budget

### Monitoring Stack
- **Prometheus**: Metrics collection
- **Grafana**: Visualization dashboard
- **AlertManager**: Alert management

## GitOps with Flux

### Repository Structure
```
clusters/aws-production/
├── flux-system/              # Flux components
├── infrastructure/           # Infrastructure components
│   ├── aws-load-balancer-controller.yaml
│   ├── cert-manager.yaml
│   └── monitoring.yaml
├── apps/                     # Application manifests
│   └── nestora-chocolates/
│       ├── deployment.yaml
│       ├── service.yaml
│       └── ingress.yaml
├── infrastructure.yaml       # Infrastructure kustomization
└── nestora-chocolates.yaml   # App kustomization
```

### Deployment Process
1. Push changes to GitHub
2. Flux detects changes
3. Applies manifests to cluster
4. Monitors deployment health

## Monitoring and Observability

### Grafana Dashboard
- URL: https://grafana.nestorainc.com
- Username: admin
- Password: admin123

### Prometheus
- Metrics collection and alerting
- Available at: https://prometheus.nestorainc.com

### Logs
```bash
# Application logs
kubectl logs -n nestora-chocolates -l app=nestora-chocolates

# Flux logs
flux logs --follow
```

## Scaling and Updates

### Manual Scaling
```bash
kubectl scale deployment nestora-chocolates -n nestora-chocolates --replicas=5
```

### Auto Scaling
HPA is configured to scale based on CPU/memory:
- Min replicas: 3
- Max replicas: 10
- CPU threshold: 70%
- Memory threshold: 80%

### Updates
1. Update application code
2. Push to GitHub
3. GitHub Actions builds new image
4. Updates Kubernetes manifests
5. Flux deploys the update

## Security

### Network Security
- Private subnets for worker nodes
- Security groups restricting access
- ALB in public subnets only

### Container Security
- ECR image scanning enabled
- Non-root containers
- Resource limits enforced

### Secrets Management
- Kubernetes secrets for sensitive data
- IAM roles for service accounts
- No hardcoded credentials

## Troubleshooting

### Common Issues

1. **Pods not starting**
   ```bash
   kubectl describe pod -n nestora-chocolates
   kubectl logs -n nestora-chocolates -l app=nestora-chocolates
   ```

2. **DNS not resolving**
   - Check Route53 configuration
   - Verify nameservers in GoDaddy
   - Wait for DNS propagation (up to 24 hours)

3. **SSL certificate issues**
   ```bash
   kubectl get certificate -n nestora-chocolates
   kubectl describe certificate -n nestora-chocolates
   ```

4. **Flux not syncing**
   ```bash
   flux get all
   flux logs --follow
   ```

### Health Checks
```bash
# Application health
curl https://nestorainc.com/health

# Kubernetes health
kubectl get pods -n nestora-chocolates

# Flux health
flux check
```

## Cost Optimization

### Estimated Monthly Costs
- EKS Cluster: ~$73/month
- EC2 Instances (t3.medium x2): ~$60/month
- ALB: ~$22/month
- Route53: ~$0.50/month
- **Total: ~$155/month**

### Cost Saving Tips
1. Use Spot instances for non-production
2. Right-size instances based on usage
3. Enable cluster autoscaler
4. Use reserved instances for predictable workloads

## Cleanup

To destroy all resources:
```bash
./scripts/destroy-aws.sh
```

⚠️ **Warning**: This will destroy all AWS resources and cannot be undone.

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review AWS CloudWatch logs
3. Check Flux logs: `flux logs --follow`
4. Open an issue in the GitHub repository

## Next Steps

1. Set up monitoring alerts
2. Configure backup and disaster recovery
3. Implement CI/CD pipeline improvements
4. Add staging environment
5. Set up log aggregation