Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price <sort>
    Then I will login as 'standard_user'
    Then I sort the items by "<sort>"
    Then I validate all 6 items are sorted correctly by price

  Examples:
    | sort                 |
    | Price (low to high)  |
    | Price (high to low)  |

  # Beneficial test coverage: validate sort by name
  Scenario Outline: Validate product sort by name <sort>
    Then I will login as 'standard_user'
    Then I sort the items by "<sort>"
    Then I validate all items are sorted correctly by name

  Examples:
    | sort      |
    | Name (A to Z) |
    | Name (Z to A) |
