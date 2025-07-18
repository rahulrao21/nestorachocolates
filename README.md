# Nestora Inc. - Premium Sugar-Free Dubai Chocolates

A production-ready marketing website for Nestora Inc., showcasing premium sugar-free chocolates imported from Dubai and sold across Canada.

## 🍫 About

Nestora Inc. specializes in importing and selling premium sugar-free Dubai chocolates across Canada. Our signature product is Sugar-Free Pistachio Kunafa Dark Chocolate, available in 80g, 100g, and 200g sizes.

**Tagline:** "Crafted in Dubai. Loved in Canada."  
**Slogan:** "Luxury Chocolates. Guilt-Free."

## 🚀 Features

- **Modern React Application** - Built with Vite + React + TailwindCSS
- **Responsive Design** - Mobile-first approach with elegant dark green + gold theme
- **SEO Optimized** - Meta tags, OpenGraph, and semantic HTML structure
- **Production Ready** - Dockerized with Kubernetes deployment manifests
- **5 Core Pages:**
  - Home - Hero banner, product highlights, testimonials
  - About - Brand story, Dubai origins, mission
  - Products - Grid of chocolate bars with Buy Now buttons
  - Contact - Contact form with company information
  - Wholesale - B2B inquiry form for retailers

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** TailwindCSS with custom color scheme
- **Routing:** React Router DOM
- **SEO:** React Helmet Async
- **Fonts:** Playfair Display (serif) + Inter (sans-serif)
- **Container:** Docker + Nginx
- **Deployment:** Kubernetes

## 📁 Project Structure

```
nestora-chocolates/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CookieBanner.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   └── Wholesale.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile
├── nginx.conf
├── k8s-deployment.yaml
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🔧 Development Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nestora-chocolates
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 AWS Production Deployment

### Quick Deploy to AWS
```bash
# Set up environment
export GITHUB_TOKEN=your_github_token
export AWS_REGION=us-east-1

# Deploy everything
./scripts/deploy-aws.sh
```

This deploys:
- EKS cluster with auto-scaling
- ECR container registry
- Application Load Balancer
- Route53 DNS with SSL
- Flux GitOps
- Monitoring stack

**Live URL**: https://nestorainc.com

### Requirements
- AWS CLI configured
- Domain: nestorainc.com (GoDaddy)
- Terraform, kubectl, flux CLI

See [AWS Deployment Guide](docs/AWS-DEPLOYMENT.md) for detailed instructions.

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t nestora-chocolates:latest .
```

### Run Container Locally

```bash
docker run -p 8080:80 nestora-chocolates:latest
```

Visit `http://localhost:8080` to view the application.

## ☸️ Local Kubernetes Deployment

### Prerequisites

- Kubernetes cluster (EKS, GKE, or local cluster)
- kubectl configured to connect to your cluster
- Nginx Ingress Controller (optional, for ingress)
- Cert-Manager (optional, for SSL certificates)

### Deploy to Kubernetes

1. **Build and tag the Docker image:**
```bash
docker build -t nestora-chocolates:latest .
docker tag nestora-chocolates:latest <your-registry>/nestora-chocolates:latest
docker push <your-registry>/nestora-chocolates:latest
```

2. **Update the image in k8s-deployment.yaml:**
```yaml
# In k8s-deployment.yaml, update the image field:
image: <your-registry>/nestora-chocolates:latest
```

3. **Deploy to Kubernetes:**
```bash
kubectl apply -f k8s-deployment.yaml
```

4. **Verify deployment:**
```bash
kubectl get pods -l app=nestora-chocolates
kubectl get service nestora-chocolates-service
kubectl get ingress nestora-chocolates-ingress
```

### What Gets Deployed

The Kubernetes manifest includes:

- **Deployment:** 3 replicas with resource limits and health checks
- **Service:** LoadBalancer service exposing port 80
- **Ingress:** SSL-enabled ingress for nestorainc.com and www.nestorainc.com
- **ConfigMap:** Nginx configuration
- **PodDisruptionBudget:** Ensures high availability during updates

### Scaling

Scale the deployment:
```bash
kubectl scale deployment nestora-chocolates --replicas=5
```

### Updates

Update the deployment:
```bash
kubectl set image deployment/nestora-chocolates nestora-chocolates=<your-registry>/nestora-chocolates:v2.0.0
```

## 🌐 Production Configuration

### Environment Variables

The application supports the following environment variables:

- `NODE_ENV=production` - Set in Kubernetes deployment

### SSL/TLS

The Kubernetes ingress is configured for SSL termination using cert-manager. Update the ingress annotations and TLS configuration for your specific certificate issuer.

### Domain Configuration

Update the ingress rules in `k8s-deployment.yaml` to match your domain:

```yaml
rules:
- host: your-domain.com
  http:
    paths:
    - path: /
      pathType: Prefix
      backend:
        service:
          name: nestora-chocolates-service
          port:
            number: 80
```

## 📊 Monitoring & Health Checks

The application includes:

- **Health Check Endpoint:** `/health` returns 200 OK
- **Liveness Probe:** Checks `/health` every 30 seconds
- **Readiness Probe:** Checks `/health` every 10 seconds
- **Resource Monitoring:** CPU and memory limits defined

## 🎨 Design System

### Colors

- **Primary:** Dark Green (#1a3f2b to #389660)
- **Secondary:** Gold (#f59e0b to #d97706)
- **Backgrounds:** White, light gold, dark green gradients

### Typography

- **Brand Font:** Playfair Display (serif) - for "Nestora" and headings
- **Body Font:** Inter (sans-serif) - for body text and UI elements

### Components

- **Buttons:** Primary (gold), Secondary (dark green), Outline styles
- **Forms:** Consistent styling with focus states
- **Cards:** Rounded corners with shadows and hover effects

## 🔐 Security Features

- **CSP Headers:** Content Security Policy configured in nginx
- **XSS Protection:** X-XSS-Protection header
- **CSRF Protection:** X-Frame-Options header
- **SSL/TLS:** HTTPS redirection and HSTS
- **Secure Cookies:** Cookie banner placeholder included

## 📈 SEO Optimization

- **Meta Tags:** Title, description, OpenGraph for all pages
- **Semantic HTML:** Proper heading hierarchy and semantic elements
- **Sitemap Ready:** Clean URLs with React Router
- **Performance:** Optimized images, lazy loading, and compression

## 📞 Contact Information

- **Email:** info@nestorainc.com
- **Domain:** nestorainc.com
- **Service Area:** Canada

## 📄 License

This project is proprietary software for Nestora Inc.

## 🤝 Contributing

This is a private repository for Nestora Inc. Please contact the development team for contribution guidelines.

---

**Built with ❤️ for Nestora Inc. - Crafted in Dubai. Loved in Canada.**