output "cert_validation_records" {
  value = module.certificate.validation_options
}

output "certificate_arn" {
  value = module.certificate.certificate_arn
}
