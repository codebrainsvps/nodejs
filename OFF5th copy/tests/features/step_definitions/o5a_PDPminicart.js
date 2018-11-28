const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const { After } = require('cucumber');
const o5a_pageObj = client.page.o5a_pageObj()

var qaUrl = client.globals.saksConstants.qaUrl;
var homepageTitle = client.globals.saksConstants.homepageTitle;
var productPageTitle_item1 = client.globals.saksConstants.productPageTitle_item1;
var productID_item1 = client.globals.saksConstants.productID_item1;
var productDescription_item1 = client.globals.saksConstants.productDescription_item1;
var productSizeValue_item1 = client.globals.saksConstants.productSizeValue_item1;
var minicart_qtyItem1 = client.globals.saksConstants.minicart_qtyItem1;
var productPageTitle_item2 = client.globals.saksConstants.productPageTitle_item2;
var productID_item2 = client.globals.saksConstants.productID_item2;
var productDescription_item2 = client.globals.saksConstants.productDescription_item2;
var productSizeValue_item2 = client.globals.saksConstants.productSizeValue_item2;
var minicart_qtyItem2 = client.globals.saksConstants.minicart_qtyItem2;
var minicart_qtyTotal = client.globals.saksConstants.minicart_qtyTotal;
var bag_pagetitle = client.globals.saksConstants.bag_pagetitle;

/**********************search by web id ******************************* */
Given(/^I am on the website -o5a_PDPminicart$/, () => {
  return client
    .url(qaUrl)       
    .waitForElementVisible('#saksOverlay', 5000)
    .click('#saksOverlay')
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)   
});
When(/^I enter this product id -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .assert.visible('@header_searchBar_class') 
    .setValue('@header_searchBar_class', productID_item1)
    .click('@header_searchSubmit_btn') 
});      
Then(/^I should be taken to a PDP of this product -o5a_PDPminicart$/, () => {
  return o5a_pageObj
  .waitForElementPresent('@prod_desc_class', 10000)
  .assert.title(productPageTitle_item1)
});

  /**********************PDP - switch between images, colors, and size ******************************* */
Given(/^I am on a Product Detail Page that has multiple colors, sizes, and images -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@prod_desc_class', 9000)
    .assert.containsText('@prod_desc_class', productDescription_item1)
    .waitForElementVisible('@pdp_price_class', 9000)

});
When(/^I alternate between the images, colors, and sizes available -o5a_PDPminicart$/, () => {
  return o5a_pageObj  
    .assert.visible('@pdp_color_class')
    .assert.visible('@pdp_size_class')
    .click('@pdp_image1_css')
    .click('@pdp_image2_css')
    
    .click('@pdp_size1_css')
    .click('@pdp_size2_css')
    .click('@pdp_size3_css') 
});
  Then(/^I should see the changes being reflected for the sku -o5a_PDPminicart$/, () => {//NEED TO WRITE SCRIPT FOR CHANGES REFLECTED
    return o5a_pageObj
    .waitForElementVisible('@pdp_sizeValue_css', 5000)
    .assert.containsText('@pdp_sizeValue_css', productSizeValue_item1)
});
/**********************add to bag on PDP ******************************* *************************************/
Given(/^I am on a Product Detail Page -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@pdp_price_class', 5000)
});
When(/^I select a color, size, quantity “2” -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .click('@pdp_size1_css')
    .waitForElementVisible('@pdp_qtySpinboxInc_class', 9000)
    .click('@pdp_qtySpinboxInc_class')
});
Then(/^click the ADD TO BAG button -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@pdp_addtobag_btn', 9000)
    .click('@pdp_addtobag_btn')  
  });
Then(/^I can validate the options color, size, '2', price selected in the mini bag -o5a_PDPminicart$/, () => {
  return o5a_pageObj
      .waitForElementVisible('@minicart_header_class', 5000)
      .waitForElementVisible('@minicart_itemDetails_class', 5000)
      .assert.containsText('@minicart_itemDetails_class', productDescription_item1)
      .waitForElementVisible('@minicart_subtotal_class', 5000)
      .waitForElementVisible('@minicart_image_css', 5000)
      .waitForElementVisible('@minicart_price_class', 5000)
      .waitForElementVisible('@minicart_qty_css', 5000)
      .assert.containsText('@minicart_qty_css', minicart_qtyItem1)
  });
/**********************search by web id #2******************************* */
Given(/^I am on the homepage -o5a_PDPminicart$/, () => {
  return client
    .url(qaUrl)
    .waitForElementPresent('body', 2000, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)   
});
When(/^I enter this product id or sku -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .assert.visible('@header_searchBar_class') 
    .setValue('@header_searchBar_class', productID_item2)
    .click('@header_searchSubmit_btn') 
});    
Then(/^I should be navigated to a PDP of this product -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .waitForElementPresent('@prod_desc_class', 10000)
    .assert.title(productPageTitle_item2)
});
/**********************PDP - switch between images, colors, and size******************************* */

Given(/^I am on a Product Detail Page that has multiple colors, sizes, and images for selected sku -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@prod_desc_class', 9000)
    .assert.containsText('@prod_desc_class', productDescription_item2)
    .waitForElementVisible('@pdp_price_class', 9000)

});
When(/^I alternate between the images, colors, and sizes available for sku -o5a_PDPminicart$/, () => {
  return o5a_pageObj  
    .assert.visible('@pdp_color_class')
    .assert.visible('@pdp_size_class')
    .click('@pdp_image1_css')
    
    .click('@pdp_size1_css')
});
Then(/^I should see the changes being reflected -o5a_PDPminicart$/, () => {//NEED TO WRITE SCRIPT FOR CHANGES REFLECTED
  return o5a_pageObj
    .waitForElementVisible('@pdp_sizeValue_css', 5000)
    .assert.containsText('@pdp_sizeValue_css', productSizeValue_item2)
});

/**********************add to bag on PDP******************************* */
  
Given(/^I am on a Product Detail Page for a selected sku -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@pdp_price_class', 5000)
});
When(/^I select a color, size, quantity “2” for different sku -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .click('@pdp_size1_css')
    .waitForElementVisible('@pdp_qtySpinboxInc_class', 9000)
    .click('@pdp_qtySpinboxInc_class')
});
Then(/^click the ADD TO BAG button in PDP page -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@pdp_addtobag_btn', 9000)
    .click('@pdp_addtobag_btn')  
  });
Then(/^I can validate the options color, size, '2', price selected for sku in the mini bag for sku -o5a_PDPminicart$/, () => {
  return o5a_pageObj
    .waitForElementVisible('@minicart_header_class', 5000)
    .waitForElementVisible('@minicart_itemDetails_class', 5000)
    .assert.containsText('@minicart_itemDetails_class', productDescription_item2)
    .waitForElementVisible('@minicart_subtotal_class', 5000)
    .waitForElementVisible('@minicart_image_css', 5000)
    .waitForElementVisible('@minicart_price_class', 5000)
    .waitForElementVisible('@minicart_qty_css', 5000)
    .assert.containsText('@minicart_qty_css', minicart_qtyItem2)
});

/******* bag page renders with correct item amount  ***********************************************************************/

Given(/^I have items in the MINI CART -o5a_PDPminicart$/, () => {
  return o5a_pageObj
  .waitForElementVisible('@minicart_header_class', 5000)
  .assert.visible('@minicart_header_class', minicart_qtyTotal )
});

When(/^I click on the CHECKOUT button in the mini cart -o5a_PDPminicart$/, () => {
  return o5a_pageObj
  .waitForElementVisible('@minicart_checkout_btn', 5000)
  .click('@minicart_checkout_btn')

});

Then(/^I should be taken to the the bag page -o5a_PDPminicart$/, () => {
  return o5a_pageObj
  .waitForElementVisible('@bag_title_css', 5000)
  .assert.containsText('@bag_title_css', bag_pagetitle) 
});

Then(/^validate multi item info are rendering correctly -o5a_PDPminicart$/ , () =>{
  return o5a_pageObj
  .assert.containsText('@bag_title_css', minicart_qtyTotal) 
  .waitForElementVisible('@prod_lineItemDesc_class', 5000) 
  .assert.containsText('@prod_lineItemDesc_class', productDescription_item2) 
  //.waitForElementVisible('.widebag-item-details', 5000) 
  //.assert.containsText('.widebag-item-short-description', 'Chuck Taylor All-Star Classic') //requires revisit  
});