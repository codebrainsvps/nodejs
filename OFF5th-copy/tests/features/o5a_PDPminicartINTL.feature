Feature:
As a user
I want to view the product 
I want to be able to modify product attributes to tailor what I need 

Scenario: change country flag via context chooser
Given I am on the website -o5a_PDPminicartINTL
And I open the context chooser by clicking on the country flag in the top nav -o5a_PDPminicartINTL
When I select this <country> from the country dropdown menu -o5a_PDPminicartINTL
And click on SAVE & CONTINUE SHOPPING -o5a_PDPminicartINTL
Then I should see a popupoverlay displaying shipping country change -o5a_PDPminicartINTL


Scenario: search by web id 
Given I am on the homepage -o5a_PDPminicartINTL
When I enter this product id -o5a_PDPminicartINTL
Then I should be taken to a PDP of this product -o5a_PDPminicartINTL

Scenario: PDP - switch between images, colors, and size
Given I am on a Product Detail Page that has multiple colors, sizes, and images -o5a_PDPminicartINTL
When I alternate between the images, colors, and sizes available -o5a_PDPminicartINTL
Then I should see the changes being reflected for the sku -o5a_PDPminicartINTL

Scenario: add to bag on PDP
Given I am on a Product Detail Page -o5a_PDPminicartINTL
When I select a color, size, quantity “2” -o5a_PDPminicartINTL
And click the ADD TO BAG button -o5a_PDPminicartINTL
Then I can validate the options color, size, '2', price selected in the mini bag -o5a_PDPminicartINTL
#| size    	| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 2       	|


Scenario: search by web id #2
Given I am back on the homepage -o5a_PDPminicartINTL
When I enter this product id or sku -o5a_PDPminicartINTL
Then I should be navigated to a PDP of this product -o5a_PDPminicartINTL

Scenario: PDP - switch between images, colors, and size
Given I am on a Product Detail Page that has multiple colors, sizes, and images for selected sku -o5a_PDPminicartINTL
When I alternate between the images, colors, and sizes available for sku -o5a_PDPminicartINTL
Then I should see the changes being reflected -o5a_PDPminicartINTL

Scenario: add to bag on PDP
Given I am on a Product Detail Page for a selected sku -o5a_PDPminicartINTL
When I select a color, size, quantity “2” for different sku -o5a_PDPminicartINTL
And click the ADD TO BAG button in PDP page -o5a_PDPminicartINTL
Then I can validate the options color, size, '2', price selected for sku in the mini bag for sku -o5a_PDPminicartINTL
#| size    		| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 2       	|

Scenario: bag page renders with correct item amount 
Given I have items in the MINI CART -o5a_PDPminicartINTL
When I click on the CHECKOUT button in the mini cart -o5a_PDPminicartINTL
Then I should be taken to the the bag page -o5a_PDPminicartINTL
And validate multi item info are rendering correctly -o5a_PDPminicartINTL

