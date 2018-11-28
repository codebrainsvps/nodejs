Feature:
As a user
I want to view the product on quicklook overlay
So that I can sort through products and look for what I need 


Scenario: change country flag via context chooser
Given I am on the website -o5a_PAQLINTL
And I open the context chooser by clicking on the country flag in the top nav -o5a_PAQLINTL
When I select this <country> from the country dropdown menu -o5a_PAQLINTL
And click on SAVE & CONTINUE SHOPPING -o5a_PAQLINTL
Then I should see a popupoverlay displaying shipping country change -o5a_PAQLINTL


Scenario: product array - sort by and filter by 
Given I enter this search term in the searchbox -o5a_PAQLINTL
Then I press ENTER -o5a_PAQLINTL
Then I am taken to a Product Array page via a search keywords -o5a_PAQLINTL
When I select a <sortby dropdown> from the Sort By option -o5a_PAQLINTL
And select a <refine group> and its <parameters> from the Filter By option -o5a_PAQLINTL
Then I should see product array assortment change -o5a_PAQLINTL
And validate order sequencing change -o5a_PAQLINTL


Scenario: product array - pagination 
Given I am on a <Product Array page> -o5a_PAQLINTL
When I click on next page -o5a_PAQLINTL
Then I should be taken to page two of this product array -o5a_PAQLINTL
#And validate product array content change -o5a_PAQLINTL

Scenario: product array - left nav
Given I am on a <Product Array page> -leftnav -o5a_PAQLINTL
When I click on a <category> in the left nav -o5a_PAQLINTL
Then I should be taken to this <category> product array -o5a_PAQLINTL
#And validate product array contents change -o5a_PAQLINTL

Scenario: add to bag on quickview   - minicart validation 
Given I am taken to a Product Arraypage via a search keywords -QUICKVIEW -o5a_PAQLINTL
And I open a product quickview overlay -o5a_PAQLINTL
When I select a <color>, <size>, quantity “1” -o5a_PAQLINTL
And click the ADD TO BAG button -o5a_PAQLINTL
Then the item appears in the minicart -o5a_PAQLINTL
And validate product info -o5a_PAQLINTL
