const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var productDescription_item1 =client.globals.saksConstants.productDescription_item1
var search_term1 =client.globals.saksConstants.search_term1
var pa_filterby =client.globals.saksConstants.pa_filterby
var pa_paginationPageSelected =client.globals.saksConstants.pa_paginationPageSelected
var pa_leftnavCategory =client.globals.saksConstants.pa_leftnavCategory
var Intl_shipping = client.globals.saksConstants.Intl_shipping;
var Intl_country = client.globals.saksConstants.Intl_country;
var search_term2 =client.globals.saksConstants.search_term2
var enterKey =client.globals.saksConstants.enterKey;
var Intl_currency = client.globals.saksConstants.Intl_currency;


/*******change country flag via context chooser ***************************************************************************/
Given(/^I am on the website -o5a_PAQLINTL$/, () => {
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
Then(/^I open the context chooser by clicking on the country flag in the top nav -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@intl_shippingpage_class' , 5000)
    .waitForElementPresent('@intl_shippingTitle_css' , 5000)
    .assert.containsText('@intl_shippingTitle_css', Intl_shipping)
    .waitForElementPresent('@intl_contextChooser_css' , 5000)
    .waitForElementPresent('@intl_countryDropdownMenu_css' , 5000)
    .click('@intl_countryDropdownTestItem_css') //change country selection in pageObj.js file
});
When(/^I select this <country> from the country dropdown menu -o5a_PAQLINTL$/, () => {
  return client
    .pause(1000)
});
Then(/^click on SAVE & CONTINUE SHOPPING -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .click('@intl_contextChooser_btn')
});
Then(/^I should see a popupoverlay displaying shipping country change -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@intl_welcomemat_css', 5000)
    .waitForElementVisible('@intl_welcomematSubheadline_css', 5000)
    .assert.containsText('@intl_welcomematSubheadline_css', Intl_country)
    .click('@intl_welcomemat_btn')
}); 


/*******Product array page - sort by and filter ***************************************************************************/
Given(/^I enter this search term in the searchbox -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .assert.visible('@header_searchBar_class') 
    .setValue('@header_searchBar_class', search_term1)
});
Then(/^I press ENTER -o5a_PAQLINTL$/, () => {
    return client
    .keys(enterKey)
});
Then(/^I am taken to a Product Array page via a search keywords -o5a_PAQLINTL$/, () => {
  return o5a_pageObj 
    .waitForElementPresent('@pa_productPrice_class' , 5000) 
    .assert.containsText('@pa_productPrice_class', Intl_currency)
    .waitForElementVisible('@pa_sortby_class', 5000)
    .assert.visible('@pa_sortby_class')
    .click('@pa_sortby_class')
    .click('@pa_sortby_css')  //value preselected in pageObj.js 
    .waitForElementPresent('@pa_filterby_css' , 15000) //value preselected in pageObj.js 
    .click('@pa_filterby_css')
});  
When(/^I select a <sortby dropdown> from the Sort By option -o5a_PAQLINTL$/,() => {
  return client
    .pause(3000)
});
Then(/^select a <refine group> and its <parameters> from the Filter By option -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_filterbyCheckbox_css' , 10000)//value preselected in pageObj.js 
    .click('@pa_filterbyCheckbox_css')
    .waitForElementPresent('@pa_filterbyApply_css' , 2000)
    .click('@pa_filterbyApply_css')  
}); 
Then(/^I should see product array assortment change -o5a_PAQLINTL$/, () => {
  return client
    .pause(8000)
});
Then(/^validate order sequencing change -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_filterbyParameters_css' , 20000)
    .assert.containsText('@pa_filterbyParameters_css', pa_filterby)
    .waitForElementPresent('@pa_productPrice_class' , 5000) 
    .assert.containsText('@pa_productPrice_class', Intl_currency)
}); 

/*******Product array - pagination ***************************************************************************/
Given(/^I am on a <Product Array page> -o5a_PAQLINTL$/, () => {
 return o5a_pageObj
    .waitForElementPresent('@pa_paginationNumber_class' ,2000)
});
When(/^I click on next page -o5a_PAQLINTL$/,() => {
  return o5a_pageObj
    .waitForElementPresent('@pa_paginationRightArrow_css' ,2000) //value preselected in pageObj.js 
    .click('@pa_paginationRightArrow_css')
});
Then(/^I should be taken to page two of this product array -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_paginationPageSelected_class' , 7000) 
    .assert.containsText('@pa_paginationPageSelected_class', pa_paginationPageSelected)
    .waitForElementPresent('@pa_productPrice_class' , 5000) 
    .assert.containsText('@pa_productPrice_class', Intl_currency)
});
/*
Then(/^validation product array content change -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .assert.containsText('@pa_paginationPageSelected_class', productArrayTitle)
}); */

/******* product array - left nav ***************************************************************************/
Given(/^I am on a <Product Array page> -leftnav -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_leftnav_class', 5000) 
    .waitForElementPresent('@pa_leftnavCategory_css' , 5000) //preselected in pageObj
    .click('@pa_leftnavCategory_css') 
});
When(/^I click on a <category> in the left nav -o5a_PAQLINTL$/,() => {
  return client
    .pause(500)
});
Then(/^I should be taken to this <category> product array -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_breadcrumbCategory_css' , 5000) //preselected in pageObj
    .assert.containsText('@pa_breadcrumbCategory_css', pa_leftnavCategory)
    .waitForElementPresent('@pa_productPrice_class' , 5000) 
    .assert.containsText('@pa_productPrice_class', Intl_currency)
});
/*
Then(/^validate product array contents change -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
  
});  */

/******* add to bag on quickview - minicart validation ***************************************************************************/
Given(/^I am taken to a Product Arraypage via a search keywords -QUICKVIEW -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .assert.visible('@header_searchBar_class') 
    .setValue('@header_searchBar_class', search_term2)
    .click('@header_searchSubmit_btn') 
});  
Then(/^I open a product quickview overlay -o5a_PAQLINTL$/,() => {
   return o5a_pageObj
      .waitForElementPresent('@pa_productPrice_class' , 5000) 
      .assert.containsText('@pa_productPrice_class', Intl_currency)
      .waitForElementPresent('@pa_product_css', 5000) //preselected in pageObj
      .moveToElement('@pa_product_css', 200, 200)
      .waitForElementPresent('@pa_quicklook_css', 500) //preselected in pageObj
      .click('@pa_quicklook_css')
});
When(/^I select a <color>, <size>, quantity “1” -o5a_PAQLINTL$/, () => {
 return client
      .pause(2000)    
});
Then(/^click the ADD TO BAG button -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_quicklookOverlay_class' , 10000)
    .waitForElementPresent('@pa_quicklookPrice_class' , 10000)
    .waitForElementPresent('@pa_quicklookThumbnail_css' , 10000)
    .waitForElementPresent('@pa_quicklookImg_css' , 10000) 
    .waitForElementPresent('@pa_quicklookSize_class' , 5000)
    .click('@pa_quicklookSizeSelector_class')  
    .waitForElementPresent('@pa_quicklookColor_class', 15000)
});  
Then(/^the item appears in the minicart -o5a_PAQLINTL$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@pa_addtobag_btn', 15000)   
      .click('@pa_addtobag_btn')
      .waitForElementPresent('@minicart_header_class' , 5000)
});
Then(/^validate product info -o5a_PAQLINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@minicart_itemDetails_class', 5000)
    .assert.containsText('@minicart_itemDetails_class', productDescription_item1)
    .waitForElementVisible('@minicart_price_class', 5000)
    .assert.containsText('@minicart_price_class', Intl_currency)
}); 