
const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var productID_item1 =client.globals.saksConstants.productID_item1
var productPageTitle_item1 =client.globals.saksConstants.productPageTitle_item1
var productDescription_item1 =client.globals.saksConstants.productDescription_item1
var thankyou_header =client.globals.saksConstants.thankyou_header
var bag_pagetitle =client.globals.saksConstants.bag_pagetitle
var checkout_pagetitle =client.globals.saksConstants.checkout_pagetitle
var checkout_firstName = client.globals.saksConstants.checkout_firstName
var checkout_lastName= client.globals.saksConstants.checkout_lastName
var checkout_city = client.globals.saksConstants.checkout_city
var checkout_zip= client.globals.saksConstants.checkout_zip

var checkout_city_new = client.globals.saksConstants.checkout_city_new
var checkout_zip_new= client.globals.saksConstants.checkout_zip_new

var checkout_phone= client.globals.saksConstants.checkout_phone
var checkout_ccNumber2 =client.globals.saksConstants.checkout_ccNumber2
var checkout_ccNumber1 =client.globals.saksConstants.checkout_ccNumber1
var checkout_expDate =client.globals.saksConstants.checkout_expDate
var checkout_CVC3digits =client.globals.saksConstants.checkout_CVC3digits
var checkout_ccName =client.globals.saksConstants.checkout_ccName
var username = client.globals.saksConstants.username;
var promocode =client.globals.saksConstants.promocode
var promoCodeText =client.globals.saksConstants.promoCodeText
var shippingCharge =client.globals.saksConstants.shippingCharge
var shippingCharge2 =client.globals.saksConstants.shippingCharge2
var shippingCharge3 =client.globals.saksConstants.shippingCharge3
var bag_qtyItem1 =client.globals.saksConstants.bag_qtyItem1
var checkout_addressLine1 =client.globals.saksConstants.checkout_addressLine1
var checkout_addressLine2 =client.globals.saksConstants.checkout_addressLine2
var checkout_paymentType =client.globals.saksConstants.checkout_paymentType


/****************** search by web id *********************************************************/  

  Given(/^I am on the website -o5a_checkoutpageGuest$/, () => {
    return client
      .url(qaUrl)       
      .waitForElementVisible('#saksOverlay', 5000)
      .click('#saksOverlay')
      .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 5)')
      .assert.title(homepageTitle) 
  });
  When(/^I enter this product id -o5a_checkoutpageGuest$/, () => {      
    return o5a_pageObj
      .assert.visible('@header_searchBar_class') 
      .setValue('@header_searchBar_class', productID_item1)
      .click('@header_searchSubmit_btn') 
}); 
   Then(/^I should be taken to a PDP of this product -o5a_checkoutpageGuest$/, () => {    
    return o5a_pageObj
      .waitForElementPresent('@prod_desc_class', 10000)
      .assert.title(productPageTitle_item1)
});

/****************** add to bag on PDP *********************************************************/  

   Given(/^I am on a Product Detail Page -o5a_checkoutpageGuest$/, () => {    
    return o5a_pageObj
      .waitForElementVisible('@prod_desc_class', 9000)
      .expect.element('@prod_desc_class').text.to.equal(productDescription_item1);
});
  When(/^I select a color, size, quantity “1” -o5a_checkoutpageGuest$/, () => {    
    return o5a_pageObj
      .assert.visible('@pdp_color_class')
      .assert.visible('@pdp_size_class')
      //.click('@pdp_colorItem1_css')
      .click('@pdp_sizeItem1_css')
  });
  When(/^click the ADD TO BAG button -o5a_checkoutpageGuest$/, () => {   
    return o5a_pageObj
      .click('@pdp_addtobag_btn')  
  });
  Then(/^the item appears in the mini cart -o5a_checkoutpageGuest$/, () => {    
    return o5a_pageObj
      .waitForElementVisible('@minicart_header_class', 5000)
  });
  Then(/^validate product info -o5a_checkoutpageGuest$/, () => {   
    return o5a_pageObj
      .waitForElementVisible('@minicart_itemDetails_class', 5000)
      .assert.containsText('@minicart_itemDetails_class', productDescription_item1)
  }); 

  /****************** change quantity of the item on the bag page ********************************************************/  

  Given(/^I have an item in the mini cart -o5a_checkoutpageGuest$/, () => {
    return o5a_pageObj
     .waitForElementPresent('@minicart_checkout_class' , 20000)
});
 Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_checkoutpageGuest$/, () => {
   return o5a_pageObj
      .click('@minicart_checkout_btn')
      .waitForElementVisible('@bag_title_css', 5000)
      .assert.containsText('@bag_title_css', bag_pagetitle) 
      .waitForElementVisible('@prod_lineItemDesc_class', 5000)
      .assert.containsText('@prod_lineItemDesc_class', productDescription_item1) 
      .waitForElementVisible('@bag_itemPrice_class', 5000)
      .waitForElementVisible('@order_total_css', 5000)
});
When(/^I update the following product information on the bag page -o5a_checkoutpageGuest$/, () => {
 return client
   .clearValue('input[name=spinbox__numerical]') 
   .setValue('input[name=spinbox__numerical]', bag_qtyItem1)
   .pause(3000)   
});
Then(/^I should see the product information updated on the bag: -o5a_checkoutpageGuest$/, () => {
 return o5a_pageObj
   .waitForElementPresent('@bag_title_css' ,5000)
   .assert.containsText('@bag_title_css', bag_qtyItem1) 
});

/****************** guest checkout – input SHIPPING info *****************************************************/  

Given(/^I am on the BAG page with a sign in overlay open -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@bag_checkout_class', 18000)
    .click('@bag_checkout_class')
    .waitForElementVisible('@bag_login_class', 20000)
    .waitForElementVisible('@bag_loginGuestCheckout_btn', 20000)
    .click('@bag_loginGuestCheckout_btn')
});
Then(/^I access the CHECKOUT page via GUEST CHECKOUT -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_fristName_css',26000)
    .assert.title(checkout_pagetitle)   
});
When(/^I enter First Name, Last Name, Address Line 1, City -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .setValue('@checkout_fristName_css',checkout_firstName)
    .setValue('@checkout_lastName_css',checkout_lastName)
    .setValue('@checkout_address1_css',checkout_addressLine1)
    .setValue('@checkout_city_css',checkout_city) 
});
Then(/^select a state from the State dropdown menu -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .click('@checkout_state_css') //state value preselected in pageOjb.js
});
Then(/^enter Zip Code, Address, Phone Number -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .setValue('@checkout_zipCode_css', checkout_zip)
    .setValue('@checkout_email_css', username)
    .setValue('@checkout_phone_css', checkout_phone)
});
Then(/^click on the shipping section CONTINUE button -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_addressFormCont_btn',7200)
    .click('@checkout_addressFormCont_btn')
});
Then(/^I move on to the PAYMENT section -o5a_checkoutpageGuest$/, () => {   
  return o5a_pageObj
     .waitForElementVisible('@checkout_addPayment_class',14000)
});

/****************** guest checkout – input PAYMENT info *****************************************************/  


Given(/^I am on the PAYMENT section -o5a_checkoutpageGuest$/, () => {  
  return o5a_pageObj
    .waitForElementVisible('@checkout_ccNumber_css',24000)
});
When(/^I enter Credit Card Number, Exp date, CVC, Name -o5a_checkoutpageGuest$/, () => {    
  return o5a_pageObj
    .setValue('@checkout_ccNumber_css',checkout_ccNumber1)
    .setValue('@checkout_expDate_css',checkout_expDate)
    .setValue('@checkout_CVC_css',checkout_CVC3digits)
    .setValue('@checkout_ccName_css',checkout_ccName) 
});
Then(/^click on the payment section CONTINUE button -o5a_checkoutpageGuest$/, () => { 
  return o5a_pageObj
    .waitForElementVisible('@checkout_paymentFormCont_btn', 20000)
    .click('@checkout_paymentFormCont_btn')
});
Then(/^I move on to the SHIPPING METHOD section -o5a_checkoutpageGuest$/, () => {
  return client
    .pause(500)
});

/****************** apply promo *******************************************/ 
Given(/^I am on the CHECKOUT page that is promo eligible -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@promo_class' ,5000)
    .click('@promo_class')
    .waitForElementVisible('@promo_entry_css', 5000)
});
When(/^I apply this promo code -o5a_checkoutpageGuest$/, () => {
  return client
    .pause(4000)
    .setValue('input[name=promoCode]', promocode)
});
Then(/^I should see the discount being applied on the item level -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
      .click('@promo_apply_btn')
      .waitForElementPresent('@checkout_promoLineItem_class', 15000)
      .assert.containsText('@checkout_promoLineItem_class', promoCodeText)
});
Then(/^validate calculation change in order totals -o5a_checkoutpageGuest$/ , () =>{
  return o5a_pageObj
    .waitForElementPresent('@ordersummary_price_class', 5000)
    .waitForElementPresent('@orderSummary_shippingCharge_css', 5000)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge)
});

/****************** remove promo *******************************************/ 
Given(/^I am on the CHECKOUT page w promo applied -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@promo_class' ,5000)
    .waitForElementPresent('@promo_remove_class' ,5000)
    .click('@promo_remove_class')
});
When(/^I remove this promo code -o5a_checkoutpageGuest$/, () => {
  return client
    .pause(4000)
});
Then(/^I should see the calculation change in order totals -o5a_checkoutpageGuest$/ , () =>{
  return o5a_pageObj
    .waitForElementPresent('@ordersummary_price_class', 5000)
    .waitForElementPresent('@orderSummary_shippingCharge_css', 5000)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge2)
});

/****************** SHIPPING ADDRESS - change/add a different shipping address ********************************************************/  

Given(/^I am on the CHECKOUT page to enter a new shipping Address -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_shippingAddress_class', 20000)
});
When(/^I click on the CHANGE button to open the shipping address edit section -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_shippingChange_btn', 20000)
    .click('@checkout_shippingChange_btn')
});
Then(/^click on ADD NEW ADDRESS under shipping address edit section -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_addNewShippingAddress_class', 20000)
    .click('@checkout_addNewShippingAddress_class')
});
Then(/^complete the shipping address form -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_fristName_css',26000)
    .setValue('@checkout_fristName_css',checkout_firstName)
    .setValue('@checkout_lastName_css',checkout_lastName)
    .setValue('@checkout_address1_css',checkout_addressLine1)
    .setValue('@checkout_city_css',checkout_city_new) 
    .click('@checkout_stateNew_css') //state value preselected in pageOjb.js
    .setValue('@checkout_zipCode_css', checkout_zip_new)
    .setValue('@checkout_phone_css', checkout_phone)
    .waitForElementVisible('@checkout_addressFormCont_btn',7200)
    .click('@checkout_addressFormCont_btn')
});
Then(/^click on SAVE&CONTINUE button to save the shipping address change -o5a_checkoutpageGuest$/, () => {
  return client
    .pause(2000)
});
Then(/^the page should reflect the new shipping address -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_shippingAddress_class', 20000)
    .waitForElementVisible('@checkout_shippingAddressLine1_css', 20000)
    .assert.containsText('@checkout_shippingAddressLine1_css',checkout_addressLine1)
    .waitForElementVisible('@checkout_shippingAddressLine2_css', 20000)
    .assert.containsText('@checkout_shippingAddressLine2_css',checkout_addressLine2)
});

/****************** PAYMENT METHOD - change/add a payment method ********************************************************/  

Given(/^I am on the CHECKOUT page to change payment method -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentInfo_class' , 7000)
});
When(/^I click on the CHANGE button to open the payment method edit section -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentChange_btn', 5000)
    .click('@checkout_paymentChange_btn')
    .waitForElementPresent('@checkout_addNewCC_css', 5000)
    .click('@checkout_addNewCC_css')
});
Then(/^click on ADD NEW CREDIT CARDAD under payment -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_addNewCC_css', 5000)
    .click('@checkout_addNewCC_css')
});
Then(/^complete the payment info form -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_ccNumber_css',24000)
    .setValue('@checkout_ccNumber_css',checkout_ccNumber2)
    .setValue('@checkout_expDate_css',checkout_expDate)
    .setValue('@checkout_CVC_css',checkout_CVC3digits)
    .setValue('@checkout_ccName_css',checkout_ccName) 
    .waitForElementPresent('@checkout_addPaymentCont_btn', 5000)
    .click('@checkout_addPaymentCont_btn')
});
Then(/^click ADD PAYMENT -o5a_checkoutpageGuest$/, () => {
  return client
    .pause(5000)
});
Then(/^the page should reflect the payment method -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_paymentInfo_class', 20000)
    .assert.containsText('@checkout_paymentInfo_class',checkout_paymentType)
});

/****************** BILLING ADDRESS - change/add a new billing address ********************************************************/  

Given(/^I am on the CHECKOUT page to change billing address -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentInfo_class' , 7000)
});
When(/^I click on the CHANGE button to open the billing address edit section -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentChange_btn', 5000)
    .click('@checkout_paymentChange_btn')
    .waitForElementPresent('@checkout_addressEdit_class', 15000)
    .waitForElementPresent('@checkout_addNewBillingAddress_css', 15000)
});
Then(/^click on ADD NEW ADDRESS under billing address edit section -o5a_checkoutpageGuest$/, () => {
  return client
    .pause(500)
});
Then(/^complete the billing address form -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .click('@checkout_addNewBillingAddress_css')
    .waitForElementVisible('@checkout_fristName_css',26000)
    .setValue('@checkout_fristName_css',checkout_firstName)
    .setValue('@checkout_lastName_css',checkout_lastName)
    .setValue('@checkout_address1_css',checkout_addressLine1)
    .setValue('@checkout_city_css',checkout_city_new) 
    .click('@checkout_stateNew_css') //state value preselected in pageOjb.js
    .setValue('@checkout_zipCode_css', checkout_zip_new)
    .setValue('@checkout_phone_css', checkout_phone)
    .waitForElementVisible('@checkout_addressFormCont_btn',7200)
    .click('@checkout_addressFormCont_btn')
});
Then(/^click on SAVE&CONTINUE button to save the billing address change -o5a_checkoutpageGuest$/, () => {
  return client
    .pause(2000)
});
Then(/^the page should reflect the new billing address -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentCont_btn',7000)
    .click('@checkout_paymentCont_btn')
    .waitForElementVisible('@checkout_shippingAddress_class', 20000)
    .waitForElementVisible('@checkout_shippingAddressLine1_css', 20000)
    .assert.containsText('@checkout_shippingAddressLine1_css',checkout_addressLine1)
    .waitForElementVisible('@checkout_shippingAddressLine2_css', 20000)
    .assert.containsText('@checkout_shippingAddressLine2_css',checkout_addressLine2)
});

/****************** SHIPPING METHOD ********************************************************/  

Given(/^I am on the CHECKOUT page to update shipping method -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_shippingMethod_class' , 7000)
    .waitForElementPresent('@checkout_shippingMethodChange_btn',5000)  
    .click('@checkout_shippingMethodChange_btn')
    .waitForElementPresent('@ordersummary_price_class', 5000)
});
When(/^I select a different shipping methods from the given options -o5a_checkoutpageGuest$/, () => {
  return client
    .pause(15000)
});
Then(/^the page should reflect the new shipping method -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@orderSummary_shippingCharge_css', 10000)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge3)
});


/****************** place order and reach the THANK YOU PAGE w order confirmation number *******************************************/ 

Given(/^I am on the CHECKOUT page -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_shippingAddress_class', 20000)
    .waitForElementVisible('@checkout_paymentInfo_class', 20000)
    .waitForElementVisible('@checkout_shippingMethod_class', 20000)
    .waitForElementVisible('@ordersummary_price_class', 20000)
    .waitForElementVisible('@checkout_lineItemDesc_class', 5000)
    .assert.containsText('@checkout_lineItemDesc_class', productDescription_item1)
});
When(/^I click on the PLACE ORDER button -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_placeOrder_btn' , 9000)
    .click('@checkout_placeOrder_btn')
});
Then(/^I should be redirected to THANK YOU page -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@thankyou_header_class', 20000)
    .assert.containsText('@thankyou_header_class', thankyou_header) 
});
Then(/^there should be an Order number -o5a_checkoutpageGuest$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@thankyou_details_css', 20000)
    .assert.containsText('@thankyou_details_css', username) 
});

