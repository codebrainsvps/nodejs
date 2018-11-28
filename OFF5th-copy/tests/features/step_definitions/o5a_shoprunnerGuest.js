
const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var username = client.globals.saksConstants.username;
var productID_item1 =client.globals.saksConstants.productID_item1
var productPageTitle_item1 =client.globals.saksConstants.productPageTitle_item1
var productDescription_item1 =client.globals.saksConstants.productDescription_item1
var thankyou_header =client.globals.saksConstants.thankyou_header
var bag_pagetitle =client.globals.saksConstants.bag_pagetitle
var checkout_pagetitle =client.globals.saksConstants.checkout_pagetitle
var checkout_firstName = client.globals.saksConstants.checkout_firstName
var checkout_lastName= client.globals.saksConstants.checkout_lastName
var checkout_address1= client.globals.saksConstants.checkout_address1
var checkout_city = client.globals.saksConstants.checkout_city
var checkout_zip= client.globals.saksConstants.checkout_zip
var checkout_phone= client.globals.saksConstants.checkout_phone
var checkout_ccNumber1 =client.globals.saksConstants.checkout_ccNumber1
var checkout_expDate =client.globals.saksConstants.checkout_expDate
var checkout_CVC3digits =client.globals.saksConstants.checkout_CVC3digits
var checkout_ccName =client.globals.saksConstants.checkout_ccName
var username_shoprunner =client.globals.saksConstants.username_shoprunner
var password_shoprunner =client.globals.saksConstants.password_shoprunner
var bag_shoprunnerWelcome =client.globals.saksConstants.bag_shoprunnerWelcome
var shippingCharge =client.globals.saksConstants.shippingCharge
var bag_qtyItem1 =client.globals.saksConstants.bag_qtyItem1


/*****************  search by web id ************************************************** */

Given(/^I am on the website -o5a_shoprunnerGuest$/, () => {
  return client
    .url(qaUrl)       
    .waitForElementVisible('#saksOverlay', 5000)
    .click('#saksOverlay')
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 5)')
    .assert.title(homepageTitle) 
});
  When(/^I enter this product id -o5a_shoprunnerGuest$/, () => {
    return o5a_pageObj
      .assert.visible('@header_searchBar_class') 
      .setValue('@header_searchBar_class', productID_item1)
      .click('@header_searchSubmit_btn') 
}); 
   Then(/^I should be taken to a PDP of this product -o5a_shoprunnerGuest$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@prod_desc_class', 10000)
      .assert.title(productPageTitle_item1)
});

/****************** add to bag on PDP *********************************************************/  

Given(/^I am on a Product Detail Page -o5a_shoprunnerGuest$/, () => {
    return o5a_pageObj
    .waitForElementVisible('@prod_desc_class', 9000)
    .expect.element('@prod_desc_class').text.to.equal(productDescription_item1);
});
  When(/^I select a color, size, quantity “1” -o5a_shoprunnerGuest$/, () => {
    return o5a_pageObj
      .assert.visible('@pdp_color_class')
      .assert.visible('@pdp_size_class')
      //.click('@pdp_colorItem1_css')
      .click('@pdp_sizeItem1_css')
  });
  When(/^click the ADD TO BAG button -o5a_shoprunnerGuest$/, () => {
    return o5a_pageObj
      .click('@pdp_addtobag_btn')  
  });
  Then(/^the item appears in the mini cart -o5a_shoprunnerGuest$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@minicart_header_class', 5000)
  });
  Then(/^validate product info -o5a_shoprunnerGuest$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@minicart_itemDetails_class', 5000)
      .assert.containsText('@minicart_itemDetails_class', productDescription_item1)
  }); 

/****************** change quantity ********************************************************/  

Given(/^I have an item in the minicart -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@minicart_checkout_class' , 20000)
});
Then(/^I access the BAG PAGE by the CHECKOUT button in the minicart -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .click('@minicart_checkout_btn')
    .waitForElementVisible('@bag_title_css', 5000)
    .assert.containsText('@bag_title_css', bag_pagetitle) 
    .waitForElementVisible('@prod_lineItemDesc_class', 5000)
    .assert.containsText('@prod_lineItemDesc_class', productDescription_item1) 
});
When(/^I update the following product information on the bag page -o5a_shoprunnerGuest$/, () => {
return client
  .clearValue('input[name=spinbox__numerical]') 
  .setValue('input[name=spinbox__numerical]', bag_qtyItem1)
  .pause(3000)   
});
Then(/^I should see the product information updated on the bag: -o5a_shoprunnerGuest$/, () => {
return o5a_pageObj
  .waitForElementPresent('@bag_title_css' ,5000)
  .assert.containsText('@bag_title_css', bag_qtyItem1) 
});  

/****************** sign into shoprunner account ********************************************************/  
Given(/^I click on the Shoprunner SIGN IN button -o5a_shoprunnerGuest/, () => {
  return o5a_pageObj
    .waitForElementVisible('@bag_shoprunner_class', 15000)
    .waitForElementVisible('@bag_shoprunnerSignin_css', 15000)
    .click('@bag_shoprunnerSignin_css')
    .waitForElementVisible('@bag_shoprunnerOverlay_css',16000)   
    .waitForElementVisible('@bag_shoprunnerLoginForm_css',6000) 
    .waitForElementVisible('@bag_shoprunnerEmail_css',6000)  
});
Then(/^shoprunner sign in overlay pops up -o5a_shoprunnerGuest$/, () => {
  return client
    .pause(1000) 
});
When(/^I enter a valid shoprunner account email address and password -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj 
    .setValue('@bag_shoprunnerEmail_css',username_shoprunner) 
    .waitForElementVisible('@bag_shoprunnerPassword_css',600)   
    .setValue('@bag_shoprunnerPassword_css',password_shoprunner) 
    .waitForElementVisible('@bag_shoprunnerSecureSignin_btn', 10000)
    .click('@bag_shoprunnerSecureSignin_btn')
    .waitForElementVisible('@bag_shoprunnerWelcomeOverlay_css', 10000)
    .waitForElementVisible('@bag_shoprunnerWelcomeTitle_css', 10000)
    .assert.containsText('@bag_shoprunnerWelcomeTitle_css', bag_shoprunnerWelcome)
});
Then(/^I click on the SECURE SIGN IN button on shoprunner sign in overlay -o5a_shoprunnerGuest$$/, () => {
  return client
    .pause(500)
});
Then(/^I should see a shoprunner WELCOME BACK message -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@bag_shoprunnerOverlayX_btn', 5000)
    .moveToElement('@bag_shoprunnerOverlayX_btn', 100,100)
    .click('@bag_shoprunnerOverlayX_btn') 
});
Then(/^click CONTINUE SHOPPING to close the shoprunner overlay -o5a_shoprunnerGuest$/, () => {
  return client
    .pause(1000)
});
Then(/^validate FREE SHIPPING under order summary -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@ordersummary_price_class', 5000)
    .waitForElementPresent('@orderSummary_shippingCharge_css', 5000)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge)
});  


/****************** checkout shipping *****************************************************/  

Given(/^I am on the BAG page with a sign in overlay open -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@bag_checkout_class', 18000)
    .click('@bag_checkout_class')
});
Then(/^I access the CHECKOUT page via GUEST CHECKOUT -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@bag_login_class', 20000)
    .waitForElementVisible('@bag_loginGuestCheckout_btn', 20000)
    .click('@bag_loginGuestCheckout_btn')
});
When(/^I enter First Name, Last Name, Address Line 1, City -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_fristName_css',26000)
    .setValue('@checkout_fristName_css',checkout_firstName)
    .setValue('@checkout_lastName_css',checkout_lastName)
    .setValue('@checkout_address1_css',checkout_address1)
    .setValue('@checkout_city_css',checkout_city) 
});
Then(/^select a state from the State dropdown menu -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .click('@checkout_state_css') //state value preselected in pageOjb.js
});
Then(/^enter Zip Code, Address, Phone Number -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .setValue('@checkout_zipCode_css', checkout_zip)
    .setValue('@checkout_email_css', username)
    .setValue('@checkout_phone_css', checkout_phone)
});
Then(/^click on the shipping section CONTINUE button -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_addressFormCont_btn',7200)
    .click('@checkout_addressFormCont_btn')
});
Then(/^I move on to the PAYMENT section -o5a_shoprunnerGuest$/, () => {   
  return o5a_pageObj
     .waitForElementVisible('@checkout_addPayment_class',14000)
});
/****************** checkout payment *****************************************************/  

Given(/^I am on the PAYMENT section -o5a_shoprunnerGuest$/, () => {  
  return o5a_pageObj
      .waitForElementVisible('@checkout_ccNumber_css',24000)
});
When(/^I enter Credit Card Number, Exp date, CVC, Name -o5a_shoprunnerGuest$/, () => {    
  return o5a_pageObj
    .setValue('@checkout_ccNumber_css',checkout_ccNumber1)
    .setValue('@checkout_expDate_css',checkout_expDate)
    .setValue('@checkout_CVC_css',checkout_CVC3digits)
    .setValue('@checkout_ccName_css',checkout_ccName) 
});
Then(/^click on the payment section CONTINUE button -o5a_shoprunnerGuest$/, () => { 
  return o5a_pageObj
    .waitForElementVisible('@checkout_paymentFormCont_btn', 20000)
    .click('@checkout_paymentFormCont_btn')
});
Then(/^I move on to the SHIPPING METHOD section -o5a_shoprunnerGuest$/, () => {
  return client
    .pause(500)
});

/****************** place order and reach the THANK YOU PAGE w order confirmation number *******************************************/ 

Given(/^I am on the CHECKOUT page -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_shippingAddress_class', 20000)
    .waitForElementVisible('@checkout_paymentInfo_class', 20000)
    .waitForElementVisible('@checkout_shippingMethod_class', 20000)
    .waitForElementVisible('@ordersummary_price_class', 20000)
    .waitForElementVisible('@checkout_lineItemDesc_class', 5000)
    .assert.containsText('@checkout_lineItemDesc_class', productDescription_item1)
});
Then(/^FREE SHIPPING appears under both order summary and shipping method -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_shippingMethod_class' , 7000)
    .waitForElementPresent('@checkout_shippingMethodShoprunner_css' , 7000)
    .assert.containsText('@checkout_shippingMethodShoprunner_css', shippingCharge)
  
    .waitForElementPresent('@ordersummary_price_class', 5000)
    .waitForElementPresent('@orderSummary_shippingCharge_css', 5000)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge)
});
When(/^I click on the PLACE ORDER button -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_placeOrder_btn' , 9000)
    .click('@checkout_placeOrder_btn')
});
Then(/^I should be redirected to THANK YOU page -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@thankyou_header_class', 20000)
    .assert.containsText('@thankyou_header_class', thankyou_header) 
});
Then(/^there should be an Order number -o5a_shoprunnerGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@thankyou_details_css', 20000)
    .assert.containsText('@thankyou_details_css', username) 
});


  
  



