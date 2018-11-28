Feature:
As a user
I want to view the bag page
I want to be able to modify product attributes to tailor what I need 

Scenario: change country flag via context chooser
Given I am on the website -o5a_bagpageINTL
And I open the context chooser by clicking on the country flag in the top nav -o5a_bagpageINTL
When I select this <country> from the country dropdown menu -o5a_bagpageINTL
And click on SAVE & CONTINUE SHOPPING -o5a_bagpageINTL
Then I should see a popupoverlay displaying shipping country change -o5a_bagpageINTL

Scenario: search by web id 
Given I am on the homepage -o5a_bagpageINTL
When I enter this product id -o5a_bagpageINTL
Then I should be taken to a PDP of this product -o5a_bagpageINTL

Scenario: add to bag on PDP
Given I am on a Product Detail Page -o5a_bagpageINTL
When I select a color, size, quantity “1” -o5a_bagpageINTL
And click the ADD TO BAG button -o5a_bagpageINTL
Then the item appears in the mini cart -o5a_bagpageINTL


Scenario: change size, quantity, and color of the items on product overlay
Given I have an item in the mini cart -o5a_bagpageINTL
When I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_bagpageINTL
And I access the PDS overlay by clicking on the item image -o5a_bagpageINTL
#| size    	| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 6     		|
Then I update the following product information on the overlay -o5a_bagpageINTL
#| size    	| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 6     	|
And I should see the product information updated on the bagpage:-o5a_bagpageINTL

Scenario: change quantity of the item on the bag page
Given I am on the bag page -o5a_bagpageINTL
When I update the following product information on the bag page -o5a_bagpageINTL
#| quantity 	| 5    |
Then I should see the product information updated on the bag: -o5a_bagpageINTL
#| quantity 	| 5    |
#And validate calculation change in order totals -o5a_bagpageINTL


Scenario: remove the items on the bag
Given I have an item on the bag page -o5a_bagpageINTL
When I click on REMOVE option -o5a_bagpageINTL
Then I should see an empty bag page -o5a_bagpageINTL
