Feature: Login and Add item to cart

  @smoke
  Scenario Outline: Add and purchase the item
    Given User opens URL "<url>"
    And User enters email as "<email>" and password as "<password>"
    And Click on Login button
    Then print the amount of each item
    Then Click on Add to cart button
    Then Click on Cart logo
    Then Click on Checkout button
    And User enters Firstname as "<fname>" and Lastname as "<lname>" and zip as "<zcode>"
    Then Click on Continue button
    Then check title of the page
    And print Item total amount
    Then click on Finish button
    Then Click on Back Home button
    Then Click on Menu
    Then Click on LogOut Button

    Examples:

      | url                        | email         | password     | fname | lname | zcode  |
      | https://www.saucedemo.com/ | standard_user | secret_sauce | test  | test  | 522256 |


  @regression
  Scenario Outline: Add and Remove item from the cart
    Given User opens URL "<url>"
    And User enters email as "<email>" and password as "<password>"
    And Click on Login button
    Then Click on Add to cart button
    Then Click on Cart logo
    Then Click on Remove button
    Then Click on Continue shopping button
    Then Click on Menu
    Then Click on LogOut Button

    Examples:

      | url                        | email           | password     |
      | https://www.saucedemo.com/ | standard_user 1 | secret_sauce |



