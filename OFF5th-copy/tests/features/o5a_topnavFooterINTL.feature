Feature:
As a user
I want to check that the elements in the header and footer are rendering,
And be able to navigate to other pages via header and footer

Scenario: change country flag via context chooser
Given I am on the website -o5a_topnavFooterINTL
And I open the context chooser by clicking on the country flag in the top nav -o5a_topnavFooterINTL
When I select this <country> from the country dropdown menu -o5a_topnavFooterINTL
And click on SAVE & CONTINUE SHOPPING -o5a_topnavFooterINTL
Then I should see a popupoverlay displaying shipping country change -o5a_topnavFooterINTL

Scenario: Header top nav dropdowns and url are rendering
Given I am on the homepage -o5a_topnavFooterINTL
And top nav menu is rendering -o5a_topnavFooterINTL    
When I click on a category from the <category page name> drop-down in the Top Nav bar -o5a_topnavFooterINTL    
Then I should be taken to the <subcategory name> page -o5a_topnavFooterINTL    

Scenario: Footer and URL are rendering 
Given I am back on the homepage -o5a_topnavFooterINTL 
And I scroll down to page footer -o5a_topnavFooterINTL
When I click on <this CTA link> in the page footer -o5a_topnavFooterINTL  
Then I should be taken to <this CTA link> page -o5a_topnavFooterINTL   
