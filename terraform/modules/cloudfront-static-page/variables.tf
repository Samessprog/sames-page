variable "certificate_arn" {
  type        = string
  description = "ACM certificate ARN"
}
variable "domain_name" {
  default     = "nerox.xyz"
  description = "The domain name for the ACM certificate"
  type        = string
}
variable "bucket_domain_name" {
  type = string
}