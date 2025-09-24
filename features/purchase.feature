Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I select the cart
    Then I select Checkout
    Then I fill in the details "John" "Doe" "12345"
    Then I select Continue
    Then I select Finish
    Then I should see the text "Thank you for your order!"

  # Beneficial coverage: purchase multiple items
  Scenario: Purchase multiple items successfully
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I will add the bike light to the cart
    Then I select the cart
    Then I select Checkout
    Then I fill in the details "John" "Doe" "12345"
    Then I select Continue
    Then I select Finish
    Then I should see the text "Thank you for your order!"
