# Terraform Infrastructure for nerox.xyz

Static site hosting on AWS — S3 + CloudFront + ACM.

## Architecture

```
┌─────────────┐
│   Users     │
└──────┬──────┘
       │ HTTPS (nerox.xyz)
       ▼
┌─────────────────────────────┐
│  CloudFront Distribution    │
│  - Global CDN               │
│  - HTTP → HTTPS redirect    │
│  - Custom domain            │
└──────────┬──────────────────┘
           │ Bucket policy (CloudFront service principal)
           ▼
    ┌──────────────────┐
    │   S3 Bucket      │
    │ sames-page-prod  │
    │  eu-central-1    │
    └──────────────────┘

    ┌──────────────────┐
    │  ACM Certificate │
    │   us-east-1      │
    │  (CloudFront)    │
    └──────────────────┘
```

## Directory Structure

```
terraform/
├── environments/
│   └── prod/
│       ├── main.tf          # Wires the three modules together
│       ├── provider.tf      # AWS providers (eu-central-1 + us-east-1)
│       ├── variables.tf     # Environment-level variables
│       └── outputs.tf       # cert_validation_records, certificate_arn
├── modules/
│   ├── s3-static-page/      # S3 bucket + public access block + bucket policy
│   ├── cloudfront-static-page/  # CloudFront distribution
│   └── acm-certificate/     # ACM certificate with DNS validation
├── .gitignore
└── README.md
```

## Prerequisites

- **Terraform** >= 1.5.0
- **AWS CLI** with credentials configured
- **AWS permissions** for S3, CloudFront, ACM, and Route 53
- **Domain** (nerox.xyz) with a Route 53 hosted zone

## Quick Start

```bash
cd environments/prod
terraform init
terraform plan
terraform apply    # type "yes" to confirm
```

## Modules

### s3-static-page

Creates an S3 bucket for static content:

- All public access blocked (`block_public_acls`, `block_public_policy`, `ignore_public_acls`, `restrict_public_buckets`)
- Bucket policy grants `s3:GetObject` to the CloudFront service principal, scoped by `AWS:SourceArn`

No versioning, encryption, or website configuration is set — CloudFront serves as the entry point.

### cloudfront-static-page

Creates a CloudFront distribution:

- S3 regional domain name as origin
- Allowed methods: GET, HEAD
- Viewer protocol policy: redirect HTTP to HTTPS
- ACM certificate attached via SNI
- Domain alias configured (nerox.xyz)
- No geo-restrictions

### acm-certificate

Creates an ACM certificate in us-east-1 (required for CloudFront):

- Domain: nerox.xyz + wildcard (*.nerox.xyz)
- Validation method: DNS
- Outputs validation CNAME records for Route 53

## Certificate Validation

On first deploy the certificate will be in "Pending Validation" status:

1. Run `terraform output cert_validation_records` to get the required DNS CNAMEs
2. Add those records to your Route 53 hosted zone
3. Wait 5–30 minutes for validation
4. Re-run `terraform apply` if CloudFront needs the validated cert

## Outputs

| Output | Description |
|--------|-------------|
| `cert_validation_records` | DNS CNAME records needed to validate the ACM certificate |
| `certificate_arn` | ARN of the ACM certificate |

## Security

- **S3 public access**: fully blocked — all four public-access-block settings are `true`
- **Bucket access**: restricted to CloudFront via IAM condition on `AWS:SourceArn`
- **HTTPS**: CloudFront redirects all HTTP requests to HTTPS
