resource "aws_s3_bucket" "static_page_bucket" {
  bucket = var.bucket_name

  tags = {
    Name        = var.bucket_name
    Environment = var.environment
  }
}
resource "aws_s3_bucket_public_access_block" "static_page_bucket_public_access_block" {
  bucket = aws_s3_bucket.static_page_bucket.id

  block_public_acls       = var.block_public_acls
  block_public_policy     = var.block_public_policy
  ignore_public_acls      = var.ignore_public_acls
  restrict_public_buckets = var.restrict_public_buckets
}

resource "aws_s3_bucket_policy" "static_page_bucket_policy" {
  bucket = aws_s3_bucket.static_page_bucket.id
  policy = data.aws_iam_policy_document.static_page_bucket_policy.json
}
