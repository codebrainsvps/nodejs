Feature:
As a registered user
I want to access the account page
I want to be able to view and modify account info

Scenario: log into registered account via account page
Given I am on the accounts page -o5a_account
When I SIGN IN with a valid email and password -o5a_account
Then I should be on the account summary page -o5a_account 
And validate account information is correct -o5a_account

Scenario: account page rendering 
Given I am signed into my account -o5a_account
When I click on each account page: Account Summary, Order History, Shipping Address, Billing Address, Payment, Settings -o5a_account
Then I should see each page rendering -o5a_account


Scenario: sign out of registered account via top nav
Given I am signed into my account -o5a_account
When I hover over <welcome, xxx> -o5a_account
And click on <Not xxx Sign out> from the dropdown> -o5a_account
Then I should be sign out of my account -o5a_account
And the top nav should reflect <Welcome, Sign In> -o5a_account