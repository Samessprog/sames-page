variable "bucket_name" {
  description = "The name of the S3 bucket to create."
  type        = string
}

variable "environment" {
  description = "The environment for the S3 bucket."
  type        = string
  default     = "prod"

}

variable "block_public_acls" {
  description = "Whether to block public ACLs for the S3 bucket."
  type        = bool
  default     = true
}

variable "block_public_policy" {
  description = "Whether to block public policies for the S3 bucket."
  type        = bool
  default     = true
}

variable "ignore_public_acls" {
  description = "Whether to ignore public ACLs for the S3 bucket."
  type        = bool
  default     = true
}

variable "restrict_public_buckets" {
  description = "Whether to restrict public buckets for the S3 bucket."
  type        = bool
  default     = true
}

variable "cloud_front_id" {
  description = "The ID of the CloudFront distribution."
  type        = string
}

variable "cloud_front_id" {
  description = "ID dystrybucji CloudFront"
  type        = string
}