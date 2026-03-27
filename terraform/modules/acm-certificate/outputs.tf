output "cert_validation_records" {
  value = aws_acm_certificate.domain_certificate.domain_validation_options
}

output "validation_options" {
  value = aws_acm_certificate.domain_certificate.domain_validation_options
}

output "certificate_arn" {
  value = aws_acm_certificate.domain_certificate.arn
}