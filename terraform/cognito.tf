resource "aws_cognito_user_pool" "pool" {
  name = "mypool"

  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }
  admin_create_user_config {
    allow_admin_create_user_only = false
  }
  auto_verified_attributes = ["email"]
  email_configuration {
    email_sending_account = "COGNITO_DEFAULT"
  }
  mfa_configuration = "OFF"
  password_policy {
    minimum_length    = 6
    require_lowercase = true
    require_numbers   = true
    require_uppercase = true
  }
  schema {
    attribute_data_type = "String"
    name                = "email"
    required            = true
  }
  verification_message_template {
    default_email_option = "CONFIRM_WITH_LINK"
    email_message        = "Your verification code is {####}."
    email_subject        = "Your verification code"
  }
  username_attributes = ["email"]
}

resource "aws_cognito_user_pool_domain" "main" {
  domain       = "testtf"
  user_pool_id = aws_cognito_user_pool.pool.id
}

resource "aws_cognito_user_pool_client" "client" {
  name         = "client"
  user_pool_id = aws_cognito_user_pool.pool.id

  allowed_oauth_flows_user_pool_client = true
  allowed_oauth_flows                  = ["code"]
  allowed_oauth_scopes                 = ["email", "openid"]
  callback_urls                        = ["https://yusukemigitera.github.io/"]
  generate_secret                      = false
  logout_urls                          = ["https://yusukemigitera.github.io/logout"]
  prevent_user_existence_errors        = "ENABLED"
  supported_identity_providers         = ["COGNITO"]
}
