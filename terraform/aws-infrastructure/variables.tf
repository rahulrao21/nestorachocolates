variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "cluster_name" {
  description = "EKS cluster name"
  type        = string
  default     = "nestora-chocolates-prod"
}

variable "kubernetes_version" {
  description = "Kubernetes version"
  type        = string
  default     = "1.28"
}

variable "domain_name" {
  description = "Domain name for the application"
  type        = string
  default     = "nestorainc.com"
}

variable "github_repo" {
  description = "GitHub repository for Flux"
  type        = string
  default     = "rahulrao21/nestorachocolates"
}

variable "github_branch" {
  description = "GitHub branch for Flux"
  type        = string
  default     = "main"
}

variable "flux_path" {
  description = "Path in the repository for Flux"
  type        = string
  default     = "./clusters/aws-production"
}