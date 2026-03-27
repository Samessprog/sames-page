module "static_site" {
  source = "../../modules/s3-static-page"

  bucket_name             = var.bucket_name
  environment             = var.environment
  cloud_front_id          = module.cloudfront.cloud_front_id
  block_public_acls       = var.block_public_acls
  block_public_policy     = var.block_public_policy
  ignore_public_acls      = var.ignore_public_acls
  restrict_public_buckets = var.restrict_public_buckets
}

module "certificate" {
  source = "../../modules/acm-certificate"
  providers = {
    aws = aws.us_east_1
  }
  domain_name = var.domain_name
  environment = var.environment

}

module "cloudfront" {
  source             = "../../modules/cloudfront-static-page"
  certificate_arn    = module.certificate.certificate_arn
  domain_name        = var.domain_name
  bucket_domain_name = module.static_site.bucket_regional_domain_name
}