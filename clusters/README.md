# GitOps with Flux

This directory contains the GitOps configuration for deploying Nestora Chocolates using Flux.

## Structure

```
clusters/
├── portfolio-fresh/           # Cluster-specific configuration
│   ├── flux-system/          # Flux system components (auto-generated)
│   └── apps/                 # Application configurations
│       ├── nestora-chocolates.yaml    # Flux Kustomization for the app
│       └── nestora-chocolates/        # App manifests
│           ├── kustomization.yaml     # Kustomize configuration
│           └── k8s-deployment.yaml    # Kubernetes manifests
└── README.md                 # This file
```

## How it works

1. **Flux Bootstrap**: Flux is bootstrapped to watch this repository
2. **GitOps**: Changes to manifests in this repo are automatically applied to the cluster
3. **Kustomization**: Flux uses Kustomize to manage and customize deployments
4. **Health Checks**: Flux monitors deployment health and reports status

## Managing the Application

### Check Flux Status
```bash
flux get all
```

### View Logs
```bash
flux logs --follow --tail=10
```

### Force Reconciliation
```bash
flux reconcile kustomization nestora-chocolates
```

### Suspend/Resume
```bash
flux suspend kustomization nestora-chocolates
flux resume kustomization nestora-chocolates
```

## Deployment Process

1. Make changes to Kubernetes manifests
2. Commit and push to the repository
3. Flux automatically detects changes and applies them
4. Monitor deployment status with `flux get kustomizations`

## Features

- **Automated Deployment**: Changes to this repo trigger automatic deployments
- **Health Monitoring**: Flux monitors deployment health
- **Rollback Support**: Git history provides rollback capabilities
- **Multi-Environment**: Easy to extend for staging/production environments