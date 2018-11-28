Feature:
As a user,
I want to check that the elements in the header and footer are rendering,
So that I can navigate to other pages.

Scenario: Header top nav dropdowns and url are rendering
Given I open <website homepage> -o5a_topnavFooterGC
And top nav menu is rendering -o5a_topnavFooterGC
When I click on a category from the <category page name> drop-down in the Top Nav bar -o5a_topnavFooterGC
Then I should be taken to the <subcategory name> page -o5a_topnavFooterGC

Scenario: navigate to gift card product array via footer 
Given I am on the website -o5a_topnavFooterGC
And I am taken to the GiftCard page via footer CTA -o5a_topnavFooterGC
When I click on STANDARD GIFT CARD -o5a_topnavFooterGC
Then I should be taken to a gift card product details page -o5a_topnavFooterGC

Scenario: add to bag
Given I am on a gift card product details page -o5a_topnavFooterGC
When I select a denomination, quantity “1” -o5a_topnavFooterGC
And click the ADD TO BAG button -o5a_topnavFooterGC
Then the item appears in the mini cart -o5a_topnavFooterGC
And validate product info -o5a_topnavFooterGC


Scenario: proceed to bag page from minicart
Given I have a standard gift card in the mini cart -o5a_topnavFooterGC
When I click on the CHECKOUT button in the mini cart -o5a_topnavFooterGC
Then I should be taken to the bag page -o5a_topnavFooterGC
And validate bag page info -o5a_topnavFooterGC


Scenario: open sign in overlay on bag page
Given I am on the bag page -o5a_topnavFooterGC
When I click on the CHECKOUT button on the BAG page -o5a_topnavFooterGC
Then a sign in overlay pops up -o5a_topnavFooterGC


 
Scenario: log into registered account via bag page
Given I am on the BAG page with a sign in overlay open -o5a_topnavFooterGC
And I enter a valid email address and password -o5a_topnavFooterGC
When I click on the SIGN IN & CHECKOUT button on sign in overlay -o5a_topnavFooterGC
Then I should be redirected to the CHECKOUT page -o5a_topnavFooterGC

Scenario: apply promo 
Given I am on the CHECKOUT page that is promo eligible -o5a_topnavFooterGC
When I apply this promo code -o5a_topnavFooterGC
Then I should see the discount being applied on the item level -o5a_topnavFooterGC
And validate calculation change in order totals -o5a_topnavFooterGC


Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the CHECKOUT page -o5a_topnavFooterGC
When I click on the PLACE ORDER button -o5a_topnavFooterGC
Then I should be redirected to THANK YOU page -o5a_topnavFooterGC
And there should be an Order number -o5a_topnavFooterGC
 