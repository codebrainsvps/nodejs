Feature:
As a user
I want to view the product on quicklook overlay
So that I can sort through products and look for what I need 

Scenario: product array - sort by and filter by 
Given I am on the website -o5a_PAQL
Then I enter this search term in the searchbox -o5a_PAQL
Then I press ENTER -o5a_PAQL
Then I am taken to a Product Array page via a search keywords -o5a_PAQL
When I select a <sortby dropdown> from the Sort By option -o5a_PAQL
And select a <refine group> and its <parameters> from the Filter By option -o5a_PAQL
Then I should see product array assortment change -o5a_PAQL
And validate order sequencing change -o5a_PAQL


Scenario: product array - pagination 
Given I am on a <Product Array page> -o5a_PAQL
When I click on next page -o5a_PAQL
Then I should be taken to page two of this product array -o5a_PAQL

#And validate product array content change -o5a_PAQL

Scenario: product array - left nav
Given I am on a <Product Array page> -leftnav -o5a_PAQL
When I click on a <category> in the left nav -o5a_PAQL
Then I should be taken to this <category> product array -o5a_PAQL

#And validate product array contents change -o5a_PAQL

Scenario: add to bag on quickview   - minicart validation 
Given I am taken to a Product Arraypage via a search keywords -QUICKVIEW -o5a_PAQL
And I open a product quickview overlay -o5a_PAQL
When I select a <color>, <size>, quantity “1” -o5a_PAQL
And click the ADD TO BAG button -o5a_PAQL
Then the item appears in the minicart -o5a_PAQL
And validate product info -o5a_PAQL

Scenario: open sign in overlay on bag page
#Given I have an item in the minicart -o5a_PAQL
#And I access the BAG PAGE by the CHECKOUT button in the minicart -o5a_PAQL
#When I click on the CHECKOUT button on the Bag page -o5a_PAQL
#Then a sign in overlay pops up -o5a_PAQL

Scenario: guest checkout – input SHIPPING info
#Given I am on the BAG page with a sign in overlay open -o5a_orderplacementGuest
#And I access the CHECKOUT page via GUEST CHECKOUT -o5a_orderplacementGuest
#When I enter First Name, Last Name, Address Line 1, City -o5a_orderplacementGuest
#And select a state from the State dropdown menu -o5a_orderplacementGuest
#And enter Zip Code, Address, Phone Number -o5a_orderplacementGuest
#And click on the shipping section CONTINUE button -o5a_orderplacementGuest
#Then I should see a QAS overlay -o5a_PAQL

Scenario: QAS overlay - suggested address selection 
#Given I am on the CHECKOUT page with a QAS overlay open -o5a_PAQL
#And with one of the suggest addresses radio button selected -o5a_PAQL
#When I click on USE SUGGESTED ADDRESS  button from the overlay -o5a_PAQL
#Then I should be redirected to the PAYMENT page -o5a_PAQL