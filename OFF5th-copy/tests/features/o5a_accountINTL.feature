Feature:
As a registered user
I want to access the account page
I want to be able to view and modify account info

Scenario: change country flag via context chooser
Given I am on the website -o5a_accountINTL
And I open the context chooser by clicking on the country flag in the top nav -o5a_accountINTL
When I select this <country> from the country dropdown menu -o5a_accountINTL
And click on SAVE & CONTINUE SHOPPING -o5a_accountINTL
Then I should see a popupoverlay displaying shipping country change -o5a_accountINTL

 
Scenario: log into registered account via account page
Given I am on the accounts page -o5a_accountINTL
When I SIGN IN with a valid email and password -o5a_accountINTL
Then I should be on the account summary page -o5a_accountINTL
And validate account information is correct -o5a_accountINTL

Scenario: account page rendering 
Given I am signed into my account -o5a_accountINTL
When I click on each account page: Account Summary, Order History, Shipping Address, Billing Address, Payment, Settings -o5a_accountINTL
Then I should see each page rendering -o5a_accountINTL

Scenario: sign out of registered account via top nav 
Given I am signed into my account -o5a_accountINTL
When I hover over <welcome, xxx> -o5a_accountINTL
And click on <Not xxx Sign out> from the dropdown> -o5a_accountINTL
Then I should be sign out of my account -o5a_accountINTL
And the top nav should reflect <Welcome, Sign In> -o5a_accountINTL