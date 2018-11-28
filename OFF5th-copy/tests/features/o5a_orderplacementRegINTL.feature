Feature:
As a registered user
I want to place an order to verify successful checkout workflow
So that I can reach the Thank You page and get the order confirmation number

    Scenario: change country flag via context chooser
    Given I am on the website -o5a_orderplacementRegINTL
    And I open the context chooser by clicking on the country flag in the top nav -o5a_orderplacementRegINTL
    When I select this <country> from the country dropdown menu -o5a_orderplacementRegINTL
    And click on SAVE & CONTINUE SHOPPING -o5a_orderplacementRegINTL
    Then I should see a popupoverlay displaying shipping country change -o5a_orderplacementRegINTL

    Scenario: search by web id 
    Given I am on the homepage -o5a_orderplacementRegINTL
    When I enter this product id -o5a_orderplacementRegINTL
    Then I should be taken to a PDP of this product -o5a_orderplacementRegINTL

    Scenario: add to bag on PDP
    Given I am on a Product Detail Page -o5a_orderplacementRegINTL
    When I select a color, size, quantity “1” -o5a_orderplacementRegINTL
    And click the ADD TO BAG button -o5a_orderplacementRegINTL
    Then the item appears in the mini cart -o5a_orderplacementRegINTL
	And validate product info -o5a_orderplacementRegINTL

    Scenario: open sign in overlay on bag page
    Given I have an item in the mini cart -o5a_orderplacementRegINTL
    And I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_orderplacementRegINTL
    When I click on the CHECKOUT button on the Bag page -o5a_orderplacementRegINTL
    Then a sign in overlay pops up -o5a_orderplacementRegINTL

    Scenario: log into registered account via bag page
    Given I am on the BAG page with a sign in overlay open -o5a_orderplacementRegINTL
    And I enter a valid email address and password -o5a_orderplacementRegINTL
    When I click on the SIGN IN & CHECKOUT button on sign in overlay -o5a_orderplacementRegINTL
    Then I should be redirected to the CHECKOUT page -o5a_orderplacementRegINTL

    Scenario: place order and reach the THANK YOU PAGE w order confirmation number
    Given I am on the CHECKOUT page -o5a_orderplacementRegINTL
    When I click on the PLACE ORDER button -o5a_orderplacementRegINTL
    Then I should be redirected to THANK YOU page -o5a_orderplacementRegINTL
    And there should be an Order number -o5a_orderplacementRegINTL