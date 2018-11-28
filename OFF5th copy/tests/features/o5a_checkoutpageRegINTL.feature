Feature:
As a registered user
I want to view the CHECKOUT page
I want to be able to modify customer order info on the checkout page 

Scenario: change country flag via context chooser
Given I am on the website -o5a_checkoutpageRegINTL
And I open the context chooser by clicking on the country flag in the top nav -o5a_checkoutpageRegINTL
When I select this <country> from the country dropdown menu -o5a_checkoutpageRegINTL
And click on SAVE & CONTINUE SHOPPING -o5a_checkoutpageRegINTL
Then I should see a popupoverlay displaying shipping country change -o5a_checkoutpageRegINTL

Scenario: search by web id 
Given I am on the homepage -o5a_checkoutpageRegINTL
When I enter this product id -o5a_checkoutpageRegINTL
Then I should be taken to a PDP of this product -o5a_checkoutpageRegINTL

Scenario: add to bag on PDP
Given I am on a Product Detail Page -o5a_checkoutpageRegINTL
When I select a color, size, quantity “1” -o5a_checkoutpageRegINTL
And click the ADD TO BAG button -o5a_checkoutpageRegINTL
Then the item appears in the mini cart -o5a_checkoutpageRegINTL
Then validate product info -o5a_checkoutpageRegINTL

Scenario: Change quantity of the item on the bag page
Given I have an item in the mini cart -o5a_checkoutpageRegINTL
And I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_checkoutpageRegINTL
When I click on the CHECKOUT button on the Bag page -o5a_checkoutpageRegINTL
Then a sign in overlay pops up -o5a_checkoutpageRegINTL

Scenario: log into registered account via bag page
Given I am on the BAG page with a sign in overlay open -o5a_checkoutpageRegINTL
And I enter a valid email address and password -o5a_checkoutpageRegINTL
When I click on the SIGN IN & CHECKOUT button on sign in overlay   -o5a_checkoutpageRegINTL
Then I should be redirected to the CHECKOUT page -o5a_checkoutpageRegINTL


Scenario: change  quantity of the items on the R&B  page
#Given I am on the Review&Submit page to update the item info -o5a_checkoutpageRegINTL
#When I update the following product information on the R&S page: -o5a_checkoutpageRegINTL
#| quantity 	| 5       		|
#Then I should see the product information updated on the R&S  page: -o5a_checkoutpageRegINTL 
#| quantity 	| 5       		|
#And validate calculation change in order total -o5a_checkoutpageRegINTL

Scenario: SHIPPING ADDRESS - Select an Existing Address
Given I am on the CHECKOUT page to change shipping address -o5a_checkoutpageRegINTL
When I click on the CHANGE button to open the address edit section -o5a_checkoutpageRegINTL
And select an existing shipping address -o5a_checkoutpageRegINTL
And click SAVE&CONTINUE -o5a_checkoutpageRegINTL
Then the page should reflect the new shipping address -o5a_checkoutpageRegINTL

Scenario: BILLING ADDRESS & PAYMENT METHOD
Given I am on the CHECKOUT page to change billing address and payment method -o5a_checkoutpageRegINTL
When I click on the CHANGE button to open the payment method edit section -o5a_checkoutpageRegINTL
And select an existing payemnt method -o5a_checkoutpageRegINTL
And select an existing billing address -o5a_checkoutpageRegINTL
And click SAVE&CONTINUE on the payment method edit section -o5a_checkoutpageRegINTL
Then the page should reflect the new billing address and payment method -o5a_checkoutpageRegINTL


Scenario: SHIPPING METHOD
Given I am on the CHECKOUT page to update shipping method -o5a_checkoutpageRegINTL
When I select a different shipping methods from the given options -o5a_checkoutpageRegINTL
Then the page should reflect the new shipping method -o5a_checkoutpageRegINTL

Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the CHECKOUT page -o5a_checkoutpageRegINTL
When I click on the PLACE ORDER button -o5a_checkoutpageRegINTL
Then I should be redirected to THANK YOU page -o5a_checkoutpageRegINTL
And there should be an Order number -o5a_checkoutpageRegINTL
