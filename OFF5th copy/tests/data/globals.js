/* the values listed on this globals.js file maps to each js file in step_definitions folder */

var saksConstants = {
/********KEYS *******************************************************************************/
enterKey :'\uE007',
/******* COMMON [SHARED CROSS PAGES] ***********************************************************************/
qaUrl : 'https://qa.saksoff5th.com/Entry.jsp', 
homepageTitle : "Discount Designer Women's Clothing, Handbags & More | Saksoff5th.com",
shippingCharge :"FREE",
shippingCharge2: "7.99", //standard
shippingCharge3: "14.99", //rush
taxCharge: "UNPAID",
promocode :"SHIP99",
promoCodeText : "Promo",

/******* TEST ITEMS ***********************************************************************/
/*product1*/
productID_item1 : '0400088840454', //shirt shirt
productPageTitle_item1 : "Sovage - Boy's Tri-Blend Colorblock Henley Tee - saksoff5th.com",
productDescription_item1  : "Boy's Tri-Blend Colorblock Henley Tee",
productSizeValue_item1  : "12", //[size] [test data]
minicart_qtyItem1  : '2', // [test data] [INPUT NUMBER HERE]
bag_qtyItem1 : '9', // [test data] I[INPUT NUMBER HERE]
bag_prodVariant_item1 : '10', //[size] // [test data]

/*product2*/
productID_item2 : '0497847361003', //soap bar
productPageTitle_item2 : "Pré de Provence - Shea Butter & Pure Vegfetable Oil Soap/Mint Leaf - saksoff5th.com",
productDescription_item2  : "Shea Butter & Pure Vegfetable Oil Soap/Mint Leaf",
minicart_qtyItem2  : '2', // [test data]
productSizeValue_item2  : "8.8", //[size] 

/*minicart bag page*/
minicart_qtyTotal : '4', //minicart_qtyItem1 + minicart_qtyItem2 // [test data] [INPUT NUMBER HERE]

/*search terms*/
search_term1 : 'sneakers', // [test data]
search_term2 : 'BOY HENLEY TEE', // [test data]

/******* TEST ACCOUNTS ***********************************************************************/
username :"username@test.com", //CHANGE TO YOUR ACCOUNT INFO. [ACCOUNT] [ORDERPLACEMENTREG] [test data]
username2 :"", //CHANGE TO YOUR ACCOUNT INFO. [TOPNAVFOOTERGC] [test data]
username3 :"", //CHANGE TO YOUR ACCOUNT INFO. [CHECKOUTPAGEREG] [test data]
username4 :"", //CHANGE TO YOUR ACCOUNT INFO. [shoprunnerReg] [test data]
password:"password123", //CHANGE TO YOUR ACCOUNT INFO  [test data]
usernameINTL : 'username@test.com', //CHANGE TO YOUR ACCOUNT INFO  [ORDERPLACEMENTREGINTL][test data]
username2INTL : '', //CHANGE TO YOUR ACCOUNT INFO [CHECKOUTPAGEREGINTL]  [test data]
username_shoprunner :'saks-test@shoprunner.com',
password_shoprunner :'test1234',

/******* HEADER FOOTER ***********************************************************************/
header_signoutmsg: 'Not NAME? Sign Out', //CHANGE NAME TO YOUR ACCOUNT INFO   [test data]
header_signoutmsgINTL: 'Not NAME? Sign Out', //CHANGE NAME TO YOUR ACCOUNT INFO    [test data] 
header_welcomeSign: 'Welcome, Sign In',
header_welcomeName:'Welcome, NAME', //CHANGE NAME TO YOUR ACCOUNT INFO [test data]
header_welcomeNameINTL : "Welcome, NAME", //CHANGE NAME TO YOUR ACCOUNT INFO  [test data]
header_subcatPagetitle : "Women's Activewear: Shop Puma, Reebok & More | Saksoff5th.com", //change based on topnav data

/******* ACCOUNT PAGE ***********************************************************************/
acc_xxxxsAccount :"NAME's Account", //CHANGE NAME TO YOUR ACCOUNT INFO  // [test data]
acc_signIntoMyAccount : 'Sign Into My Account',
acc_addNewShippingAddress:'Add a New Shipping Address',
acc_addNewBillingAddress :'Add a New Billing Address',
acc_addNewPaymentMethod: 'Add a New Payment Method',
acc_saksfirstrewardsmsg:'The Best Rewards in Fashion',
acc_xxxxsAccountINTL : "NAME's Account", //CHANGE NAME TO YOUR ACCOUNT INFO // [test data]

/******* PRODUCT ARRAY ***********************************************************************/
pa_filterby : 'Under',
pa_paginationPageSelected : '2',
pa_leftnavCategory : 'Men',

/***** BAG **********************************************************************************/
bag_pagetitle :"Bag",
bag_emptyMsg:'Your shopping bag is empty',
bag_shoprunnerWelcome : 'Welcome Back',

/******* CHECKOUT ***********************************************************************/
checkout_addressLine1 : '225 LIBERTY ST', // [test data] secondary set ofaddress on account or add new address scenario on checkout page
checkout_addressLine2 : 'NEW YORK, NY 10281', // [test data] secondary set ofaddress on account or add new address scenario on checkout page
checkout_addressLine1INTL : '200 University Ave W', // [test data] secondary set ofaddress on account or add new address scenario on checkout page
checkout_addressLine2INTL : 'Waterloo, ON N2L 3G1', // [test data] secondary set ofaddress on account or add new address scenario on checkout page
checkout_pagetitle : 'Saks Off 5th Checkout',
/*SHIPPING ADDRESS - checkoutpage change/add a new address*/
checkout_city_new : 'NEW YORK', // [test data] secondary set ofaddress on account or add new address scenario on checkout page
checkout_zip_new : '10281', // [test data] secondary set ofaddress on account or add new address scenario on checkout page
/* see pageObj.js @checkout_state_css to edit STATE option */
/*SHIPPING ADDRESS INTERNATIONAL - checkoutpage change/add a new address*/
checkout_city_newINTL : 'Waterloo', // [test data] secondary set ofaddress on account or add new address scenario on checkout page
checkout_zip_newINTL : 'N2L 3G1', // [test data] secondary set ofaddress on account or add new address scenario on checkout page

/*SHIPPING ADDRESS*/ //guest checkout or default address on account [test data]
checkout_firstName : 'FIRSTNAME',
checkout_lastName : 'LASTNAME',
checkout_address1 : '12 WASHINGTON ST',
checkout_city : 'HOBOKEN',
checkout_zip : '07030',
checkout_phone : '6667778888',
/* see pageObj.js @checkout_state_css to edit STATE option */

/*SHIPPING ADDRESS INTERNATIONAL*/ //guest checkout or default address on account [test data]
checkout_address1INTL : '401 Bay St',
checkout_cityINTL : 'Toronto',
checkout_zipINTL : 'M5H 2Y4',
/* see pageObj.js @checkout_state_css to edit STATE option */

/*ENTER PAYMENT METHOD*/
checkout_ccNumber1 : '4430850000000034', //guest or default card on account
checkout_ccNumber2 : '5134510000000030', // [test data] secondary set of credit card saved on account or add new credit card scenario on checkout page
checkout_expDate : '12/2028',
checkout_CVC3digits : '123',
checkout_ccName : 'Jim Carter',
checkout_paymentType : 'MasterCard', // [test data] secondary set of credit card saved on account or add new credit card scenario on checkout page
checkout_paymentTypeINTL : 'MC', // [test data] secondary set of credit card saved on account or add new credit card scenario on checkout page

/********Internatinal ************************************************************************************/ 
Intl_shipping: 'INTERNATIONAL SHIPPING',
Intl_country: 'Canada', //[test data]
Intl_currency : 'CAD', //[test data]
/* go to pageObj.js @intl_countryDropdownTestItem_css to change test country */

/******* GIFT CARD ***************************************************************************/
giftcard_pagetitle : "Gift Cards",
giftcard_PDPpagetitle : "Saks Fifth Avenue OFF 5TH - Standard Gift Card - saksoff5th.com",
giftcard_desc : "Standard Gift Card",

/******* THANKYOU ***********************************************************************/
thankyou_header : 'ORDER RECEIVED',




    }
    module.exports = {
        saksConstants : saksConstants
     }