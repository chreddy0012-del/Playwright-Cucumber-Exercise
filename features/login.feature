Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    Then I should see the title "Swag Labs" 
    # TODO: Fix this failing scenario (expected: "Swag Labs")

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    Then I should see the error message "Epic sadface: Sorry, this user has been locked out."

  # Beneficial test coverage: invalid credentials
  Scenario: Validate login failure for wrong password
    Then I will login with username "standard_user" and password "wrong_password"
    Then I should see the error message "Epic sadface: Username and password do not match any user in this service"
