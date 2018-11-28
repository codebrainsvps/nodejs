/* the values listed on this pageObj.js file maps to each js file in step_definitions folder */


module.exports = {
    elements : {
/******** COMMON ***********************************************************************************/        
/* test product */
prod_desc_class : {
    selector : '.product-overview__short-description',
    locateStratergy : 'css selector'
},    
prod_lineItemID_class :{
    selector : '.jsItemProductCode',
    locateStratergy : 'css selector'
},   
prod_lineItemDesc_class :{
    selector : '.shopping-bag-item__short-desc',
    locateStratergy : 'css selector'
}, 
/* promo section on bag page & checkout page*/
promo_class :{
    selector :'.hbc-checkout__promo',
    locateStratergy : 'css selector'
}, 
promo_entry_css :{
    selector :'#promo-code-number',
    locateStratergy : 'css selector'
},
promo_apply_btn :{
    selector :'.hbc-promo-code__submit-btn',
    locateStratergy : 'css selector'
},
promo_remove_class :{ 
    selector : '.hbc-promo-code-display__remove-link',
    locateStratergy : 'css selector'
},
/* order summary section on bag page & checkout page*/
ordersummary_price_class :{
    selector :'.hbc-price-display__summary',
    locateStratergy : 'css selector'
},
orderSummary_shippingCharge_css :{ 
    selector : 'div.hbc-price-display__summary > div:nth-child(2) > span.hbc-price-display__summary-price',
    locateStratergy : 'css selector'
},
orderSummary_taxCharge_css :{ 
    selector : 'div.hbc-price-display__summary > div:nth-child(3) > span.hbc-price-display__summary-price',
    locateStratergy : 'css selector'
},
order_total_css :{ 
    selector : 'div.hbc-price-display__line-item.hbc-price-display__line-item--items-total > span.hbc-price-display__summary-price',
    locateStratergy : 'css selector'
},

/******** TEST ITEM ***********************************************************************************/        
pdp_colorItem1_css : { //
  selector : 'div.product-color-options > ul > li:nth-child(1)',
  locateStratergy : 'css selector'
},
pdp_sizeItem1_css :{ //TEST ITEM: SHIRT. SELECT FIRST SIZE OPTION
    selector: 'div.product-size-options > ul > li:nth-child(1)',
    locateStratergy : 'css selector'
},
bag_quicklookSize_item1_css :{ //TEST ITEM: SHIRT. SELECT SECOND SIZE OPTION
    selector :'div.quicklook__content > section.quicklook__product-size-options > div > ul > li:nth-child(2)',
    locateStratergy : 'css selector'
},

/******** HEADER FOOTER ***********************************************************************************/        
/* WELCOME SECTION */
header_welcomediv_class :{
    selector : 'div.hbc-header__account > div > a',
    locateStratergy : 'css selector'
},
header_welcomeSignin_css :{
    selector : 'div.hbc-header__account > div > a',
    locateStratergy : 'css selector'
},
header_welcomeName_css : {
    selector:'div.hbc-header__account > div > div > a > div',
    locateStratergy : 'css selector'
},
header_welcomeDropdown_css : { 
    selector : '#ui-header > div > header > div > div.hbc-header__account > div > div > a > span',
    locateStratergy : 'css selector'
}, 
header_welcomeSignout_class :{
    selector:'.account-dropdown__item--last',
    locateStratergy : 'css selector'
},
header_welcomeSignout_css:{
    selector:'div.hbc-header__account > div > div > div > div > a',
    locateStratergy : 'css selector'
},
header_welcomeSignout_btn:{
    selector:'#ui-header > div > header > div > div.hbc-header__account > div > div > div > div.account-menu__item.account-dropdown__item--last > a',
    locateStratergy : 'css selector'
},
header_welcomeSignin_css : {
    selector:'#ui-header > div > header > div > div.hbc-header__account > div > a > span',
    locateStratergy : 'css selector'
},
/* SEARCH */
header_searchBar_class : {
    selector : '.header-search__input',
    locateStratergy : 'css selector'
},
header_searchSubmit_btn : {
      selector:'.header-search__button--search',
      locateStratergy : 'css selector'
},
/* TOP NAV */
header_navigation_class :{
    selector : '.navigation', 
    locateStratergy : 'css selector'
} ,  
header_navigationPane_class :{
    selector : '.navigation__pane--active', 
    locateStratergy : 'css selector'
} ,
header_subcategory_class :{
    selector : '.subcategory__container', 
    locateStratergy : 'css selector'
},
header_category_css:{ //3rd category
    selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(6) > a', 
    locateStratergy : 'css selector'
},
header_categoryColumn_css:{ //3rd category, 1st column
    selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(6) > ul > div > li:nth-child(1) > ul > li', 
    locateStratergy : 'css selector'
},
header_categoryColumnSubcategory_css:{ //3rd category, 1st column, 1st subcategory link
    selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(6) > ul > div > li:nth-child(1) > ul > li > ul > li:nth-child(1) > a > span', 
    locateStratergy : 'css selector'
},
/* FOOTER */
footer_css : {
    selector : '#footer-wrapper',
    locateStratergy : 'css selector'
},
footer_column_css : { //column 2
    selector:'#ui-footer > footer > div:nth-child(2) > section > article:nth-child(1)',
    locateStratergy : 'css selector'
},
footer_columnGiftCard_css : { //gift card cta
    selector:'#ui-footer > footer > div:nth-child(2) > section > article:nth-child(1) > ul > li.hbc-site-map__link.hbc-site-map__link--hide-mobile > a',
    locateStratergy : 'css selector'
},
footer_columnCreateAccount_css : { //Create A More! Account
    selector:'#ui-footer > footer > div:nth-child(2) > section > article:nth-child(1) > ul > li:nth-child(5) > a',
    locateStratergy : 'css selector'
},
/************** ACCOUNT ***********************************************************************************/        
acc_loginNewaccount_class : {
    selector : '.sign-in__account',
    locateStratergy : 'css selector'
},
acc_signinTitle_class : {
    selector : '.sign-into-account__title',
    locateStratergy : 'css selector'
},
acc_signinSection_class : {
    selector : '.sign-into-account',
    locateStratergy : 'css selector'
}, 
acc_emailField_css : {
    selector : '#sign-into-account-email-field',
    locateStratergy : 'css selector'
},  
acc_passwordField_css : {
    selector : '#sign-into-account-password-field',
    locateStratergy : 'css selector'
},
acc_signin_btn : {
    selector:'div.account__body-section > div:nth-child(1) > div > div > div.sign-in__account > section > form > div.sign-into-account__button > button',
    locateStratergy : 'css selector'
},   
/* ACCOUNT ORDER SUMMARY PAGE*/
acc_pageheader_class : {
    selector : '.account-header',
    locateStratergy : 'css selector'
},
acc_greetings_class : {
    selector : '.account-header__greeting',
    locateStratergy : 'css selector'
},
acc_headerNavTab_css : {
    selector : 'div > div.account__header-section > div > div > ul',
    locateStratergy : 'css selector'
},
acc_profile_class : {
    selector : '.account-profile',
    locateStratergy : 'css selector'
},
acc_email_class : {
    selector : '.account-profile__content--trailing',
    locateStratergy : 'css selector'
},
/* ACCOUNT ORDER HISTORY PAGE*/
acc_orderHistoryTab_css : { 
    selector : 'div > div.account__header-section > div > div > ul > li:nth-child(2) > a',
    locateStratergy : 'css selector'
},
acc_orderHistoryDetails_css : { //only works for account that with order history
    selector : '.order-billing-details',
    locateStratergy : 'css selector'
},
/* ACCOUNT SHIPPING PAGE*/
acc_shippingAddressTab_css : {
    selector : 'div > div.account__header-section > div > div > ul > li:nth-child(3) > a',
    locateStratergy : 'css selector'
},
acc_addNewShipAddress_class : {
    selector : '.add-new-item-card__inner',
    locateStratergy : 'css selector'
},
acc_addNewShipAddressTitle_class : {
    selector : '.add-new-item-card__title',
    locateStratergy : 'css selector'
},
/* ACCOUNT BILLING PAGE*/
acc_billingAddressTab_css :{
    selector: 'div > div.account__header-section > div > div > ul > li:nth-child(4) > a',
    locateStratergy : 'css selector'
},
acc_addNewBilAddress_class : {
    selector : '.add-new-item-card__inner-cell',
    locateStratergy : 'css selector'
},
acc_addNewBillAddressTitle_class : {
    selector : '.add-new-item-card__title',
    locateStratergy : 'css selector'
},
/* ACCOUNT PAYMENT PAGE*/
acc_paymentTab_css : {
    selector : 'div > div.account__header-section > div > div > ul > li:nth-child(5) > a',
    locateStratergy : 'css selector'
},
acc_addNewPayment_class : {
    selector : '.add-new-item-card__inner-cell',
    locateStratergy : 'css selector'
},
acc_addNewPaymentTitle_class : {
    selector : '.add-new-item-card__title',
    locateStratergy : 'css selector'
},
/* ACCOUNT SETTINGS PAGE*/
acc_settingsTab_css: {
    selector :'div > div.account__header-section > div > div > ul > li:nth-child(6) > a',
    locateStratergy : 'css selector'
},
/* ACCOUNT FAVORITES PAGE*/
acc_favoritesTab_css : {
    selector : 'div > div.account__header-section > div > div > ul > li:nth-child(7) > a',
    locateStratergy : 'css selector'
},   
acc_favoritesPage_css : { 
    selector : '#favorites-container',
    locateStratergy : 'css selector'
}, 

         
/*** Product Array page****************************************************************************/  
pa_sortby_class : {
    selector :'.sortby-dropdown',
    locateStratergy : 'css selector'
},
pa_sortby_css : { //low to high
    selector :'#pa-enh-sortby-dropdown > option:nth-child(4)',
    locateStratergy : 'css selector'
},
pa_filterby_class : { 
    selector :'.sfa-pa-enh-refine-bar-container',
    locateStratergy : 'css selector'
},
pa_filterby_css : { //filter by PRICE
    selector :'#price',
    locateStratergy : 'css selector'
},
pa_filterbyCheckbox_css : { //UNDER $50
    selector :'#refinement-1535',
    locateStratergy : 'css selector'
},
pa_filterbyApply_css : { 
    selector :'#js-pa-layer-price > div.sfa-pa-enh-refine-overlay > div.sfa-pa-enh-refine-control > a.action-link.sfa-pa-refine-apply-button.sfa-button.transactional',
    locateStratergy : 'css selector'
},
pa_filterbyParameters_css : { 
    selector :'#js-pa-active-refinement > ul > li > a > span',
    locateStratergy : 'css selector'
},
pa_paginationNumber_class : { 
    selector :'.pa-page-number',
    locateStratergy : 'css selector'
},
pa_paginationRightArrow_css : {
    selector :'#pc-top > ol > li.pa-enh-pagination-right-arrow > a',
    locateStratergy : 'css selector'
},
pa_paginationPageSelected_class : { 
    selector :'.page-selected',
    locateStratergy : 'css selector'
},
pa_leftnav_class : { 
    selector :'.sfa-left-nav-content-container',
    locateStratergy : 'css selector'
},
pa_leftnavCategory_css : { //men
    selector :'#refinement-302023689',
    locateStratergy : 'css selector'
},
pa_breadcrumbCategory_css : { //men
    selector :'#bccurrent-302023689',
    locateStratergy : 'css selector'
},
pa_product_css : { //boy henley tee
    selector :'#product-0400088840454',
    locateStratergy : 'css selector'
},
pa_productPrice_class : { 
    selector :'.product-sale-price',
    locateStratergy : 'css selector'
},
pa_quicklook_css : { 
    selector :'#quicklook-0400088840454',
    locateStratergy : 'css selector'
},
pa_quicklookOverlay_class : { 
    selector :'.quicklook-dialog',
    locateStratergy : 'css selector'
},
pa_quicklookSize_class : { 
    selector :'.js-size-selector',
    locateStratergy : 'css selector'
},
pa_quicklookSizeSelector_class : { //first size available 
    selector :'.available',
    locateStratergy : 'css selector'
},
pa_quicklookColor_class : { 
    selector :'.js-color-selector',
    locateStratergy : 'css selector'
},
pa_quicklookColor_class : { 
    selector :'.js-color-selector',
    locateStratergy : 'css selector'
},
pa_addtobag_btn : { 
    selector :'.js-action-button',
    locateStratergy : 'css selector'
},
pa_quicklookPrice_class : { 
    selector :'.sale-price',
    locateStratergy : 'css selector'
},
pa_quicklookThumbnail_css : { 
    selector :'#reskin-mySwatches',
    locateStratergy : 'css selector'
},
pa_quicklookImg_css : { 
    selector :'div > div:nth-child(2) > canvas',
    locateStratergy : 'css selector'
},

/****** Product Details Page  ******************************************************************************************/       
pdp_addtobag_btn: {
    selector : 'div.add-to-bag > div > div > button',
    locateStratergy : 'css selector'
},
pdp_qtySpinboxInc_class: {
    selector : '.spinbox__increment',
    locateStratergy : 'css selector'
},
pdp_qtySpinboxInc_btn: {
    selector : 'div > button.spinbox__increment',
    locateStratergy : 'css selector'
},
pdp_price_class: {
    selector : '.product-pricing',
    locateStratergy : 'css selector'
},
pdp_priceCurrency_css: {
    selector : 'div > div:nth-child(3) > div > dl:nth-child(3) > dd > span:nth-child(1)',
    locateStratergy : 'css selector'
},
/* PDP COLOR */
pdp_color_class : {
    //selector : '.product-color-options',
    selector:'.product-variant-attribute-values',
    locateStratergy : 'css selector'
},
pdp_size_class : {
    selector : '.product-size-options',
    locateStratergy : 'css selector'
},
pdp_color1_css : {
    selector : 'div.product-color-options > ul > li:nth-child(1)',
    locateStratergy : 'css selector'
},
pdp_color2_css : {
    selector : 'div.product-color-options > ul > li:nth-child(2)',
    locateStratergy : 'css selector'
},
pdp_color3_css : {
    selector : 'div.product-color-options > ul > li:nth-child(3)',
    locateStratergy : 'css selector'
},
/* PDP SIZE */
pdp_size1_css :{
    selector: 'div.product-size-options > ul > li:nth-child(1)',
    locateStratergy : 'css selector'
},
pdp_size2_css :{
    selector: 'div.product-size-options > ul > li:nth-child(2)',
    locateStratergy : 'css selector'
},
pdp_size3_css :{
    selector: 'div.product-size-options > ul > li:nth-child(3)',
    locateStratergy : 'css selector'
},
pdp_sizeValue_css :{
    selector: ' div.product-size-options > dl > dd',
    locateStratergy : 'css selector'
},
/* image*/
pdp_image1_css :{
    selector: '#s7SwatchContainer > div > div > div:nth-child(1)',
    locateStratergy : 'css selector'
},
pdp_image2_css :{
    selector: '#s7SwatchContainer > div > div > div:nth-child(2)',
    locateStratergy : 'css selector'
},

/* GIFT CARD*/
pdp_giftcard_denomination_class :{
    selector : '.product-denomination-options',
    locateStratergy : 'css selector'
},
pdp_giftcard_denomination_css :{ //$300 denomination option, $400 has inventory too
    selector : 'div.product-denomination-options > ul > li:nth-child(7)',
    locateStratergy : 'css selector'
},
     
/* ************************************************ GIFT CARD ***********************************************************************************/
giftcard_purchaseOption_class :{
    selector : '.row',
    locateStratergy : 'css selector'
},
giftcard_standardCard_css :{
    selector : 'div.CTA.parent.parbase.section > div > a',
    locateStratergy : 'css selector'
},


/********** MINICART ************************************************************************************/ 
minicart_header_class : {
    selector : '.mini-bag-content__header',
    locateStratergy : 'css selector'
},
minicart_itemDetails_class : {
    selector : '.mini-bag-content__products',
    locateStratergy : 'css selector'
},
minicart_checkout_class:{
    selector : '.mini-bag-content__checkout',
    locateStratergy : 'css selector'
},
minicart_checkout_btn :{
    selector : 'div.mini-bag-content__checkout > a',
    locateStratergy : 'css selector'
}, 
minicart_subtotal_class :{
    selector : '.mini-bag-content__price-amount',
    locateStratergy : 'css selector'
},
minicart_price_class :{
    selector : '.mini-cart-item__sale-price',
    locateStratergy : 'css selector'
},
minicart_priceCurrency_css :{
    selector : 'div > a:nth-child(3) > span.mini-cart-item__sale-price > span:nth-child(1)',
    locateStratergy : 'css selector'
},
minicart_qty_css :{
    selector : 'div > div.mini-bag-content__products > div > div > div > a:nth-child(3)',
    locateStratergy : 'css selector'
},
minicart_image_css :{
    selector : 'div > div.mini-bag-content__products > div > a > img',
    locateStratergy : 'css selector'
},
/******* Shopping bag *******************************************************************************************/               
bag_title_css :{
    selector :'#bag-tab',
    locateStratergy : 'css selector'
},  
bag_promoLineItem_class :{
    selector :'.shopping-bag-item__promo-code-label',
    locateStratergy : 'css selector'
}, 
bag_itemQty_class :{
    selector :'.spinbox--small',
    locateStratergy : 'css selector'
}, 
bag_itemQtyInput_css :{
    selector :'#qty-input-0',
    locateStratergy : 'css selector'
}, 
bag_itemImg_class :{
    selector :'.shopping-bag-item__img',
    locateStratergy : 'css selector'
},
bag_itemPrice_class :{
    selector :'.shopping-bag-item__total-price',
    locateStratergy : 'css selector'
},
bag_items_class :{
    selector :'.shopping-bag__items',
    locateStratergy : 'css selector'
},
bag_checkout_class :{
    selector :'.shopping-bag__btn',
    locateStratergy : 'css selector'
}, 
bag_login_class :{
    selector :'.hbc-login',
    locateStratergy : 'css selector'
},
bag_lineItemVariants_class :{ //size/color 
    selector :'.shopping-bag-item__variants',
    locateStratergy : 'css selector'
},
bag_iconRemove_class :{
    selector :'.shopping-bag-item__icon-remove',
    locateStratergy : 'css selector'
},
bag_emptyMsg_class :{
    selector :'.shopping-bag__no-items--bag',
    locateStratergy : 'css selector'
},
/* login/quickview drawer on bag page*/
bag_emailEntry_css :{
    selector :'#why-we-need-id',
    locateStratergy : 'css selector'
},
bag_passwordEntry_css :{
    selector :'#why-we-need-id-2',
    locateStratergy : 'css selector'
},
bag_loginCheckout_btn :{
    selector :'.hbc-login__checkout-btn',
    locateStratergy : 'css selector'
},
bag_loginGuestCheckout_btn :{
    selector :'.hbc-login__guest-checkout-btn',
    locateStratergy : 'css selector'
},
bag_quicklook_class :{
    selector :'.quicklook__content',
    locateStratergy : 'css selector'
},
bag_quicklookSize_class :{
    selector :'.quicklook__product-size-options',
    locateStratergy : 'css selector'
},
bag_quicklookUpdate_btn :{
    selector :'.quicklook__update-button',
    locateStratergy : 'css selector'
},

/* shoprunner */
bag_shoprunner_class :{
    selector :'.shoprunner-container',
    locateStratergy : 'css selector'
},
bag_shoprunnerSignin_css :{
    selector :'div.srd_msg > span > a:nth-child(3)',
    locateStratergy : 'css selector'
},
bag_shoprunnerOverlay_css :{
    selector :'#sr_modal_inner',
    locateStratergy : 'css selector'
},
bag_shoprunnerLoginForm_css :{
    selector :'#sr_loginForm_box',
    locateStratergy : 'css selector'
},     
bag_shoprunnerEmail_css :{
    selector :'#sr_signin_email',
    locateStratergy : 'css selector'
},
bag_shoprunnerPassword_css :{
    selector :'#sr_signin_password',
    locateStratergy : 'css selector'
}, 
bag_shoprunnerSecureSignin_btn :{
    selector :'#sr_sign_in_button',
    locateStratergy : 'css selector'
},
bag_shoprunnerWelcomeOverlay_css :{
    selector :'#sr_welcome_back',
    locateStratergy : 'css selector'
}, 
bag_shoprunnerWelcomeTitle_css :{
    selector :'#sr_welcome_back_title',
    locateStratergy : 'css selector'
}, 
bag_shoprunnerOverlayX_btn :{
    selector :'#sr_close',
    //selector :'#sr_header_close',
    locateStratergy : 'css selector'
},

/*********** CHECKOUT ************************************************************************************/  
checkout_shippingAddress_class :{
    selector : '.hbc-checkout__address',
    locateStratergy : 'css selector'
},
checkout_paymentInfo_class :{
    selector : '.hbc-checkout__payment-info',
    locateStratergy : 'css selector'
},
checkout_placeOrder_btn :{
    selector : '.hbc-checkout__checkout-btn',
    locateStratergy : 'css selector'
},
checkout_lineItemDesc_class :{
    selector : '.hbc-cart-item__short-desc',
    locateStratergy : 'css selector'
}, 
checkout_addressEdit_class :{ 
    selector : '.hbc-checkout__address-add-edit',
    locateStratergy : 'css selector'
},
checkout_existingAddress_css :{ 
    selector : 'div.hbc-checkout__address-add-edit > div:nth-child(2) > div',
    locateStratergy : 'css selector'
},
checkout_promoLineItem_class :{ 
    selector : '.hbc-cart-item__promo-code-label',
    locateStratergy : 'css selector'
},
checkout_addressFormCont_btn :{ 
    selector : '.address-form__submit-button',
    locateStratergy : 'css selector'
},




/*SHIPPING ADDRESS*/
checkout_fristName_css :{
    selector : '#given-name',
    locateStratergy : 'css selector'
},
checkout_lastName_css :{
    selector : '#family-name',
    locateStratergy : 'css selector'
},
checkout_address1_css :{
    selector : '#address',
    locateStratergy : 'css selector'
},
checkout_city_css :{
    selector : '#address-level2',
    locateStratergy : 'css selector'
},
checkout_zipCode_css :{
    selector : '#postal-code',
    locateStratergy : 'css selector'
},
checkout_phone_css :{
    selector : '#tel',
    locateStratergy : 'css selector'
},
checkout_email_css :{
    selector : '#address-form-email',
    locateStratergy : 'css selector'
},
checkout_state_css :{ //virginia
    selector : 'div.drop-down-menu.address-form__state > div > select > option:nth-child(51)',
    locateStratergy : 'css selector'
},
checkout_stateNew_css :{ //NJ
    selector : 'div.drop-down-menu.address-form__state > div > select > option:nth-child(33)',
    locateStratergy : 'css selector'
},
checkout_stateINTL_css :{ //ONATARIO
    selector : 'div.drop-down-menu.address-form__state > div > select > option:nth-child(10)',
    locateStratergy : 'css selector'
},
checkout_addressCont_btn :{ 
    selector : '.hbc-checkout__shipping-address-save-button',
    locateStratergy : 'css selector'
},
checkout_shippingChange_btn :{ 
    selector : 'div:nth-child(1) > div > h1 > span.hbc-checkout__change-btn',
    locateStratergy : 'css selector'
},
checkout_shippingAddressLine1_css :{ 
    selector : 'div.hbc-checkout__steps > div:nth-child(1) > div > div > div > div > span:nth-child(2)',
    locateStratergy : 'css selector'
},
checkout_shippingAddressLine2_css :{ 
    selector : 'div:nth-child(1) > div > div > div > div > span:nth-child(3)',
    locateStratergy : 'css selector'
},
checkout_addNewShippingAddress_class :{ 
    selector : '.hbc-checkout__address-list--add-address',
    locateStratergy : 'css selector'
},





/*PAYMENT METHOD & BILLING*/
checkout_addPayment_class :{ 
    selector : '.hbc-checkout__add-payment',
    locateStratergy : 'css selector'
},
checkout_ccNumber_css :{ 
    selector : '#ccnumber',
    locateStratergy : 'css selector'
},
checkout_expDate_css :{ 
    selector : '#month',
    locateStratergy : 'css selector'
},
checkout_CVC_css :{ 
    selector : '#cvc',
    locateStratergy : 'css selector'
},
checkout_ccCVC_css :{
    selector : '#credit-card-cvc',
    locateStratergy : 'css selector'
},
checkout_ccName_css :{ 
    selector : '#nameoncard',
    locateStratergy : 'css selector'
},
checkout_paymentFormCont_btn :{ 
    selector : '.hbc-checkout__page-submit-button',
    locateStratergy : 'css selector'
},
checkout_paymentCont_btn :{ 
    selector : 'div.tab-panel.tab-panel--active.tab-panel--radio > div > div.hbc-checkout__btn-wrapper > button',
    locateStratergy : 'css selector'
},
checkout_paymentChange_btn :{ 
    selector : 'div:nth-child(2) > div > h1 > span.hbc-checkout__change-btn',
    locateStratergy : 'css selector'
},
checkout_paymentEdit_class :{ 
    selector : '.hbc-checkout__add-edit',
    locateStratergy : 'css selector'
},
checkout_addNewCC_css :{ 
    selector : ' div.tab-panel.tab-panel--active.tab-panel--radio > div > div.hbc-checkout__add-edit > button',
    locateStratergy : 'css selector'
},
checkout_existingCC_css :{ 
    selector : 'div.hbc-checkout__add-edit > div:nth-child(2)',
    locateStratergy : 'css selector'
},
checkout_billingAddressLine1_css :{ 
    selector : 'div.hbc-checkout__btn-wrapper > button',
    locateStratergy : 'css selector'
},
checkout_billingAddressLine2_css :{ 
    selector : 'div.hbc-checkout__btn-wrapper > button',
    locateStratergy : 'css selector'
},
checkout_addNewBillingAddress_css :{ 
    selector : 'div > form > div.hbc-checkout__address-add-edit > button > span',
    locateStratergy : 'css selector'
},
checkout_addPaymentCont_btn :{ 
    selector : 'div.hbc-checkout__page-btn-wrapper > button.hbc-button.hbc-button--primary.hbc-checkout__page-submit-button',
    locateStratergy : 'css selector'
},

/*SHIPPING METHOD*/
checkout_shippingMethod_class :{
    selector : '.shipping-method__radiogroup',
    locateStratergy : 'css selector'
},
checkout_shippingMethodShoprunner_css :{
    selector : 'div.radiogroup.radiogroup--stacked.shipping-method__radiogroup.shipping-method__radiogroup--shoprunner > fieldset > label > span.radiogroup__radio-label',
    locateStratergy : 'css selector'
},
checkout_shippingMethodChange_btn :{ 
    selector : 'div.radiogroup.radiogroup--stacked.shipping-method__radiogroup > fieldset > label:nth-child(3) > span.radiogroup__radio-button',
    locateStratergy : 'css selector'
},

   
/******************************** Thank You page*****************************************************************************************/ 
thankyou_header_class: {
    selector : '.hbc-checkout-thankyou__wrapper__text-heading',
    locateStratergy : 'css selector'
},
thankyou_details_css: {
    selector : 'div > p.hbc-checkout-thankyou__wrapper__text-details > span',
    locateStratergy : 'css selector'
},
   
 /********** International***************************************/  
intl_shippingpage_class :{
    selector : '.inner-wrapper',
    locateStratergy : 'css selector'
},
intl_shippingTitle_css :{
    selector : '#saksBody > div.intl-shipping-page.gotham-theme > div > h2',
    locateStratergy : 'css selector'
},
intl_contextChooser_css :{
    selector : '#context_chooser',
    locateStratergy : 'css selector'
},
intl_countryDropdownMenu_css :{
    selector : '#INTCOUNTRY',
    locateStratergy : 'css selector'
},
intl_countryDropdownTestItem_css :{
    selector : '#INTCOUNTRY > option:nth-child(34)', //CANADA
    locateStratergy : 'css selector'
},
intl_contextChooser_btn :{
    selector : 'div.form-item.field.footer.clear-both.float-right > input.sfa-button.transactional.large.float-right',
    locateStratergy : 'css selector'
},
intl_welcomemat_css :{
    selector : '#modal',
    locateStratergy : 'css selector'
},
intl_welcomematSubheadline_css :{
    selector : '#subheadline',
    locateStratergy : 'css selector'
},
intl_welcomemat_btn :{
    selector : '#button > button',
    locateStratergy : 'css selector'
},  
  









    }
}