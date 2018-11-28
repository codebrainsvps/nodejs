const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var header_subcatPagetitle = client.globals.saksConstants.header_subcatPagetitle;
var giftcard_pagetitle =client.globals.saksConstants.giftcard_pagetitle;
var giftcard_PDPpagetitle =client.globals.saksConstants.giftcard_PDPpagetitle;
var giftcard_desc =client.globals.saksConstants.giftcard_desc;
var username2 =client.globals.saksConstants.username2;
var password=client.globals.saksConstants.password;
var bag_pagetitle =client.globals.saksConstants.bag_pagetitle;
var checkout_pagetitle  =client.globals.saksConstants.checkout_pagetitle ;
var promocode =client.globals.saksConstants.promocode
var promoCodeText =client.globals.saksConstants.promoCodeText
var shippingCharge =client.globals.saksConstants.shippingCharge
var thankyou_header  =client.globals.saksConstants.thankyou_header ;

/*****************  Header top nav dropdowns and url are rendering ************************************************** */
Given(/^I open <website homepage> -o5a_topnavFooterGC$/, () => {
  return client
    .url(qaUrl)    
    .waitForElementVisible('#saksOverlay', 5000)
    .click('#saksOverlay')
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)
});
Then(/^top nav menu is rendering -o5a_topnavFooterGC$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@header_navigation_class' , 7000)
    .waitForElementPresent('@header_navigationPane_class' , 7000)
    .waitForElementPresent('@header_subcategory_class', 5000)
    .moveToElement('@header_category_css' , 20,20) //preselected in pageObj.js
    .waitForElementPresent('@header_categoryColumn_css' , 7000) //preselected in pageObj.js
});
When(/^I click on a category from the <category page name> drop-down in the Top Nav bar -o5a_topnavFooterGC$/ , () => {
  return client  
    .pause(3000)
});
Then(/^I should be taken to the <subcategory name> page -o5a_topnavFooterGC$/, ()  => {
   return o5a_pageObj
      .click('@header_categoryColumnSubcategory_css') //preselected in pageObj.js
      .waitForElementPresent('title' , 22000)
      .assert.title(header_subcatPagetitle)
});
/************************** navigate to gift card product array via footer  ************************************************** */
Given(/^I am on the website -o5a_topnavFooterGC$/, () => {
  return client
    .url(qaUrl)  
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(200, 6000)')         
});
Then(/^I am taken to the GiftCard page via footer CTA -o5a_topnavFooterGC$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@footer_css' , 7000)
    .waitForElementPresent('@footer_column_css', 5000)
    .waitForElementPresent('@footer_columnGiftCard_css' , 9000)
    .click('@footer_columnGiftCard_css') 
    .waitForElementPresent('title' , 40000)
    .assert.title(giftcard_pagetitle)
});
When(/^I click on STANDARD GIFT CARD -o5a_topnavFooterGC$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@giftcard_standardCard_css' , 9000)
    .click('@giftcard_standardCard_css') 
  }); 
Then(/^I should be taken to a gift card product details page -o5a_topnavFooterGC$/, () => {
  return o5a_pageObj
    .waitForElementPresent('title' , 40000)
    .assert.title(giftcard_PDPpagetitle)
    
});  
/************************** navigate to gift card product array via footer  ************************************************** */

  Given(/^I am on a gift card product details page -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@prod_desc_class' , 40000)
      .assert.containsText('@prod_desc_class',giftcard_desc)   
  });
  When(/^I select a denomination, quantity “1” -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@pdp_giftcard_denomination_class' , 15000)
      .waitForElementPresent('@pdp_giftcard_denomination_class' , 15000)
      .click('@pdp_giftcard_denomination_class')
  });
  Then(/^click the ADD TO BAG button -o5a_topnavFooterGC/, () => {
    return o5a_pageObj
      .waitForElementPresent('@pdp_addtobag_btn' , 5000)
      .click('@pdp_addtobag_btn')   
  });
  Then(/^the item appears in the mini cart -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@minicart_header_class', 5000)
});
  Then(/^validate product info -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@minicart_itemDetails_class', 5000)
      .assert.containsText('@minicart_itemDetails_class', giftcard_desc)
});


/************************** proceed to bag page from minicart ************************************************** */

  Given(/^I have a standard gift card in the mini cart -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@minicart_checkout_class' , 5000)
      .waitForElementPresent('@minicart_checkout_btn' , 5000)
});
  When(/^I click on the CHECKOUT button in the mini cart -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .click('@minicart_checkout_btn')
  });
  Then(/^I should be taken to the bag page -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@bag_title_css', 5000)
      .assert.containsText('@bag_title_css', bag_pagetitle) 
  });
  Then(/^validate bag page info -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj 
      .waitForElementVisible('@prod_lineItemDesc_class', 5000)
      .assert.containsText('@prod_lineItemDesc_class', giftcard_desc) 
      .waitForElementVisible('@bag_itemPrice_class', 5000)
      .waitForElementVisible('@order_total_css', 5000)
  });
/************************** open sign in overlay on bag page ************************************************** */

  Given(/^I am on the bag page -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@bag_checkout_class', 18000)
  });
  When(/^I click on the CHECKOUT button on the BAG page -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .click('@bag_checkout_class')
  });
  Then(/^a sign in overlay pops up -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@bag_login_class', 20000)
  });
/************************** log into registered account via bag page ************************************************** */

  Given(/^I am on the BAG page with a sign in overlay open -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@bag_emailEntry_css', 20000)
      .waitForElementVisible('@bag_passwordEntry_css', 20000)
});
  Then(/^I enter a valid email address and password -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .setValue('@bag_emailEntry_css', username2)
      .setValue('@bag_passwordEntry_css', password)
});
  When(/^I click on the SIGN IN & CHECKOUT button on sign in overlay -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
    .click('@bag_loginCheckout_btn')
  });
  Then(/^I should be redirected to the CHECKOUT page -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@checkout_shippingAddress_class', 20000)
      .waitForElementVisible('@checkout_paymentInfo_class', 20000)
      .waitForElementVisible('@checkout_shippingMethod_class', 20000)
      .waitForElementVisible('@ordersummary_price_class', 20000)
      .waitForElementVisible('@checkout_lineItemDesc_class', 5000)
      .assert.containsText('@checkout_lineItemDesc_class', giftcard_desc) 
});

/****************** apply promo *******************************************/ 
Given(/^I am on the CHECKOUT page that is promo eligible -o5a_topnavFooterGC$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@promo_class' ,5000)
    .click('@promo_class')
    .waitForElementVisible('@promo_entry_css', 5000)
});
When(/^I apply this promo code -o5a_topnavFooterGC$/, () => {
  return client
    .pause(4000)
    .setValue('input[name=promoCode]', promocode)
});
Then(/^I should see the discount being applied on the item level -o5a_topnavFooterGC$/, () => {
  return o5a_pageObj
      .click('@promo_apply_btn')
      .waitForElementPresent('@checkout_promoLineItem_class', 15000)
      .assert.containsText('@checkout_promoLineItem_class', promoCodeText)
});
Then(/^validate calculation change in order totals -o5a_topnavFooterGC$/ , () =>{
  return o5a_pageObj
    .waitForElementPresent('@ordersummary_price_class', 5000)
    .waitForElementPresent('@orderSummary_shippingCharge_css', 5000)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge)
});

/************************** place order and reach the THANK YOU PAGE w order confirmation number ************************************************** */

  Given(/^I am on the CHECKOUT page -o5a_topnavFooterGC$/, () => { 
    return o5a_pageObj
      .assert.title(checkout_pagetitle) 
});
  When(/^I click on the PLACE ORDER button -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
    .waitForElementPresent('@checkout_placeOrder_btn' , 9000)
    .click('@checkout_placeOrder_btn')
});
  Then(/^I should be redirected to THANK YOU page -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
    .waitForElementVisible('@thankyou_header_class', 20000)
    .assert.containsText('@thankyou_header_class', thankyou_header) 
});
  Then(/^there should be an Order number -o5a_topnavFooterGC$/, () => {
    return o5a_pageObj
    .waitForElementVisible('@thankyou_details_css', 20000)
    .assert.containsText('@thankyou_details_css', username2) 
});