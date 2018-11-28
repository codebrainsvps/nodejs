
/******** As a guest user view the Review&Submit page and able to modify product attributes *****/

const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var usernameINTL = client.globals.saksConstants.username2INTL;
var password = client.globals.saksConstants.password;
var productID_item1 =client.globals.saksConstants.productID_item1;
var productPageTitle_item1 =client.globals.saksConstants.productPageTitle_item1;
var productDescription_item1 =client.globals.saksConstants.productDescription_item1;
var bag_pagetitle =client.globals.saksConstants.bag_pagetitle;

var checkout_pagetitle =client.globals.saksConstants.checkout_pagetitle;
var checkout_address1INTL =client.globals.saksConstants.checkout_address1INTL;
var checkout_addressLine1INTL = client.globals.saksConstants.checkout_addressLine1INTL;
var checkout_addressLine2INTL = client.globals.saksConstants.checkout_addressLine2INTL;
var checkout_firstName =client.globals.saksConstants.checkout_firstName;
var checkout_lastName =client.globals.saksConstants.checkout_lastName;
var checkout_cityINTL =client.globals.saksConstants.checkout_cityINTL;
var checkout_city_newINTL =client.globals.saksConstants.checkout_city_newINTL;
var checkout_zipINTL =client.globals.saksConstants.checkout_zipINTL;
var checkout_zip_newINTL =client.globals.saksConstants.checkout_zip_newINTL;
var checkout_ccNumber1 = client.globals.saksConstants.checkout_ccNumber1;
var checkout_ccNumber2 = client.globals.saksConstants.checkout_ccNumber2;
var checkout_expDate = client.globals.saksConstants.checkout_expDate;
var checkout_CVC3digits = client.globals.saksConstants.checkout_CVC3digits;
var checkout_ccName = client.globals.saksConstants.checkout_ccName;
var checkout_paymentTypeINTL =client.globals.saksConstants.checkout_paymentTypeINTL;
var checkout_phone =client.globals.saksConstants.checkout_phone;
var taxCharge =client.globals.saksConstants.taxCharge
var thankyou_header =client.globals.saksConstants.thankyou_header
var Intl_shipping = client.globals.saksConstants.Intl_shipping;
var Intl_country = client.globals.saksConstants.Intl_country;
var Intl_currency = client.globals.saksConstants.Intl_currency;




/*******Home Page ***************************************************************************/
Given(/^I am on the website -o5a_checkoutpageGuestINTL$/, () => {
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
Then(/^I open the context chooser by clicking on the country flag in the top nav -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@intl_shippingpage_class' , 5000)
    .waitForElementPresent('@intl_shippingTitle_css' , 5000)
    .assert.containsText('@intl_shippingTitle_css', Intl_shipping)
    .waitForElementPresent('@intl_contextChooser_css' , 5000)
    .waitForElementPresent('@intl_countryDropdownMenu_css' , 5000)
    .click('@intl_countryDropdownTestItem_css') //change country selection in pageObj.js file
});
When(/^I select this <country> from the country dropdown menu -o5a_checkoutpageGuestINTL$/, () => {
  return client
    .pause(1000)
});
Then(/^click on SAVE & CONTINUE SHOPPING -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .click('@intl_contextChooser_btn')
});
Then(/^I should see a popupoverlay displaying shipping country change -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@intl_welcomemat_css', 5000)
    .waitForElementVisible('@intl_welcomematSubheadline_css', 5000)
    .assert.containsText('@intl_welcomematSubheadline_css', Intl_country)
    .click('@intl_welcomemat_btn')
}); 

/*******search Page ***************************************************************************/

Given(/^I am on the homepage -o5a_checkoutpageGuestINTL$/, () => {
 return client   
    .pause(3000)
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 5)')
    .assert.title(homepageTitle) 
});
When(/^I enter this product id -o5a_checkoutpageGuestINTL$/, () => {      
 return o5a_pageObj
    .assert.visible('@header_searchBar_class') 
    .setValue('@header_searchBar_class', productID_item1)
    .click('@header_searchSubmit_btn') 
}); 
Then(/^I should be taken to a PDP of this product -o5a_checkoutpageGuestINTL$/, () => {    
    return o5a_pageObj
      .waitForElementPresent('@prod_desc_class', 10000)
      .assert.title(productPageTitle_item1)
});

/*******Product Detail Page ***************************************************************************/
Given(/^I am on a Product Detail Page -o5a_checkoutpageGuestINTL$/, () => {    
  return o5a_pageObj
    .waitForElementVisible('@prod_desc_class', 9000)
    .assert.containsText('@prod_desc_class', productDescription_item1)
    .waitForElementVisible('@pdp_price_class', 9000)
    .waitForElementVisible('@pdp_priceCurrency_css', 9000)
    .assert.containsText('@pdp_priceCurrency_css', Intl_currency)
});
When(/^I select a color, size, quantity “1” -o5a_checkoutpageGuestINTL$/, () => {    
  return o5a_pageObj
    .assert.visible('@pdp_color_class')
    .assert.visible('@pdp_size_class')
    //.click('@pdp_colorItem1_css')
    .click('@pdp_sizeItem1_css')
});
When(/^click the ADD TO BAG button -o5a_checkoutpageGuestINTL$/, () => {   
  return o5a_pageObj
    .click('@pdp_addtobag_btn')  
});
Then(/^the item appears in the mini cart -o5a_checkoutpageGuestINTL$/, () => {    
  return o5a_pageObj
    .waitForElementVisible('@minicart_header_class', 5000)
});
Then(/^validate product info -o5a_checkoutpageGuestINTL$/, () => {   
  return o5a_pageObj
    .waitForElementVisible('@minicart_itemDetails_class', 5000)
    .assert.containsText('@minicart_itemDetails_class', productDescription_item1)
    .waitForElementVisible('@minicart_price_class', 5000)
    .assert.containsText('@minicart_price_class', Intl_currency)
});
/*******Shopping Bag page ***************************************************************************/

Given(/^I have an item in the mini cart -o5a_checkoutpageGuestINTL$/, () => {    
  return o5a_pageObj
    .waitForElementPresent('@minicart_checkout_class' , 5000)
    .click('@minicart_checkout_btn')
});
Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_checkoutpageGuestINTL$/, () => {    
  return o5a_pageObj
    .waitForElementVisible('@bag_title_css', 5000)
    .assert.containsText('@bag_title_css', bag_pagetitle) 
    .waitForElementVisible('@prod_lineItemDesc_class', 5000)
    .assert.containsText('@prod_lineItemDesc_class', productDescription_item1)  
    .waitForElementVisible('@bag_itemPrice_class', 5000)
    .waitForElementVisible('@order_total_css', 5000)  
    .assert.containsText('@order_total_css', Intl_currency)     
});
When(/^I click on the CHECKOUT button on the Bag page -o5a_checkoutpageGuestINTL$/, () => {    
  return o5a_pageObj
   .waitForElementVisible('@bag_checkout_class', 18000)
   .click('@bag_checkout_class')
});
  Then(/^a sign in overlay pops up -o5a_checkoutpageGuestINTL$/, () => {   
    return o5a_pageObj
    .waitForElementVisible('@bag_login_class', 20000)
 });


/****************** guest checkout – input SHIPPING info *****************************************************/  

Given(/^I am on the BAG page with a sign in overlay open -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@bag_checkout_class', 18000)
    .click('@bag_checkout_class')
    .waitForElementVisible('@bag_login_class', 20000)
    .waitForElementVisible('@bag_loginGuestCheckout_btn', 20000)
    .click('@bag_loginGuestCheckout_btn')
});
Then(/^I access the CHECKOUT page via GUEST CHECKOUT -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_fristName_css',26000)
    .assert.title(checkout_pagetitle)   
});
When(/^I enter First Name, Last Name, Address Line 1, City -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .setValue('@checkout_fristName_css',checkout_firstName)
    .setValue('@checkout_lastName_css',checkout_lastName)
    .setValue('@checkout_address1_css',checkout_address1INTL)
    .setValue('@checkout_city_css',checkout_cityINTL) 
});
Then(/^select a state from the State dropdown menu -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .click('@checkout_stateINTL_css') //state value preselected in pageOjb.js
});
Then(/^enter Zip Code, Address, Phone Number -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .setValue('@checkout_zipCode_css', checkout_zipINTL)
    .setValue('@checkout_email_css', usernameINTL)
    .setValue('@checkout_phone_css', checkout_phone)
});
Then(/^click on the shipping section CONTINUE button -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_addressFormCont_btn',7200)
    .click('@checkout_addressFormCont_btn')
});
Then(/^I move on to the PAYMENT section -o5a_checkoutpageGuestINTL$/, () => {   
  return o5a_pageObj
     .waitForElementVisible('@checkout_addPayment_class',14000)
});

/****************** guest checkout – input PAYMENT info *****************************************************/  


Given(/^I am on the PAYMENT section -o5a_checkoutpageGuestINTL$/, () => {  
  return o5a_pageObj
    .waitForElementVisible('@checkout_ccNumber_css',24000)
});
When(/^I enter Credit Card Number, Exp date, CVC, Name -o5a_checkoutpageGuestINTL$/, () => {    
  return o5a_pageObj
    .setValue('@checkout_ccNumber_css',checkout_ccNumber1)
    .setValue('@checkout_expDate_css',checkout_expDate)
    .setValue('@checkout_CVC_css',checkout_CVC3digits)
    .setValue('@checkout_ccName_css',checkout_ccName) 
});
Then(/^click on the payment section CONTINUE button -o5a_checkoutpageGuestINTL$/, () => { 
  return o5a_pageObj
    .waitForElementVisible('@checkout_paymentFormCont_btn', 20000)
    .click('@checkout_paymentFormCont_btn')
});
Then(/^I move on to the SHIPPING METHOD section -o5a_checkoutpageGuestINTL$/, () => {
  return client
    .pause(500)
});

/****************** SHIPPING METHOD ********************************************************/  

Given(/^I am on the CHECKOUT page to update shipping method -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_shippingMethod_class' , 7000)
    .waitForElementPresent('@checkout_shippingMethodChange_btn',5000)  
    .click('@checkout_shippingMethodChange_btn')
    .waitForElementPresent('@ordersummary_price_class', 5000)
});
When(/^I select a different shipping methods from the given options -o5a_checkoutpageGuestINTL$/, () => {
  return client
    .pause(5000)
});
Then(/^the page should reflect the new shipping method -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@orderSummary_taxCharge_css', 10000)
    .assert.containsText('@orderSummary_taxCharge_css', taxCharge)
});

/****************** SHIPPING ADDRESS - change/add a different shipping address ********************************************************/  

Given(/^I am on the CHECKOUT page to enter a new shipping Address -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_shippingAddress_class', 20000)
    .waitForElementVisible('@checkout_shippingAddressLine1_css', 20000)
});
When(/^I click on the CHANGE button to open the shipping address edit section -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_shippingChange_btn', 20000)
    .click('@checkout_shippingChange_btn')
});
Then(/^click on ADD NEW ADDRESS under shipping address edit section -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_addNewShippingAddress_class', 20000)
    .click('@checkout_addNewShippingAddress_class')
});
Then(/^complete the shipping address form -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_fristName_css',26000)
    .setValue('@checkout_fristName_css',checkout_firstName)
    .setValue('@checkout_lastName_css',checkout_lastName)
    .setValue('@checkout_address1_css',checkout_addressLine1INTL)
    .setValue('@checkout_city_css',checkout_city_newINTL) 
    .click('@checkout_stateINTL_css') //state value preselected in pageOjb.js
    .setValue('@checkout_zipCode_css', checkout_zip_newINTL)
    .setValue('@checkout_phone_css', checkout_phone)
    .waitForElementVisible('@checkout_addressFormCont_btn',7200)
    .click('@checkout_addressFormCont_btn')
});
Then(/^click on SAVE&CONTINUE button to save the shipping address change -o5a_checkoutpageGuestINTL$/, () => {
  return client
    .pause(2000)
});
Then(/^the page should reflect the new shipping address -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_shippingAddress_class', 20000)
    .waitForElementVisible('@checkout_shippingAddressLine1_css', 20000)
    .assert.containsText('@checkout_shippingAddressLine1_css',checkout_addressLine1INTL)
    .waitForElementVisible('@checkout_shippingAddressLine2_css', 20000)
    .assert.containsText('@checkout_shippingAddressLine2_css',checkout_addressLine2INTL)
});

/****************** PAYMENT METHOD - change/add a payment method ********************************************************/  

Given(/^I am on the CHECKOUT page to change payment method -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentInfo_class' , 7000)
});
When(/^I click on the CHANGE button to open the payment method edit section -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentChange_btn', 5000)
    .click('@checkout_paymentChange_btn')
    .waitForElementPresent('@checkout_addNewCC_css', 5000)
    .click('@checkout_addNewCC_css')
});
Then(/^click on ADD NEW CREDIT CARDAD under payment -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_addNewCC_css', 5000)
    .click('@checkout_addNewCC_css')
});
Then(/^complete the payment info form -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_ccNumber_css',24000)
    .setValue('@checkout_ccNumber_css',checkout_ccNumber2)
    .setValue('@checkout_expDate_css',checkout_expDate)
    .setValue('@checkout_CVC_css',checkout_CVC3digits)
    .setValue('@checkout_ccName_css',checkout_ccName) 
    .waitForElementPresent('@checkout_addPaymentCont_btn', 5000)
    .click('@checkout_addPaymentCont_btn')
});
Then(/^click ADD PAYMENT -o5a_checkoutpageGuestINTL$/, () => {
  return client
    .pause(5000)
});
Then(/^the page should reflect the payment method -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_paymentInfo_class', 20000)
    .assert.containsText('@checkout_paymentInfo_class',checkout_paymentTypeINTL)
});

/****************** BILLING ADDRESS - change/add a new billing address ********************************************************/  

Given(/^I am on the CHECKOUT page to change billing address -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentInfo_class' , 7000)
});
When(/^I click on the CHANGE button to open the billing address edit section -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentChange_btn', 5000)
    .click('@checkout_paymentChange_btn')
    .waitForElementPresent('@checkout_addressEdit_class', 15000)
    .waitForElementPresent('@checkout_addNewBillingAddress_css', 15000)
});
Then(/^click on ADD NEW ADDRESS under billing address edit section -o5a_checkoutpageGuestINTL$/, () => {
  return client
    .pause(500)
});
Then(/^complete the billing address form -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .click('@checkout_addNewBillingAddress_css')
    .waitForElementVisible('@checkout_fristName_css',26000)
    .setValue('@checkout_fristName_css',checkout_firstName)
    .setValue('@checkout_lastName_css',checkout_lastName)
    .setValue('@checkout_address1_css',checkout_addressLine1INTL)
    .setValue('@checkout_city_css',checkout_city_newINTL) 
    .click('@checkout_stateINTL_css') //state value preselected in pageOjb.js
    .setValue('@checkout_zipCode_css', checkout_zip_newINTL)
    .setValue('@checkout_phone_css', checkout_phone)
    .waitForElementVisible('@checkout_addressFormCont_btn',7200)
    .click('@checkout_addressFormCont_btn')
});
Then(/^click on SAVE&CONTINUE button to save the billing address change -o5a_checkoutpageGuestINTL$/, () => {
  return client
    .pause(2000)
});
Then(/^the page should reflect the new billing address -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentCont_btn',7000)
    .click('@checkout_paymentCont_btn')
    .waitForElementVisible('@checkout_shippingAddress_class', 20000)
    .waitForElementVisible('@checkout_shippingAddressLine1_css', 20000)
    .assert.containsText('@checkout_shippingAddressLine1_css',checkout_addressLine1INTL)
    .waitForElementVisible('@checkout_shippingAddressLine2_css', 20000)
    .assert.containsText('@checkout_shippingAddressLine2_css',checkout_addressLine2INTL)
});

/****************** place order and reach the THANK YOU PAGE w order confirmation number *******************************************/ 

Given(/^I am on the CHECKOUT page -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_shippingAddress_class', 20000)
    .waitForElementVisible('@checkout_paymentInfo_class', 20000)
    .waitForElementVisible('@checkout_shippingMethod_class', 20000)
    .waitForElementVisible('@ordersummary_price_class', 20000)
    .waitForElementVisible('@order_total_css', 5000)   
    .assert.containsText('@order_total_css', Intl_currency) 
    .waitForElementVisible('@checkout_lineItemDesc_class', 5000)
    .assert.containsText('@checkout_lineItemDesc_class', productDescription_item1)
});
When(/^I click on the PLACE ORDER button -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_placeOrder_btn' , 9000)
    .click('@checkout_placeOrder_btn')
});
Then(/^I should be redirected to THANK YOU page -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@thankyou_header_class', 20000)
    .assert.containsText('@thankyou_header_class', thankyou_header) 
});
Then(/^there should be an Order number -o5a_checkoutpageGuestINTL$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@thankyou_details_css', 20000)
    .assert.containsText('@thankyou_details_css', usernameINTL) 
});

