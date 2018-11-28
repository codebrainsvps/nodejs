const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const { After } = require('cucumber');
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var username = client.globals.saksConstants.username;
var password = client.globals.saksConstants.password;
var acc_xxxxsAccount = client.globals.saksConstants.acc_xxxxsAccount;
var header_welcomeName = client.globals.saksConstants.header_welcomeName;
var acc_addNewShippingAddress = client.globals.saksConstants.acc_addNewShippingAddress;
var acc_addNewBillingAddress = client.globals.saksConstants.acc_addNewBillingAddress;
var acc_addNewPaymentMethod = client.globals.saksConstants.acc_addNewPaymentMethod;
var header_signoutmsg = client.globals.saksConstants.header_signoutmsg;
var header_welcomeSign = client.globals.saksConstants.header_welcomeSign;
var acc_signIntoMyAccount = client.globals.saksConstants.acc_signIntoMyAccount;



/******************log into registered account via account page************************************************************/ 
Given(/^I am on the accounts page -o5a_account$/, () => {
  return client
    .url(qaUrl)      
    .waitForElementVisible('#saksOverlay', 5000)
    .click('#saksOverlay')
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)   
});
When(/^I SIGN IN with a valid email and password -o5a_account$/, () => {
 return o5a_pageObj
    .waitForElementPresent('@header_welcomediv_class' , 5000)
    .click('@header_welcomeSignin_css')        
    .waitForElementPresent('@acc_loginNewaccount_class' , 5000)
    .assert.containsText('@acc_signinTitle_class', acc_signIntoMyAccount)
    .waitForElementPresent('@acc_signinSection_class' , 5000)
    .setValue('@acc_emailField_css', username)//dhan@test.com
    .setValue('@acc_passwordField_css', password)
    .click('@acc_signin_btn')
});
Then(/^I should be on the account summary page -o5a_account$/, () => {
  return o5a_pageObj
   .waitForElementPresent('@acc_pageheader_class' ,25000)
});
Then(/^validate account information is correct -o5a_account$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@acc_greetings_class' , 5000)
    .assert.containsText('@acc_greetings_class', acc_xxxxsAccount)
});
/******************account page rendering  ************************************************************/ 
Given(/^I am signed into my account -o5a_account$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@header_welcomeName_css', 15000)
    .assert.containsText('@header_welcomeName_css', header_welcomeName)   
});
When(/^I click on each account page: Account Summary, Order History, Shipping Address, Billing Address, Payment, Settings -o5a_account$/, () => {
  return o5a_pageObj
   .waitForElementPresent('@acc_headerNavTab_css' ,15000)
});
Then(/^I should see each page rendering -o5a_account$/, () => {
  return o5a_pageObj
  //.click('@acc_summaryTab_css')
  .waitForElementPresent('@acc_profile_class' , 15000)
  .assert.containsText('@acc_email_class', username) 
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
  .assert.containsText('@acc_email_class', username) 

  .click('@acc_favoritesTab_css')
  .waitForElementPresent('@acc_favoritesPage_css', 5000)
});
/**************sign out of registered account via top nav ************************************************/ 
Given(/^I am signed into my account page -o5a_account$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@acc_greetings_class' , 5000) 
    .waitForElementPresent('@header_welcomemsg_css' , 15000)  
});
When(/^I hover over <welcome, xxx> -o5a_account$/, () => {
  return o5a_pageObj
    .click('@header_welcomeDropdown_css')
});
Then(/^click on <Not xxx Sign out> from the dropdown> -o5a_account$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@header_welcomeSignout_class' , 7000)
    .moveToElement('@header_welcomeSignout_css',20,20)
    .assert.containsText('@header_welcomeSignout_class', header_signoutmsg)
    .click('@header_welcomeSignout_btn')
});
Then(/^I should be sign out of my account -o5a_account$/, () => {
  return client
    .pause(5000) 
});
Then(/^the top nav should reflect <Welcome, Sign In> -o5a_account$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@header_welcomeSignin_css', 15000)
    .assert.containsText('@header_welcomeSignin_css', header_welcomeSign)  
});
