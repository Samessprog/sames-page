variable "bucket_name" {
  default     = "sames-page-prod"
  description = "The name of the S3 bucket to create"
  type        = string
}

variable "environment" {
  default     = "prod"
  description = "The environment name"
  type        = string
}

variable "block_public_acls" {
  default     = true
  description = "Whether to block public ACLs"
  type        = bool
}

variable "block_public_policy" {
  default     = true
  description = "Whether to block public policy"
  type        = bool
}

variable "ignore_public_acls" {
  default     = true
  description = "Whether to ignore public ACLs"
  type        = bool
}

variable "restrict_public_buckets" {
  default     = true
  description = "Whether to restrict public buckets"
  type        = bool
}

variable "domain_name" {
  default     = "nerox.xyz"
  description = "The domain name for the ACM certificate"
  type        = string
}
