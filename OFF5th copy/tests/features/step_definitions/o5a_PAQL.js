const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var username = client.globals.saksConstants.username;
var productDescription_item1 =client.globals.saksConstants.productDescription_item1
var bag_pagetitle =client.globals.saksConstants.bag_pagetitle
var checkout_pagetitle =client.globals.saksConstants.checkout_pagetitle
var checkout_firstName = client.globals.saksConstants.checkout_firstName
var checkout_lastName= client.globals.saksConstants.checkout_lastName
var checkout_address1_QAS= client.globals.saksConstants.checkout_address1_QAS
var checkout_city = client.globals.saksConstants.checkout_city
var checkout_zip= client.globals.saksConstants.checkout_zip
var checkout_phone= client.globals.saksConstants.checkout_phone
var search_term1 =client.globals.saksConstants.search_term1
var search_term2 =client.globals.saksConstants.search_term2
var pa_filterby =client.globals.saksConstants.pa_filterby
var pa_paginationPageSelected =client.globals.saksConstants.pa_paginationPageSelected
var pa_leftnavCategory =client.globals.saksConstants.pa_leftnavCategory
var enterKey =client.globals.saksConstants.enterKey;






/*******Product array page - sort by and filter ***************************************************************************/
Given(/^I am on the website -o5a_PAQL$/, () => {
  return client
    .url(qaUrl)      
    .waitForElementVisible('#saksOverlay', 5000)
    .click('#saksOverlay')
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle )   
});
Given(/^I enter this search term in the searchbox -o5a_PAQL$/, () => {
  return o5a_pageObj
    .assert.visible('@header_searchBar_class') 
    .setValue('@header_searchBar_class', search_term1)
});
Then(/^I press ENTER -o5a_PAQL$/, () => {
    return client
    .keys(enterKey)
});
Then(/^I am taken to a Product Array page via a search keywords -o5a_PAQL$/, () => {
  return o5a_pageObj
    .assert.visible('@pa_sortby_class')
    .click('@pa_sortby_class')
    .click('@pa_sortby_css')  //value preselected in pageObj.js 
    .waitForElementPresent('@pa_filterby_css' , 15000) //value preselected in pageObj.js 
    .click('@pa_filterby_css')
});  
When(/^I select a <sortby dropdown> from the Sort By option -o5a_PAQL$/,() => {
  return client
    .pause(3000)
});
Then(/^select a <refine group> and its <parameters> from the Filter By option -o5a_PAQL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_filterbyCheckbox_css' , 10000)//value preselected in pageObj.js 
    .click('@pa_filterbyCheckbox_css')
    .waitForElementPresent('@pa_filterbyApply_css' , 2000)
    .click('@pa_filterbyApply_css')
}); 
Then(/^I should see product array assortment change -o5a_PAQL$/, () => {
  return client
    .pause(6000)
});
Then(/^validate order sequencing change -o5a_PAQL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_filterbyParameters_css' , 20000)
    .assert.containsText('@pa_filterbyParameters_css', pa_filterby)
}); 

/*******Product array - pagination ***************************************************************************/
Given(/^I am on a <Product Array page> -o5a_PAQL$/, () => {
 return o5a_pageObj
    .waitForElementPresent('@pa_paginationNumber_class' ,2000)
});
When(/^I click on next page -o5a_PAQL$/,() => {
  return o5a_pageObj
    .waitForElementPresent('@pa_paginationRightArrow_css' ,2000) //value preselected in pageObj.js 
    .click('@pa_paginationRightArrow_css')
});
Then(/^I should be taken to page two of this product array -o5a_PAQL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_paginationPageSelected_class' , 7000) 
    .assert.containsText('@pa_paginationPageSelected_class', pa_paginationPageSelected)
});
/*
Then(/^validation product array content change -o5a_PAQL$/, () => {
  return o5a_pageObj
    .assert.containsText('@pa_paginationPageSelected_class', productArrayTitle)
}); */

/*******product array - left nav***************************************************************************/
Given(/^I am on a <Product Array page> -leftnav -o5a_PAQL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_leftnav_class', 5000) 
    .waitForElementPresent('@pa_leftnavCategory_css' , 5000) //preselected in pageObj
    .click('@pa_leftnavCategory_css')  
});
When(/^I click on a <category> in the left nav -o5a_PAQL$/,() => {
  return client
    .pause(500)
});
Then(/^I should be taken to this <category> product array -o5a_PAQL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_breadcrumbCategory_css' , 5000) //preselected in pageObj
    .assert.containsText('@pa_breadcrumbCategory_css', pa_leftnavCategory)
});
/*
Then(/^validate product array contents change -o5a_PAQL$/, () => {
  return o5a_pageObj
  
}); */
/******* add to bag on quickview - minicart validation***************************************************************************/
Given(/^I am taken to a Product Arraypage via a search keywords -QUICKVIEW -o5a_PAQL$/, () => {
  return o5a_pageObj
    .assert.visible('@header_searchBar_class') 
    .setValue('@header_searchBar_class', search_term2)
    .click('@header_searchSubmit_btn') 
});  
Then(/^I open a product quickview overlay -o5a_PAQL$/,() => {
   return o5a_pageObj
      .waitForElementPresent('@pa_product_css', 5000) //preselected in pageObj
      .moveToElement('@pa_product_css', 200, 200)
      .waitForElementPresent('@pa_quicklook_css', 500) //preselected in pageObj
      .click('@pa_quicklook_css')
});
When(/^I select a <color>, <size>, quantity “1” -o5a_PAQL$/, () => {
 return client
      .pause(2000)    
});
Then(/^click the ADD TO BAG button -o5a_PAQL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@pa_quicklookOverlay_class' , 10000)
    .waitForElementPresent('@pa_quicklookPrice_class' , 10000)
    .waitForElementPresent('@pa_quicklookThumbnail_css' , 10000)
    .waitForElementPresent('@pa_quicklookImg_css' , 10000)
    .waitForElementPresent('@pa_quicklookSize_class' , 5000)
    .click('@pa_quicklookSizeSelector_class')  
    .waitForElementPresent('@pa_quicklookColor_class', 15000)   
});  
Then(/^the item appears in the minicart -o5a_PAQL$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@pa_addtobag_btn', 15000)   
      .click('@pa_addtobag_btn')
      .waitForElementPresent('@minicart_header_class' , 5000)
});
Then(/^validate product info -o5a_PAQL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@minicart_itemDetails_class', 5000)
    .assert.containsText('@minicart_itemDetails_class', productDescription_item1)
}); 

/*commenting out due to new checkout google location API account suspended

/*******Signin Overlay page***************************************************************************

Given(/^I have an item in the minicart -o5a_PAQL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@minicart_checkout_class' , 20000)
});
  Then(/^I access the BAG PAGE by the CHECKOUT button in the minicart -o5a_PAQL$/, () => {
    return o5a_pageObj
      .click('@minicart_checkout_btn')
      .waitForElementVisible('@bag_title_css', 5000)
      .assert.containsText('@bag_title_css', bag_pagetitle) 
      .waitForElementVisible('@prod_lineItemDesc_class', 5000)
      .assert.containsText('@prod_lineItemDesc_class', productDescription_item1) 
});
  When(/^I click on the CHECKOUT button on the Bag page -o5a_PAQL$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@bag_checkout_class', 18000)
      .click('@bag_checkout_class')
 });
  Then(/^a sign in overlay pops up -o5a_PAQL$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@bag_login_class', 20000)
  });

/****************** checkout shipping *****************************************************  

Given(/^I am on the BAG page with a sign in overlay open -o5a_PAQL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@bag_loginGuestCheckout_btn', 20000)
    .click('@bag_loginGuestCheckout_btn')
});
Then(/^I access the CHECKOUT page via GUEST CHECKOUT -o5a_PAQL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_fristName_css',26000)
    .assert.title(checkout_pagetitle)   
});
When(/^I enter First Name, Last Name, Address Line 1, City -o5a_PAQL$/, () => {
  return o5a_pageObj
    .setValue('@checkout_fristName_css',checkout_firstName)
    .setValue('@checkout_lastName_css',checkout_lastName)
    .setValue('@checkout_address1_css',checkout_address1_QAS)
    .setValue('@checkout_city_css',checkout_city) 
});
Then(/^select a state from the State dropdown menu -o5a_PAQL$/, () => {
  return o5a_pageObj
    .click('@checkout_state_css') //state value preselected in pageOjb.js
});
Then(/^enter Zip Code, Address, Phone Number -o5a_PAQL$/, () => {
  return o5a_pageObj
    .setValue('@checkout_zipCode_css', checkout_zip)
    .setValue('@checkout_email_css', username)
    .setValue('@checkout_phone_css', checkout_phone)
});
Then(/^click on the shipping section CONTINUE button -o5a_PAQL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_addressFormCont_btn',7200)
    .click('@checkout_addressFormCont_btn')
});
Then(/^I should see a QAS overlay -o5a_PAQL$/, () => {
    return o5a_pageObj
     .waitForElementPresent('@QASoverlay' ,5000)
  });

/*****QAS overlay - suggested address selection  **************************************************************************
  Given(/^I am on the CHECKOUT page with a QAS overlay open -o5a_PAQL$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@QASAddressEntered', 5000)  
      .waitForElementVisible('@QASpotentialMatchOne', 4000) 
  });
  Then(/^with one of the suggest addresses radio button selected -o5a_PAQL$/, () => {
     return client
       .pause(3000) 
  });

  When(/^I click on USE SUGGESTED ADDRESS  button from the overlay -o5a_PAQL$/, () => {
    return o5a_pageObj
      .click('@QASpotentialMatchOne')
      .waitForElementVisible('@QASuseSuggAddressButton', 4000)
      .click('@QASuseSuggAddressButton')
  });
  
  Then(/^I should be redirected to the PAYMENT page -o5a_PAQL$/, () => {
    return o5a_pageObj
        .waitForElementVisible('@shipAddressHeading',14000)
        .waitForElementVisible('@paymentType',10000)
  }); */