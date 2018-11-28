Feature:
As a registered user
I want to view the CHECKOUT page
I want to be able to modify customer order info on the checkout page 

Scenario: search by web id 
Given I am on the website -o5a_checkoutpageReg
When I enter this product id -o5a_checkoutpageReg
Then I should be taken to a PDP of this product -o5a_checkoutpageReg

Scenario: add to bag on PDP
Given I am on a Product Detail Page -o5a_checkoutpageReg
When I select a color, size, quantity “1” -o5a_checkoutpageReg
And click the ADD TO BAG button -o5a_checkoutpageReg
Then the item appears in the mini cart -o5a_checkoutpageReg
Then validate product info -o5a_checkoutpageReg

Scenario: change quantity of the item on the bag page
Given I have an item in the mini cart -o5a_checkoutpageReg
And I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_checkoutpageReg
When I update the following product information on the bag page -o5a_checkoutpageReg
Then I should see the product information updated on the bag: -o5a_checkoutpageReg
 
Scenario: log into registered account via bag page
Given I am on the BAG page with a sign in overlay open -o5a_checkoutpageReg
And I enter a valid email address and password -o5a_checkoutpageReg
When I click on the SIGN IN & CHECKOUT button on sign in overlay -o5a_checkoutpageReg
Then I should be redirected to the CHECKOUT page -o5a_checkoutpageReg

Scenario: change quantity of the item on the R&B  page
#Given I am on the CHECKOUT page and update the item info -o5a_checkoutpageReg
#When I update the following product information on the R&S page: -o5a_checkoutpageReg
#| quantity 	| 5       		|
#Then I should see the product information updated on the R&S  page: -o5a_checkoutpageReg 
#| quantity 	| 5       		|
#And validate calculation change in order total -o5a_checkoutpageReg

Scenario: change size, quantity, and color of the items on product overlay
#Given I am on the Review&Submit page and edit item details -o5a_checkoutpageReg
#And I access the item overlay by the EDIT button -o5a_checkoutpageReg
#When I update the following product information on the overlay -o5a_checkoutpageReg
#| size    	    | <size>    	|
#| color    	| <color> 	    |
#| quantity 	| 6     		|

Scenario: SHIPPING ADDRESS - Select an Existing Address
Given I am on the CHECKOUT page to change shipping address -o5a_checkoutpageReg
When I click on the CHANGE button to open the address edit section -o5a_checkoutpageReg
And select an existing shipping address -o5a_checkoutpageReg
And click SAVE&CONTINUE -o5a_checkoutpageReg
Then the page should reflect the new shipping address -o5a_checkoutpageReg

Scenario: BILLING ADDRESS & PAYMENT METHOD
Given I am on the CHECKOUT page to change billing address and payment method -o5a_checkoutpageReg
When I click on the CHANGE button to open the payment method edit section -o5a_checkoutpageReg
And select an existing payemnt method -o5a_checkoutpageReg
And select an existing billing address -o5a_checkoutpageReg
And click SAVE&CONTINUE on the payment method edit section -o5a_checkoutpageReg
Then the page should reflect the new billing address and payment method -o5a_checkoutpageReg

Scenario: apply promo 
Given I am on the CHECKOUT page that is promo eligible -o5a_checkoutpageReg
When I apply this promo code -o5a_checkoutpageReg
Then I should see the discount being applied on the item level -o5a_checkoutpageReg
And validate calculation change in order totals -o5a_checkoutpageReg

Scenario: remove promo 
Given I am on the CHECKOUT page w promo applied -o5a_checkoutpageReg
When I remove this promo code -o5a_checkoutpageReg
Then I should see the calculation change in order totals -o5a_checkoutpageReg

Scenario: SHIPPING METHOD
Given I am on the CHECKOUT page to update shipping method -o5a_checkoutpageReg
When I select a different shipping methods from the given options -o5a_checkoutpageReg
Then the page should reflect the new shipping method -o5a_checkoutpageReg

Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the CHECKOUT page -o5a_checkoutpageReg
When I click on the PLACE ORDER button -o5a_checkoutpageReg
Then I should be redirected to THANK YOU page -o5a_checkoutpageReg
And there should be an Order number -o5a_checkoutpageReg