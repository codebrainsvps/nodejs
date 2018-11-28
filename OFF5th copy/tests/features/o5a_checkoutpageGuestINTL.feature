Feature:
As a guest user
I want to view the checkout page
I want to be able to modify customer order info on the checkout page 


Scenario: change country flag via context chooser
Given I am on the website -o5a_checkoutpageGuestINTL
And I open the context chooser by clicking on the country flag in the top nav -o5a_checkoutpageGuestINTL
When I select this <country> from the country dropdown menu -o5a_checkoutpageGuestINTL
And click on SAVE & CONTINUE SHOPPING -o5a_checkoutpageGuestINTL
Then I should see a popupoverlay displaying shipping country change -o5a_checkoutpageGuestINTL


Scenario: search by web id -o5a_checkoutpageGuestINTL
Given I am on the homepage -o5a_checkoutpageGuestINTL
When I enter this product id -o5a_checkoutpageGuestINTL
Then I should be taken to a PDP of this product -o5a_checkoutpageGuestINTL

Scenario: add to bag
Given I am on a Product Detail Page -o5a_checkoutpageGuestINTL
When I select a color, size, quantity “1” -o5a_checkoutpageGuestINTL
And click the ADD TO BAG button -o5a_checkoutpageGuestINTL
Then the item appears in the mini cart -o5a_checkoutpageGuestINTL
And validate product info -o5a_checkoutpageGuestINTL
 
Scenario: open sign in overlay on bag page
Given I have an item in the mini cart -o5a_checkoutpageGuestINTL
And I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_checkoutpageGuestINTL
When I click on the CHECKOUT button on the Bag page -o5a_checkoutpageGuestINTL
Then a sign in overlay pops up -o5a_checkoutpageGuestINTL


Scenario: guest checkout – input SHIPPING info
Given I am on the BAG page with a sign in overlay open -o5a_checkoutpageGuestINTL
And I access the CHECKOUT page via GUEST CHECKOUT -o5a_checkoutpageGuestINTL
When I enter First Name, Last Name, Address Line 1, City -o5a_checkoutpageGuestINTL
And select a state from the State dropdown menu -o5a_checkoutpageGuestINTL
And enter Zip Code, Address, Phone Number -o5a_checkoutpageGuestINTL
And click on the shipping section CONTINUE button -o5a_checkoutpageGuestINTL
Then I move on to the PAYMENT section -o5a_checkoutpageGuestINTL

Scenario: guest checkout – input PAYMENT info
Given I am on the PAYMENT section -o5a_checkoutpageGuestINTL
When I enter Credit Card Number, Exp date, CVC, Name -o5a_checkoutpageGuestINTL
And click on the payment section CONTINUE button -o5a_checkoutpageGuestINTL
Then I move on to the SHIPPING METHOD section -o5a_checkoutpageGuestINTL

Scenario: SHIPPING METHOD CHANGE
Given I am on the CHECKOUT page to update shipping method -o5a_checkoutpageGuestINTL
When I select a different shipping methods from the given options -o5a_checkoutpageGuestINTL
Then the page should reflect the new shipping method -o5a_checkoutpageGuestINTL

Scenario: SHIPPING ADDRESS - change/add a new shipping address
Given I am on the CHECKOUT page to enter a new shipping Address -o5a_checkoutpageGuestINTL
When I click on the CHANGE button to open the shipping address edit section -o5a_checkoutpageGuestINTL
And click on ADD NEW ADDRESS under shipping address edit section -o5a_checkoutpageGuestINTL
And complete the shipping address form -o5a_checkoutpageGuestINTL
And click on SAVE&CONTINUE button to save the shipping address change -o5a_checkoutpageGuestINTL
Then the page should reflect the new shipping address -o5a_checkoutpageGuestINTL

Scenario: PAYMENT METHOD - change/add a payment method
Given I am on the CHECKOUT page to change payment method -o5a_checkoutpageGuestINTL
When I click on the CHANGE button to open the payment method edit section -o5a_checkoutpageGuestINTL
And click on ADD NEW CREDIT CARDAD under payment -o5a_checkoutpageGuestINTL
And complete the payment info form -o5a_checkoutpageGuestINTL
And click ADD PAYMENT -o5a_checkoutpageGuestINTL
Then the page should reflect the payment method -o5a_checkoutpageGuestINTL

Scenario: BILLING ADDRESS - change/add a new billing address
Given I am on the CHECKOUT page to change billing address -o5a_checkoutpageGuestINTL
When I click on the CHANGE button to open the billing address edit section -o5a_checkoutpageGuestINTL
And click on ADD NEW ADDRESS under billing address edit section -o5a_checkoutpageGuestINTL
And complete the billing address form -o5a_checkoutpageGuestINTL
And click on SAVE&CONTINUE button to save the billing address change -o5a_checkoutpageGuestINTL
Then the page should reflect the new billing address -o5a_checkoutpageGuestINTL





Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the CHECKOUT page -o5a_checkoutpageGuestINTL
When I click on the PLACE ORDER button -o5a_checkoutpageGuestINTL
Then I should be redirected to THANK YOU page -o5a_checkoutpageGuestINTL
And there should be an Order number -o5a_checkoutpageGuestINTL
