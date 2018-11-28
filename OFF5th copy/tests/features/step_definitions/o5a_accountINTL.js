const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const { After } = require('cucumber');
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var usernameINTL = client.globals.saksConstants.usernameINTL;
var password = client.globals.saksConstants.password;
var acc_xxxxsAccountINTL = client.globals.saksConstants.acc_xxxxsAccountINTL;
var header_welcomeNameINTL = client.globals.saksConstants.header_welcomeNameINTL;
var acc_addNewShippingAddress = client.globals.saksConstants.acc_addNewShippingAddress;
var acc_addNewBillingAddress = client.globals.saksConstants.acc_addNewBillingAddress;
var acc_addNewPaymentMethod = client.globals.saksConstants.acc_addNewPaymentMethod;
var header_signoutmsgINTL = client.globals.saksConstants.header_signoutmsgINTL;
var header_welcomeSign = client.globals.saksConstants.header_welcomeSign;
var acc_signIntoMyAccount = client.globals.saksConstants.acc_signIntoMyAccount;
var Intl_shipping = client.globals.saksConstants.Intl_shipping;
var Intl_country = client.globals.saksConstants.Intl_country;




/******************change country flag via context chooser************************************************************/ 
Given(/^I am on the website -o5a_accountINTL$/, () => {
  return client
    .url(qaUrl)
    .waitForElementVisible('#saksOverlay', 5000)
    .click('#saksOverlay')
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)
    .waitForElementPresent('.hbc-ship-to' , 5000) //country flag
    .click('#ui-header > div > header > div > div.hbc-ship-to > a.hbc-ship-to__flag') //country flag
    .pause(3000)         
});   
Then(/^I open the context chooser by clicking on the country flag in the top nav -o5a_accountINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@intl_shippingpage_class' , 5000)
    .waitForElementPresent('@intl_shippingTitle_css' , 5000)
    .assert.containsText('@intl_shippingTitle_css', Intl_shipping)
    .waitForElementPresent('@intl_contextChooser_css' , 5000)
    .waitForElementPresent('@intl_countryDropdownMenu_css' , 5000)
    .click('@intl_countryDropdownTestItem_css') //change country selection in pageObj.js file
});
When(/^I select this <country> from the country dropdown menu -o5a_accountINTL$/, () => {
  return client
    .pause(1000)
});
Then(/^click on SAVE & CONTINUE SHOPPING -o5a_accountINTL$/, () => {
  return o5a_pageObj
   .click('@intl_contextChooser_btn')
});
Then(/^I should see a popupoverlay displaying shipping country change -o5a_accountINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@intl_welcomemat_css', 5000)
    .waitForElementVisible('@intl_welcomematSubheadline_css', 5000)
    .assert.containsText('@intl_welcomematSubheadline_css', Intl_country)
    .click('@intl_welcomemat_btn')
});       
/******************log into registered account via account pager************************************************************/       
Given(/^I am on the accounts page -o5a_accountINTL$/, () => {
  return client
    .pause(1000)
    .waitForElementPresent('.welcome' , 5000)
    //.click('#ui-header > div > header > div > div.hbc-header__account > div > a > span')
});
When(/^I SIGN IN with a valid email and password -o5a_accountINTL$/, () => {
  return o5a_pageObj
  .click('@header_welcomeSignin_css')        
  .waitForElementPresent('@acc_loginNewaccount_class' , 5000)
  .assert.containsText('@acc_signinTitle_class', acc_signIntoMyAccount)
  .waitForElementPresent('@acc_signinSection_class' , 5000)
  .setValue('@acc_emailField_css', usernameINTL)//dhan@test.com
  .setValue('@acc_passwordField_css', password)
  .click('@acc_signin_btn')
});
Then(/^I should be on the account summary page -o5a_accountINTL$/, () => {
  return o5a_pageObj
  .waitForElementPresent('@acc_pageheader_class' ,25000)
});
Then(/^validate account information is correct -o5a_accountINTL$/, () => {
  return o5a_pageObj
  .waitForElementPresent('@acc_greetings_class' , 5000)
  .assert.containsText('@acc_greetings_class', acc_xxxxsAccountINTL)
});
/****************** account page rendering************************************************************/       
Given(/^I am signed into my account -o5a_accountINTL$/, () => {
  return o5a_pageObj
  .waitForElementVisible('@header_welcomeName_css', 15000)
  .assert.containsText('@header_welcomeName_css', header_welcomeNameINTL)   
});
 When(/^I click on each account page: Account Summary, Order History, Shipping Address, Billing Address, Payment, Settings -o5a_accountINTL$/, () => {
  return o5a_pageObj
  .waitForElementPresent('@acc_headerNavTab_css' ,15000)
});
 Then(/^I should see each page rendering -o5a_accountINTL$/, () => {
  return o5a_pageObj
  .click('@acc_summaryTab_css')
  .waitForElementPresent('@acc_profile_class' , 15000)
  .assert.containsText('@acc_email_class', usernameINTL) 
  .click('@acc_orderHistoryTab_css')
  .waitForElementPresent('@acc_orderHistoryDetails_css' , 15000)

  .click('@acc_shippingAddressTab_css')
  .waitForElementPresent('@acc_addNewShipAddress_class' , 15000)
  .assert.containsText('@acc_addNewShipAddressTitle_class', acc_addNewShippingAddress)

  .click('@acc_billingAddressTab_css')
  .waitForElementPresent('@acc_addNewBilAddress_class' , 15000)
  .assert.containsText('@acc_addNewBillAddressTitle_class', acc_addNewBillingAddress)

  .click('@acc_paymentTab_css')
  .waitForElementPresent('@acc_addNewPayment_class' , 15000)
  .assert.containsText('@acc_addNewPaymentTitle_class', acc_addNewPaymentMethod)

  .click('@acc_settingsTab_css')
  .waitForElementPresent('@acc_profile_class', 5000)
  .assert.containsText('@acc_email_class', usernameINTL) 

  .click('@acc_favoritesTab_css')
  .waitForElementPresent('@acc_favoritesPage_css', 5000)
});
/****************** sign out of registered account via top nav ************************************************************/      
Given(/^I am signed into my account page -o5a_accountINTL$/, () => {
  return o5a_pageObj
  .waitForElementPresent('@acc_greetings_class' , 5000) 
  .waitForElementPresent('@header_welcomemsg_css' , 15000)  
});
When(/^I hover over <welcome, xxx> -o5a_accountINTL$/, () => {
  return o5a_pageObj
  .click('@header_welcomeDropdown_css')
});
Then(/^click on <Not xxx Sign out> from the dropdown> -o5a_accountINTL$/, () => {
  return o5a_pageObj
  .waitForElementPresent('@header_welcomeSignout_class' , 7000)
  .moveToElement('@header_welcomeSignout_css',20,20)
  .assert.containsText('@header_welcomeSignout_class', header_signoutmsgINTL)
  .click('@header_welcomeSignout_btn')
});
Then(/^I should be sign out of my account -o5a_accountINTL$/, () => {
  return client
    .pause(3000)
});
Then(/^the top nav should reflect <Welcome, Sign In> -o5a_accountINTL$/, () => {
  return o5a_pageObj
  .waitForElementVisible('@header_welcomeSignin_css', 15000)
  .assert.containsText('@header_welcomeSignin_css', header_welcomeSign)  
});
        
