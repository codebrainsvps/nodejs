Feature:
As a registered user
I want to place an order to verify shoprunner checkout workflow
So that I can reach the Thank You page and get the order confirmation number

    Scenario: search by web id 
    Given I am on the website -o5a_shoprunnerReg
    When I enter this product id -o5a_shoprunnerReg
    Then I should be taken to a PDP of this product -o5a_shoprunnerReg

    Scenario: add to bag on PDP
    Given I am on a Product Detail Page -o5a_shoprunnerReg
    When I select a color, size, quantity “1” -o5a_shoprunnerReg
    And click the ADD TO BAG button -o5a_shoprunnerReg
    Then the item appears in the minicart -o5a_shoprunnerReg
	And validate product info -o5a_shoprunnerReg

    Scenario: change quantity of the item on bag page
    Given I have an item in the minicart -o5a_shoprunnerReg  
    And I access the BAG PAGE by the CHECKOUT button in the minicart -o5a_shoprunnerReg  
    When I update the following product information on the bag page -o5a_shoprunnerReg
    Then I should see the product information updated on the bag: -o5a_shoprunnerReg

    Scenario: sign into shoprunner account
    Given I click on the Shoprunner SIGN IN button -o5a_shoprunnerReg  
    And shoprunner sign in overlay pops up -o5a_shoprunnerReg
    When I enter a valid shoprunner account email address and password -o5a_shoprunnerReg  
    And I click on the SECURE SIGN IN button on shoprunner sign in overlay -o5a_shoprunnerReg  
    Then I should see a shoprunner WELCOME BACK message -o5a_shoprunnerReg
    And click CONTINUE SHOPPING to close the shoprunner overlay -o5a_shoprunnerReg
    And validate FREE SHIPPING under order summary -o5a_shoprunnerReg

    Scenario: log into registered account via bag page
    Given I click on the CHECKOUT button on the Bag page -o5a_shoprunnerReg
    And a sign in overlay pops up -o5a_shoprunnerReg
    When I enter a valid email address and password -o5a_shoprunnerReg
    When I click on the SIGN IN & CHECKOUT button on sign in overlay -o5a_shoprunnerReg
    Then I should be redirected to the CHECKOUT page -o5a_shoprunnerReg

    Scenario: place order and reach the THANK YOU PAGE w order confirmation number
    Given I am on the CHECKOUT page -o5a_shoprunnerReg
    And FREE SHIPPING appears under both order summary and shipping method -o5a_shoprunnerReg
    When I click on the PLACE ORDER button -o5a_shoprunnerReg
    Then I should be redirected to THANK YOU page -o5a_shoprunnerReg
    And there should be an Order number -o5a_shoprunnerReg