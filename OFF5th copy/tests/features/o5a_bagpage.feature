Feature:
As a user
I want to view the bag page
I want to be able to modify product attributes to tailor what I need 

Scenario: search by web id 
Given I am on the website -o5a_bagpage
When I enter this product id -o5a_bagpage
Then I should be taken to a PDP of this product -o5a_bagpage

Scenario: add to bag on PDP
Given I am on a Product Detail Page -o5a_bagpage
When I select a color, size, quantity “1” -o5a_bagpage
And click the ADD TO BAG button -o5a_bagpage
Then the item appears in the mini cart -o5a_bagpage

Scenario: change size, quantity, and color of the items on product overlay
Given I have an item in the mini cart -o5a_bagpage
When I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_bagpage
And I access the PDS overlay by clicking on the item image -o5a_bagpage
#| size    	| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 6     		|
Then I update the following product information on the overlay -o5a_bagpage
#| size    	| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 6     	|
And I should see the product information updated on the bagpage:-o5a_bagpage

Scenario: change quantity of the item on the bag page
Given I am on the bag page -o5a_bagpage
When I update the following product information on the bag page -o5a_bagpage
#| quantity 	| 5    |
Then I should see the product information updated on the bag: -o5a_bagpage
#| quantity 	| 5    |
#And validate calculation change in order totals -o5a_bagpage

Scenario: apply promo code
Given I have an item on the bag page that is promo eligible -o5a_bagpage
When I apply this promo code -o5a_bagpage
Then I should see the discount being applied on the item level -o5a_bagpage
And validate calculation change in order total -o5a_bagpage


#Scenario: Estimated tax calculation 
#Given I have an item on the bag page that is taxable -o5a_bagpage
#When I enter a shipping Zip Code -o5a_bagpage
#Then I should see calculation change for tax and order total -o5a_bagpage

Scenario: remove the items on the bag
Given I have an item on the bag page -o5a_bagpage
When I click on REMOVE option -o5a_bagpage
Then I should see an empty bag page -o5a_bagpage
