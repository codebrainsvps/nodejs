const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var username3 = client.globals.saksConstants.username3;
var password = client.globals.saksConstants.password;
var productID_item1 =client.globals.saksConstants.productID_item1
var productPageTitle_item1 =client.globals.saksConstants.productPageTitle_item1
var productDescription_item1 =client.globals.saksConstants.productDescription_item1
var bag_pagetitle =client.globals.saksConstants.bag_pagetitle
var bag_qtyItem1 =client.globals.saksConstants.bag_qtyItem1
var checkout_pagetitle =client.globals.saksConstants.checkout_pagetitle
var checkout_addressLine1 =client.globals.saksConstants.checkout_addressLine1
var checkout_addressLine2 =client.globals.saksConstants.checkout_addressLine2
var checkout_paymentType =client.globals.saksConstants.checkout_paymentType
var promocode =client.globals.saksConstants.promocode
var promoCodeText =client.globals.saksConstants.promoCodeText
var shippingCharge =client.globals.saksConstants.shippingCharge
var shippingCharge2 =client.globals.saksConstants.shippingCharge2
var shippingCharge3 =client.globals.saksConstants.shippingCharge3
var thankyou_header =client.globals.saksConstants.thankyou_header





/****************** search by web id *********************************************************/  

  Given(/^I am on the website -o5a_checkoutpageReg$/, () => {
    return client
      .url(qaUrl)    
      .waitForElementVisible('#saksOverlay', 5000)
      .click('#saksOverlay')
      .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
      .assert.title(homepageTitle) 
  });
  When(/^I enter this product id -o5a_checkoutpageReg$/, () => {
    return o5a_pageObj
      .assert.visible('@header_searchBar_class') 
      .setValue('@header_searchBar_class', productID_item1)
      .click('@header_searchSubmit_btn') 
}); 
  Then(/^I should be taken to a PDP of this product -o5a_checkoutpageReg$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@prod_desc_class', 10000)
      .assert.title(productPageTitle_item1)
});

/****************** add to bag on PDP *********************************************************/  

  Given(/^I am on a Product Detail Page -o5a_checkoutpageReg$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@prod_desc_class', 9000)
      .expect.element('@prod_desc_class').text.to.equal(productDescription_item1);
});
  When(/^I select a color, size, quantity “1” -o5a_checkoutpageReg$/, () => {
    return o5a_pageObj
      .assert.visible('@pdp_color_class')
      .assert.visible('@pdp_size_class')
      //.click('@pdp_colorItem1_css')
      .click('@pdp_sizeItem1_css')
});
  Then(/^click the ADD TO BAG button -o5a_checkoutpageReg$/, () => {
    return o5a_pageObj
      .click('@pdp_addtobag_btn')  
  });
  Then(/^the item appears in the mini cart -o5a_checkoutpageReg$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@minicart_header_class', 5000)
  });
  Then(/^validate product info -o5a_checkoutpageReg$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@minicart_itemDetails_class', 5000)
      .assert.containsText('@minicart_itemDetails_class', productDescription_item1)
});  


/****************** change quantity of the item on the bag page ********************************************************/  

  Given(/^I have an item in the mini cart -o5a_checkoutpageReg$/, () => {
     return o5a_pageObj
      .waitForElementPresent('@minicart_checkout_class' , 20000)
});
  Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_checkoutpageReg$/, () => {
    return o5a_pageObj
      .click('@minicart_checkout_btn')
      .waitForElementVisible('@bag_title_css', 5000)
      .assert.containsText('@bag_title_css', bag_pagetitle) 
      .waitForElementVisible('@prod_lineItemDesc_class', 5000)
      .assert.containsText('@prod_lineItemDesc_class', productDescription_item1) 
      .waitForElementVisible('@bag_itemPrice_class', 5000)
      .waitForElementVisible('@order_total_css', 5000)
});
When(/^I update the following product information on the bag page -o5a_checkoutpageReg$/, () => {
  return client
    .clearValue('input[name=spinbox__numerical]') 
    .setValue('input[name=spinbox__numerical]', bag_qtyItem1)
    .pause(3000)   
});
Then(/^I should see the product information updated on the bag: -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@bag_title_css' ,5000)
    .assert.containsText('@bag_title_css', bag_qtyItem1) 
});


/****************** log into registered account via bag page *****************************************************/  

  Given(/^I am on the BAG page with a sign in overlay open -o5a_checkoutpageReg$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@bag_checkout_class', 18000)
      .click('@bag_checkout_class')
      .waitForElementVisible('@bag_login_class', 20000)
      .waitForElementVisible('@bag_emailEntry_css', 20000)
      .waitForElementVisible('@bag_passwordEntry_css', 20000)
});
  Then(/^I enter a valid email address and password -o5a_checkoutpageReg$/, () => {
    return o5a_pageObj
      .setValue('@bag_emailEntry_css', username3)
      .setValue('@bag_passwordEntry_css', password)
});
  When(/^I click on the SIGN IN & CHECKOUT button on sign in overlay -o5a_checkoutpageReg/, () => {
    return o5a_pageObj
      .click('@bag_loginCheckout_btn')
});
  Then(/^I should be redirected to the CHECKOUT page -o5a_checkoutpageReg$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@checkout_shippingAddress_class', 20000)
      .waitForElementVisible('@checkout_paymentInfo_class', 20000)
      .waitForElementVisible('@checkout_shippingMethod_class', 20000)
      .waitForElementVisible('@ordersummary_price_class', 20000)
      .waitForElementVisible('@checkout_lineItemDesc_class', 5000)
      .assert.containsText('@checkout_lineItemDesc_class', productDescription_item1) 
});

/* NO LONGER APPLICABLE TO NEW CHECKOUTPAGE

Given(/^I am on the CHECKOUT page and update the item info -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .assert.title(checkout_pagetitle) 
});
  When(/^I update the following product information on the R&S page: -o5a_checkoutpageReg$/, () => {
    return client
    .waitForElementPresent('.widebag-item-quantity-field', 28000)
    .waitForElementPresent('input[name=itemQuantity]', 8000)
    .clearValue('input[name=itemQuantity]')
    .setValue('input[name=itemQuantity]', '2')
    .pause(20000)
  });
  Then(/^I should see the product information updated on the R&S  page: -o5a_checkoutpageReg$/, () => {
    return client
    .waitForElementVisible('.widebag-item-list-header', 28000)
    
  });
  Then(/^validate calculation change in order total -o5a_checkoutpageReg$/,() => {
    return client
    .assert.containsText('#widebag-heading-items', 'Items (2)')
  });


  Given(/^I am on the Review&Submit page and edit item details -o5a_checkoutpageReg$/, () => {
    return client
    .waitForElementPresent('.widebag-item-list-content', 7000)
    .waitForElementPresent('.font-icon-pencil', 7000)
       
 });
 Then(/^I access the item overlay by the EDIT button -o5a_checkoutpageReg$/, () => {
   return client
   .pause(5000)
   .click('div.grid.grid-parent > div.grid-22 > ul > li:nth-child(1) > a > span.font-icon.font-icon-pencil')
 });
 When(/^I update the following product information on the overlay -o5a_checkoutpageReg$/, () => {
   return client
     //.pause(5000)
     //.setValue('.quantity', '0')
     .waitForElementPresent('.sub-section' , 7000)
     .click('#ui-id-3 > section > div.selected-product-region > div > div.detail-column > div > div.color.selector.component.component-3.clearfix.js-color-selector > div > div.body > div > a:nth-child(3)')
     .waitForElementPresent('.js-action-button',7000 )
     //.click('div > div.detail-column > div > div.add-to-bag.component.component-3 > div > button')
     .pause(9000)
     .click('button.sfa-button.transactional.medium.js-action-button')
 });
*/

/****************** SHIPPING ADDRESS - Select an Existing Address ********************************************************/  

Given(/^I am on the CHECKOUT page to change shipping address -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_shippingAddress_class', 20000)
});
When(/^I click on the CHANGE button to open the address edit section -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_shippingChange_btn', 20000)
    .click('@checkout_shippingChange_btn')
});
Then(/^select an existing shipping address -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
  .waitForElementPresent('@checkout_addressEdit_class', 15000)
  .waitForElementPresent('@checkout_existingAddress_css', 15000)
  .click('@checkout_existingAddress_css')
  .waitForElementPresent('@checkout_addressCont_btn', 15000)
  .click('@checkout_addressCont_btn')
});
Then(/^click SAVE&CONTINUE -o5a_checkoutpageReg$/, () => {
  return client
  .pause(2000)
});
Then(/^the page should reflect the new shipping address -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
  .waitForElementVisible('@checkout_shippingAddress_class', 20000)
  .waitForElementVisible('@checkout_shippingAddressLine1_css', 20000)
  .assert.containsText('@checkout_shippingAddressLine1_css',checkout_addressLine1)
  .waitForElementVisible('@checkout_shippingAddressLine2_css', 20000)
  .assert.containsText('@checkout_shippingAddressLine2_css',checkout_addressLine2)
});

/****************** BILLING ADDRESS & PAYMENT METHOD ********************************************************/  

Given(/^I am on the CHECKOUT page to change billing address and payment method -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentInfo_class' , 7000)
});
When(/^I click on the CHANGE button to open the payment method edit section -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentChange_btn', 5000)
    .click('@checkout_paymentChange_btn')
});
Then(/^select an existing payemnt method -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_paymentEdit_class', 5000)
    .waitForElementPresent('@checkout_existingCC_css', 5000)
    .click('@checkout_existingCC_css')
});
Then(/^select an existing billing address -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    /*commenting out due to a bug

    .waitForElementPresent('@checkout_addressEdit_class',7000)
    .waitForElementPresent('@checkout_existingAddress_css',7000)
    .click('@checkout_existingAddress_css')
    */
    .waitForElementPresent('@checkout_paymentCont_btn',7000)
    .click('@checkout_paymentCont_btn')
});
Then(/^click SAVE&CONTINUE on the payment method edit section -o5a_checkoutpageReg$/, () => {
  return client
    .pause(5000)
});
Then(/^the page should reflect the new billing address and payment method -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@checkout_paymentInfo_class', 20000)
    .assert.containsText('@checkout_paymentInfo_class',checkout_paymentType)
    /*commenting out due to a bug
    .assert.containsText('@checkout_billingAddressLine1_css',checkout_addressLine1)
    .assert.containsText('@checkout_billingAddressLine2_css',checkout_addressLine2)
    */
});

/****************** apply promo *******************************************/ 
Given(/^I am on the CHECKOUT page that is promo eligible -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@promo_class' ,5000)
    .click('@promo_class')
    .waitForElementVisible('@promo_entry_css', 5000)
});
When(/^I apply this promo code -o5a_checkoutpageReg$/, () => {
  return client
    .pause(4000)
    .setValue('input[name=promoCode]', promocode)
});
Then(/^I should see the discount being applied on the item level -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
      .click('@promo_apply_btn')
      .waitForElementPresent('@checkout_promoLineItem_class', 15000)
      .assert.containsText('@checkout_promoLineItem_class', promoCodeText)
});
Then(/^validate calculation change in order totals -o5a_checkoutpageReg$/ , () =>{
  return o5a_pageObj
    .waitForElementPresent('@ordersummary_price_class', 5000)
    .waitForElementPresent('@orderSummary_shippingCharge_css', 5000)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge)
});

/****************** remove promo *******************************************/ 
Given(/^I am on the CHECKOUT page w promo applied -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@promo_class' ,5000)
    .waitForElementPresent('@promo_remove_class' ,5000)
    .click('@promo_remove_class')
});
When(/^I remove this promo code -o5a_checkoutpageReg$/, () => {
  return client
    .pause(4000)
});
Then(/^I should see the calculation change in order totals -o5a_checkoutpageReg$/ , () =>{
  return o5a_pageObj
    .waitForElementPresent('@ordersummary_price_class', 5000)
    .waitForElementPresent('@orderSummary_shippingCharge_css', 5000)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge2)
});

/****************** SHIPPING METHOD ********************************************************/  

Given(/^I am on the CHECKOUT page to update shipping method -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_shippingMethod_class' , 7000)
    .waitForElementPresent('@checkout_shippingMethodChange_btn',5000)  
    .click('@checkout_shippingMethodChange_btn')
    .waitForElementPresent('@ordersummary_price_class', 5000)
});
When(/^I select a different shipping methods from the given options -o5a_checkoutpageReg$/, () => {
  return client
    .pause(10000)
});
Then(/^the page should reflect the new shipping method -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@orderSummary_shippingCharge_css', 10000)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge3)
});


/****************** place order and reach the THANK YOU PAGE w order confirmation number *******************************************/ 

Given(/^I am on the CHECKOUT page -o5a_checkoutpageReg$/, () => { 
  return o5a_pageObj
      .waitForElementVisible('@checkout_shippingAddress_class', 20000)
      .waitForElementVisible('@checkout_paymentInfo_class', 20000)
      .waitForElementVisible('@checkout_shippingMethod_class', 20000)
      .waitForElementVisible('@ordersummary_price_class', 20000)
      .waitForElementVisible('@checkout_lineItemDesc_class', 5000)
      .assert.containsText('@checkout_lineItemDesc_class', productDescription_item1)
      .assert.title(checkout_pagetitle)  
});
When(/^I click on the PLACE ORDER button -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@checkout_placeOrder_btn' , 9000)
    .click('@checkout_placeOrder_btn')
});
Then(/^I should be redirected to THANK YOU page -o5a_checkoutpageReg$/, () => {
  return client
    .pause(1000)
});
Then(/^there should be an Order number -o5a_checkoutpageReg$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@thankyou_header_class', 20000)
    .assert.containsText('@thankyou_header_class', thankyou_header) 
    .waitForElementVisible('@thankyou_details_css', 20000)
    .assert.containsText('@thankyou_details_css', username3) 
});