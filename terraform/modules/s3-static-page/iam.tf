data "aws_caller_identity" "current" {}

data "aws_iam_policy_document" "static_page_bucket_policy" {

  statement {
    sid    = "AllowCloudFrontGetObject"
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = ["s3:GetObject"]

    resources = [
      "arn:aws:s3:::${var.bucket_name}/*"
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = ["arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${var.cloud_front_id}"]
    }
  }
}
