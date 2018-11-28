Feature:
As a guest user
I want to place an order to verify successful checkout workflow
So that I can reach the Thank You page and get the order confirmation number
 
Scenario: change country flag via context chooser
Given I am on the website -o5a_orderplacementGuestINTL
And I open the context chooser by clicking on the country flag in the top nav -o5a_orderplacementGuestINTL
When I select this <country> from the country dropdown menu -o5a_orderplacementGuestINTL
And click on SAVE & CONTINUE SHOPPING -o5a_orderplacementGuestINTL
Then I should see a popupoverlay displaying shipping country change -o5a_orderplacementGuestINTL

Scenario: search by web id 
Given I am on the homepage -o5a_orderplacementGuestINTL
When I enter this product id -o5a_orderplacementGuestINTL
Then I should be taken to a PDP of this product -o5a_orderplacementGuestINTL

Scenario: add to bag
Given I am on a Product Detail Page -o5a_orderplacementGuestINTL
When I select a color, size, quantity “1” -o5a_orderplacementGuestINTL
And click the ADD TO BAG button -o5a_orderplacementGuestINTL
Then the item appears in the mini cart -o5a_orderplacementGuestINTL
And validate product info -o5a_orderplacementGuestINTL

Scenario: open sign in overlay on bag page
Given I have an item in the mini cart -o5a_orderplacementGuestINTL
And I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_orderplacementGuestINTL
When I click on the CHECKOUT button on the Bag page -o5a_orderplacementGuestINTL
Then a sign in overlay pops up -o5a_orderplacementGuestINTL

Scenario: guest checkout – input SHIPPING info
Given I am on the BAG page with a sign in overlay open -o5a_orderplacementGuestINTL
And I access the CHECKOUT page via GUEST CHECKOUT -o5a_orderplacementGuestINTL
When I enter First Name, Last Name, Address Line 1, City -o5a_orderplacementGuestINTL
And select a state from the State dropdown menu -o5a_orderplacementGuestINTL
And enter Zip Code, Address, Phone Number -o5a_orderplacementGuestINTL
And click on the shipping section CONTINUE button -o5a_orderplacementGuestINTL
Then I move on to the PAYMENT section -o5a_orderplacementGuestINTL

Scenario: guest checkout – input PAYMENT info
Given I am on the PAYMENT section -o5a_orderplacementGuestINTL
When I enter Credit Card Number, Exp date, CVC, Name -o5a_orderplacementGuestINTL
And click on the payment section CONTINUE button -o5a_orderplacementGuestINTL
Then I move on to the SHIPPING METHOD section -o5a_orderplacementGuestINTL

Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the CHECKOUT page -o5a_orderplacementGuestINTL
When I click on the PLACE ORDER button -o5a_orderplacementGuestINTL
Then I should be redirected to THANK YOU page -o5a_orderplacementGuestINTL
And there should be an Order number -o5a_orderplacementGuestINTL