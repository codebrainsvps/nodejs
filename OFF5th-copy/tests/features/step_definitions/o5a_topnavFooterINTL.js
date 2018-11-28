const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const { After } = require('cucumber');
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var Intl_shipping = client.globals.saksConstants.Intl_shipping;
var Intl_country = client.globals.saksConstants.Intl_country;
var header_subcatPagetitle =client.globals.saksConstants.header_subcatPagetitle;
var acc_signIntoMyAccount =client.globals.saksConstants.acc_signIntoMyAccount;

/******* change country flag via context chooser ***************************************************************************/
Given(/^I am on the website -o5a_topnavFooterINTL$/, () => {
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
Then(/^I open the context chooser by clicking on the country flag in the top nav -o5a_topnavFooterINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@intl_shippingpage_class' , 5000)
    .waitForElementPresent('@intl_shippingTitle_css' , 5000)
    .assert.containsText('@intl_shippingTitle_css', Intl_shipping)
    .waitForElementPresent('@intl_contextChooser_css' , 5000)
    .waitForElementPresent('@intl_countryDropdownMenu_css' , 5000)
    .click('@intl_countryDropdownTestItem_css') //change country selection in pageObj.js file
});
When(/^I select this <country> from the country dropdown menu -o5a_topnavFooterINTL$/, () => {
  return client
    .pause(1000)
});
Then(/^click on SAVE & CONTINUE SHOPPING -o5a_topnavFooterINTL$/, () => {
  return o5a_pageObj
    .click('@intl_contextChooser_btn')
});
Then(/^I should see a popupoverlay displaying shipping country change -o5a_topnavFooterINTL$/, () => {
return o5a_pageObj
.waitForElementVisible('@intl_welcomemat_css', 5000)
.waitForElementVisible('@intl_welcomematSubheadline_css', 5000)
.assert.containsText('@intl_welcomematSubheadline_css', Intl_country)
.click('@intl_welcomemat_btn')
}); 
/*****************  Header top nav dropdowns and url are rendering ************************************************** */
Given(/^I am on the homepage -o5a_topnavFooterINTL$/, () => {
  return client
    .url(qaUrl)    
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)
});
Then(/^top nav menu is rendering -o5a_topnavFooterINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@header_navigation_class' , 7000)
    .waitForElementPresent('@header_navigationPane_class' , 7000)
    .waitForElementPresent('@header_subcategory_class', 5000)
    .moveToElement('@header_category_css' , 20,20) //preselected in pageObj.js
    .waitForElementPresent('@header_categoryColumn_css' , 7000) //preselected in pageObj.js
});
When(/^I click on a category from the <category page name> drop-down in the Top Nav bar -o5a_topnavFooterINTL$/ , () => {
  return client  
    .pause(3000)
});
Then(/^I should be taken to the <subcategory name> page -o5a_topnavFooterINTL$/, ()  => {
  return o5a_pageObj
    .click('@header_categoryColumnSubcategory_css') //preselected in pageObj.js
    .waitForElementPresent('title' , 22000)
    .assert.title(header_subcatPagetitle)
});
/************************* footer renders and url is rendering *************************************************** */
Given(/^I am back on the homepage -o5a_topnavFooterINTL$/, () => {
  return client
    .url(qaUrl)  
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(200, 6000)')         
});
  Then(/^I scroll down to page footer -o5a_topnavFooterINTL$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@footer_css' , 7000)
      .waitForElementPresent('@footer_column_css', 5000)
});
  When(/^I click on <this CTA link> in the page footer -o5a_topnavFooterINTL$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@footer_columnCreateAccount_css' , 9000)
      .click('@footer_columnCreateAccount_css') 
    }); 
  Then(/^I should be taken to <this CTA link> page -o5a_topnavFooterINTL$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@acc_loginNewaccount_class' , 5000)
      .assert.containsText('@acc_signinTitle_class', acc_signIntoMyAccount)
    
   }); 
