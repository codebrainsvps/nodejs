Feature:
As a registered user
I want to place an order to verify successful checkout workflow
So that I can reach the Thank You page and get the order confirmation number

    Scenario: search by web id 
    Given I am on the website -o5a_orderplacementReg
    When I enter this product id -o5a_orderplacementReg
    Then I should be taken to a PDP of this product -o5a_orderplacementReg

    Scenario: add to bag on PDP
    Given I am on a Product Detail Page -o5a_orderplacementReg
    When I select a color, size, quantity “1” -o5a_orderplacementReg
    And click the ADD TO BAG button -o5a_orderplacementReg
    Then the item appears in the mini cart -o5a_orderplacementReg
	And validate product info -o5a_orderplacementReg

    Scenario: change quantity of the item on the bag page
    Given I have an item in the mini cart -o5a_orderplacementReg
    And I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_orderplacementReg
    When I update the following product information on the bag page -o5a_orderplacementReg
    Then I should see the product information updated on the bag: -o5a_orderplacementReg

    Scenario: log into registered account via bag page
    Given I am on the BAG page with a sign in overlay open -o5a_orderplacementReg
    And I enter a valid email address and password -o5a_orderplacementReg
    When I click on the SIGN IN & CHECKOUT button on sign in overlay -o5a_orderplacementReg
    Then I should be redirected to the CHECKOUT page -o5a_orderplacementReg

    Scenario: place order and reach the THANK YOU PAGE w order confirmation number
    Given I am on the CHECKOUT page -o5a_orderplacementReg
    When I click on the PLACE ORDER button -o5a_orderplacementReg
    Then I should be redirected to THANK YOU page -o5a_orderplacementReg
    And there should be an Order number -o5a_orderplacementReg