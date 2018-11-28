const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var productPageTitle_item1 = client.globals.saksConstants.productPageTitle_item1;
var productID_item1 = client.globals.saksConstants.productID_item1;
var productDescription_item1 = client.globals.saksConstants.productDescription_item1;
var bag_pagetitle = client.globals.saksConstants.bag_pagetitle;
var promocode = client.globals.saksConstants.promocode;
var promoCodeText = client.globals.saksConstants.promoCodeText;
var shippingCharge = client.globals.saksConstants.shippingCharge;
var bag_qtyItem1 = client.globals.saksConstants.bag_qtyItem1;
var bag_prodVariant_item1 = client.globals.saksConstants.bag_prodVariant_item1;
var bag_emptyMsg = client.globals.saksConstants.bag_emptyMsg;





/****************** search by web id ************************************************************/ 
Given(/^I am on the website -o5a_bagpage$/, () => {
  return client
    .url(qaUrl)   
    .waitForElementVisible('#saksOverlay', 5000)
    .click('#saksOverlay')
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle) 
});
When(/^I enter this product id -o5a_bagpage$/, () => {
  return o5a_pageObj
    .assert.visible('@header_searchBar_class') 
    .setValue('@header_searchBar_class', productID_item1)
    .click('@header_searchSubmit_btn') 
});    
Then(/^I should be taken to a PDP of this product -o5a_bagpage$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@prod_desc_class', 10000)
    .assert.title(productPageTitle_item1)
});

/****************** add to bag on PDP ************************************************************/   
Given(/^I am on a Product Detail Page -o5a_bagpage$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@prod_desc_class', 9000)
    .expect.element('@prod_desc_class').text.to.equal(productDescription_item1);
});
When(/^I select a color, size, quantity “1” -o5a_bagpage$/, () => {
  return o5a_pageObj
    .assert.visible('@pdp_color_class')
    .assert.visible('@pdp_size_class')
    //.click('@pdp_colorItem1_css')
    .click('@pdp_sizeItem1_css')
});
Then(/^click the ADD TO BAG button -o5a_bagpage$/, () => {
  return o5a_pageObj
    .click('@pdp_addtobag_btn')  
});
Then(/^the item appears in the mini cart -o5a_bagpage$/, () => {
  return o5a_pageObj
      .waitForElementVisible('@minicart_header_class', 5000)
});
/****************** change size, quantity, and color of the items on product overlay ************************************************************/   
Given(/^I have an item in the mini cart -o5a_bagpage$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@minicart_itemDetails_class', 5000)
    .assert.containsText('@minicart_itemDetails_class', productDescription_item1)
    .waitForElementPresent('@minicart_checkout_class' , 5000)
    .click('@minicart_checkout_btn')
});
When(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -o5a_bagpage$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@bag_title_css', 5000)
    .assert.containsText('@bag_title_css', bag_pagetitle) 
    .waitForElementVisible('@prod_lineItemDesc_class', 5000)
    .assert.containsText('@prod_lineItemDesc_class', productDescription_item1)   
    .waitForElementVisible('@bag_itemPrice_class', 5000)
    .waitForElementVisible('@order_total_css', 5000)
});

Then(/^I access the PDS overlay by clicking on the item image -o5a_bagpage$/, () => {
  return o5a_pageObj 
    .waitForElementVisible('@bag_itemImg_class', 5000)
    .click('@bag_itemImg_class')
    .waitForElementPresent('@bag_quicklook_class' , 10000)
    .waitForElementPresent('@bag_quicklookSize_class' , 8000)
    .click('@bag_quicklookSize_item1_css')  
    .waitForElementPresent('@bag_quicklookUpdate_btn' , 8000)
    .click('@bag_quicklookUpdate_btn') 
});
Then(/^I update the following product information on the overlay -o5a_bagpage$/, () => {
  return client
    .pause(3000)   
});
Then(/^I should see the product information updated on the bagpage:-o5a_bagpage$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@bag_lineItemVariants_class' , 8000)
    .assert.containsText('@bag_lineItemVariants_class', bag_prodVariant_item1) 
});
  

/****************** change quantity of the item on the bag page************************************************************/   
  Given(/^I am on the bag page -o5a_bagpage$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@bag_itemQty_class' , 7000)
      .waitForElementPresent('@bag_itemQtyInput_css' , 7000)
  });
  When(/^I update the following product information on the bag page -o5a_bagpage$/, () => {
    return client
      .clearValue('input[name=spinbox__numerical]') 
      .setValue('input[name=spinbox__numerical]', bag_qtyItem1)
      .pause(3000)   
  });
  Then(/^I should see the product information updated on the bag: -o5a_bagpage$/, () => {
    return o5a_pageObj
      .waitForElementPresent('@bag_title_css' ,5000)
      .assert.containsText('@bag_title_css', bag_qtyItem1) 
  });

  /****************** apply promo code************************************************************/  
Given(/^I have an item on the bag page that is promo eligible -o5a_bagpage$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@promo_class' ,5000)
    .click('@promo_class')
    .waitForElementPresent('@promo_entry_css', 9000)
});
When(/^I apply this promo code -o5a_bagpage$/, () => {
  return client
    .pause(4000)
    .setValue('input[name=promoCode]', promocode)
});
Then(/^I should see the discount being applied on the item level -o5a_bagpage$/, () => {
  return o5a_pageObj
    .click('@promo_apply_btn')
    .waitForElementPresent('@bag_promoLineItem_class', 15000)
    .assert.containsText('@bag_promoLineItem_class', promoCodeText)
});
Then(/^validate calculation change in order total -o5a_bagpage$/ , () =>{
  return o5a_pageObj
    .waitForElementPresent('@ordersummary_price_class', 5000)
    .waitForElementPresent('@orderSummary_shippingCharge_css', 5000)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge)
});  


/****************** Estimated tax calculation ************************************************************/   
/*
  Given(/^I have an item on the bag page that is taxable -o5a_bagpage$/, () => {
    return o5a_pageObj
    .waitForElementVisible('@zipcodeField', 9000)      
  });
  When(/^I enter a shipping Zip Code -o5a_bagpage$/, () => {
    return client
    .setValue('input[name=zipCode]', zip)
  });
  Then(/^I should see calculation change for tax and order total -o5a_bagpage$/, () => {
    return client
    .pause(7000)
  }); */
/****************** remove the items on the bag ************************************************************/   
Given(/^I have an item on the bag page -o5a_bagpage$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@bag_items_class', 9000)  
      .waitForElementVisible('@bag_iconRemove_class', 9000) 
      .click('@bag_iconRemove_class')      
  });
  When(/^I click on REMOVE option -o5a_bagpage$/, () => {
    return client
      .pause(3000)
  });
  Then(/^I should see an empty bag page -o5a_bagpage$/, () => {
    return o5a_pageObj
      .waitForElementVisible('@bag_emptyMsg_class', 5000) 
      .assert.containsText('@bag_emptyMsg_class', bag_emptyMsg)
  }); 

  
  