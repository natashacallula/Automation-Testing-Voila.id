// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('regvoila', (email, password)=>{
    
    cy.get('[data-test-id="CT-Register-Btn"]').click()
    cy.url().should('include', 'register')

    cy.get('[data-test-id="CT_component_identifier_input"]').type(email)
    cy.get('[data-test-id="CT_component_password_input"]').type(password)
    cy.get('[data-test-id="CT_Component_Icon_eyeClose"]').click()

    cy.get('[data-test-id="CT_component_checkbox_subscribe"]').click()

})

Cypress.Commands.add('loginvoila', (email, password) => {
    cy.clearCookies()
    cy.clearAllLocalStorage()

    cy.get('[data-test-id="CT-SignIn-Btn"]').click()
    cy.url().should('include', 'login')
      
    cy.get('[data-test-id="CT_component_login_input"]').type(email)
    cy.get('[data-test-id="CT_component_password_input"]').type(password)
    cy.get('[data-test-id="CT_Component_Icon_eyeClose"]').click()
      
    cy.get('[data-test-id="CT_component_login_submit"]').click();
    cy.wait(5000)

    cy.url().should('include', 'voila.id')
})

Cypress.Commands.add('logfalVoila', (email, password) => {
    cy.clearCookies()
    cy.clearAllLocalStorage()

    cy.get('[data-test-id="CT-SignIn-Btn"]').click()
    cy.url().should('include', 'login')
      
    cy.get('[data-test-id="CT_component_login_input"]').type(email)
    cy.get('[data-test-id="CT_component_password_input"]').type(password)
    cy.get('[data-test-id="CT_Component_Icon_eyeClose"]').click()
      
    cy.get('[data-test-id="CT_component_login_submit"]').click();
})

Cypress.Commands.add('logUnVoila', (email) => {
    cy.clearCookies()
    cy.clearAllLocalStorage()
    
    cy.get('[data-test-id="CT-SignIn-Btn"]').click()
    cy.url().should('include', 'login')
      
    cy.get('[data-test-id="CT_component_login_input"]').type(email)
    cy.get('[data-test-id="CT_component_login_submit"]').click();
})

Cypress.Commands.add('logoutvoila', () => {
    
    cy.get('[data-test-id="CT_Component_ProfileMenu"]').click()
    cy.get('[data-test-id="CT_account_navigation-item_Sign Out"]').click()
    cy.get('[data-test-id="CT_SignOut_Confirm"]').click()

    cy.wait(5000)
    cy.url().should('include', 'voila.id')
})


Cypress.Commands.add('editprofile', (FirstA, FirstB) =>{
    
    cy.get('[data-test-id="CT_Component_ProfileMenu"]').click()
    cy.get('[data-test-id="CT_Component_ProfileEdit_Button"]')
    .first()
    .click();    
      
    cy.get('[data-test-id="CT_component_firstName_input"]')
    .clear()
    .type(FirstA)
    cy.get('[data-test-id="CT_component_onboarding_submit"]').click()
      
    cy.get('[data-test-id="CT_Component_ProfileEdit_Button"]')
    .first()
    .click();    
      
    cy.get('[data-test-id="CT_component_firstName_input"]')
    .clear()
    .type(FirstB)
    cy.get('[data-test-id="CT_component_onboarding_submit"]').click()

    cy.contains('Personal info changes has been saved.').should('be.visible')
})

Cypress.Commands.add('AddbyPostal', (Label, Name, Phone, Postal, Detail, Note) =>{
    
    cy.get('[data-test-id="CT_Component_ProfileMenu"]').click()
    cy.get('[data-test-id="CT_account_navigation-item_My Address"]').click()
    cy.get('[data-test-id="CT_Component_btnAddAddress"]').click()


    cy.get('[data-test-id="CT_Component_AddressLabel"]').type(Label)
    cy.get('[name="name"]').type(Name)
    cy.get('[data-test-id="CT_Component_AddressPhone"]').type(Phone)
    
    cy.get('[name="selected_area"]').click()
    cy.get('[data-test-id="CT_Component_SearchAddress"]').type(Postal)
    cy.get('[data-test-id="CT_Component_SearchAddressRegion_ListItem12430"]').click() 

    cy.get('[data-test-id="CT_component_textarea-controller_default"]').type(Detail)
    cy.get('[name="note"]').type(Note)

    cy.get('[data-test-id="CT_Component_SubmitAddress"]').click()

    cy.contains('New address has been saved.').should('be.visible')
})

Cypress.Commands.add('AddbySelecting', (Label, Name, Phone, Detail, Note) =>{
    
    cy.get('[data-test-id="CT_Component_ProfileMenu"]').click()
    cy.get('[data-test-id="CT_account_navigation-item_My Address"]').click()
    cy.get('[data-test-id="CT_Component_btnAddAddress"]').click()


    cy.get('[data-test-id="CT_Component_AddressLabel"]').type(Label)
    cy.get('[name="name"]').type(Name)
    cy.get('[data-test-id="CT_Component_AddressPhone"]').type(Phone)
    
    cy.get('[name="selected_area"]').click()
    cy.contains('DKI Jakarta').click()
    cy.contains('Jakarta Barat').click()
    cy.contains('Cengkareng').click()
    cy.contains("11750").click()

    cy.get('[data-test-id="CT_component_textarea-controller_default"]').type(Detail)
    cy.get('[name="note"]').type(Note)

    cy.get('[data-test-id="CT_Component_SubmitAddress"]').click()

    cy.contains('New address has been saved.').should('be.visible')   
})

Cypress.Commands.add('navigatescategory', () =>{
    
    cy.get('[data-test-id="CT_first_tier_link_Women"]').click()
    cy.url().should('include', 'women')
    cy.wait(5000)

    cy.get('[data-test-id="CT_first_tier_link_Men"]').click()
    cy.url().should('include', 'men')
    cy.wait(5000)

    cy.get('[data-test-id="CT_first_tier_link_Kids"]').click()
    cy.url().should('include', 'kids')
    cy.wait(5000)

    cy.get('[data-test-id="CT_first_tier_link_Brands"]').click()
    cy.url().should('include', 'brands')
})

Cypress.Commands.add('detailproduct', () =>{
    cy.get('[data-test-id="CT_first_tier_link_Women"]').click()
    cy.get('[data-test-id="CT_home_navbar_second-tier-button-9"]').click()
    cy.wait(5000)

    cy.get('.ellipsis-two-lines').first().click({ force: true })

    cy.wait(3000)
    cy.contains('Read More').scrollIntoView()
    cy.contains('Read More').click()
    cy.contains('Show Less').should('be.visible')
})

Cypress.Commands.add('sortingproducts', () =>{
    
    cy.get('[data-test-id="CT_first_tier_link_Men"]').click()
    cy.wait(3000)
    cy.get('[data-test-id="CT_home_navbar_second-tier-button-22"]').click()
    cy.wait(3000)

    cy.get('[data-test-id="sort-dropdown"]').click()
    cy.get('[role="option"]').contains('Newest').click({ force: true })
    cy.wait(5000)
    cy.url().should ('include', 'newest_first&page=1')
    cy.contains('Reset').click()

    cy.get('[data-test-id="sort-dropdown"]').click()
    cy.get('[role="option"]').contains('Highest Price').click({ force: true })
    cy.wait(5000)
    cy.url().should ('include', 'highest_price&page=1')
    cy.contains('Reset').click()

    cy.get('[data-test-id="sort-dropdown"]').click()
    cy.get('[role="option"]').contains('Lowest Price').click({ force: true })
    cy.wait(5000)
    cy.url().should ('include', 'lowest_price&page=1')
    cy.contains('Reset').click()

    cy.get('[data-test-id="sort-dropdown"]').click()
    cy.get('[role="option"]').contains('Highest Discount').click({ force: true })
    cy.url().should ('include', 'highest_discount&page=1')
})

Cypress.Commands.add('filterproducts', () =>{
    cy.get('[data-test-id="CT_first_tier_link_Kids"]').click()
    cy.get('[data-test-id="CT_home_navbar_second-tier-button-32"]').click()
    cy.wait(5000)

    cy.contains('Reset').scrollIntoView()

    cy.get('.glci2q5.glci2q7').first().click()
    cy.wait(2000)
    cy.contains('White').click()
    cy.wait(2000)

    cy.url().should ('include', 'color=white&page=1')
})

Cypress.Commands.add('brandpagesearch', () =>{
    cy.get('[data-test-id="CT_first_tier_link_Brands"]').click()
    cy.get('[data-test-id="CT-Search-Input-Brands"]').click()
    cy.get('[data-test-id="CT-Search-Input-Brands"]').type('Nike')

    cy.get('._15kd2we5s._1ccbe2wb.ellipsis-one-line._10d0y1q3').first().click()

    cy.url().should ('include', 'nike-190?page=1')
})

Cypress.Commands.add('brandalphabeticalfilter', () =>{
    cy.get('[data-test-id="CT_first_tier_link_Brands"]').click()
    cy.get('[data-test-id="CT-Search-Input-Brands"]').click()
    cy.get('#quick-filter-char-L').click()
    cy.contains("Louis Vuitton").click()
    cy.wait(7000)
    cy.url().should ('include', 'louis-vuitton')
      
})

Cypress.Commands.add('brandlist', () =>{
    cy.get('[data-test-id="CT_first_tier_link_Brands"]').click()
    cy.get('[data-test-id="CT-Search-Input-Brands"]').click()
    cy.contains('Kate').scrollIntoView()
    cy.contains('Kate Spade').click()
    cy.wait(5000)
    cy.url().should ('include', 'kate-spade')
})

Cypress.Commands.add('productsearch', () =>{
    cy.get('[data-test-id="CT-Search"]').click()
    cy.get('[data-test-id="CT-Search-Input"]').type("Sling bag{enter}")
    cy.wait(5000)
    cy.url().should ('include', 'Sling+bag')
})

Cypress.Commands.add('brandsearch', () =>{
    cy.get('[data-test-id="CT-Search"]').click()
    cy.get('[data-test-id="CT-Search-Input"]').type("Hermes{enter}")
    cy.wait(5000)
    cy.get('._15kd2we1f4._17zx15tm8._17zx15tsg._17zx15tdc._1ccbe2wd._1qj2h3a1').click()

    cy.wait(5000)
    cy.url().should ('include', 'hermes')
})

Cypress.Commands.add('addwishlist', () =>{
    cy.get('[data-test-id="CT_first_tier_link_Women"]').click()
    cy.get('[data-test-id="CT_home_navbar_second-tier-button-14"]').click()
    cy.wait(5000)

    cy.get('.ellipsis-two-lines').eq(1).click({ force: true })
    cy.wait(3000)
  
    cy.contains('Wishlist').click()
    cy.contains('Product has been added to your wishlist.').should('be.visible')
})

Cypress.Commands.add('wishlistreverts', () =>{
    cy.get('[data-test-id="CT_first_tier_link_Men"]').click()
    cy.get('[data-test-id="CT_home_navbar_second-tier-button-21"]').click()
    cy.wait(5000)

    cy.get('.ellipsis-two-lines').eq(1).click({ force: true })
    cy.wait(3000)
  
    cy.contains('Wishlist').click()
    cy.contains('Product has been added to your wishlist.').should('be.visible')
    cy.wait(2000)

    cy.contains('Added to wishlist').click()
    cy.contains('Product has been removed from your wishlist.').should('be.visible')
})

Cypress.Commands.add('wishlistremoves', () =>{
    cy.get('[data-test-id="CT-wishlist-menu"]').click()
    cy.wait(2000)
    cy.get('[data-test-id="CT-Wishlist-Edit"]').click()

    cy.get('[data-test-id="base"]').eq(1).click({ force: true })
    cy.get('[data-test-id="CT-Wishlist-Remove"]').click()
    cy.get('[data-test-id="CT_Component_ConfirmContent_Ok"]').click()

    cy.contains('1 product has been removed from your wishlist.').should('be.visible')
})

Cypress.Commands.add('addproductsbag', () =>{
    cy.get('.ellipsis-two-lines').eq(5).click({ force: true })
    cy.wait(3000)
    cy.get('[data-test-id="CT-add-to-bag-desktop"]').click()
    cy.contains('Shopping Bag').should('be.visible')
})

Cypress.Commands.add('coproductallsbag', () =>{
    cy.get('[data-test-id="CT-Go-To-Cart"]').click()
    cy.wait(5000)
    cy.get('[data-test-id="CT_Component_checkboxSelectAll"]').click()
    cy.wait(5000)
    cy.get('[data-test-id="base"]').eq(1).click({ force: true })
    cy.wait(5000)
    cy.get('[data-test-id="CT_Component_btnCheckout"]').click()

    cy.get('[data-test-id="CT_Notes_Checkout"]')
    .type("Please contact me first if the product is not available.")
    cy.wait(5000)
    
    cy.get('[data-test-id="CT_Component_ShippingSelector_ButtonShipping"]').click()
    cy.contains('JNE YES').click()
    cy.contains('Confirm').click()
    cy.wait(5000)

    cy.get('[data-test-id="CT_Component_SelectorPayment_ButtonPayment"]').eq(1).click()
    cy.contains('Virtual Account').click()
    cy.contains('BCA Virtual Account').click()
    cy.contains('Confirm Payment Method').click()
    cy.wait(2000)

    cy.contains('Place Order').should('be.visible')
})

Cypress.Commands.add('coproductnoprotectsbag', () =>{
    cy.get('[data-test-id="CT-Go-To-Cart"]').click()
    cy.get('[data-test-id="CT_Component_checkboxSelectAll"]').click()
    cy.wait(5000)
    cy.get('[data-test-id="base"]').eq(1).click({ force: true })
    cy.wait(5000)
    cy.get('[data-test-id="CT_Component_btnCheckout"]').click()

    cy.get('[data-test-id="CT_Notes_Checkout"]')
    .type("Please contact me first if the product is not available.")

    cy.get('[data-test-id="CT_Component_ShippingSelector_ButtonShipping"]').click()
    cy.contains('JNE YES').click()
    cy.contains('Confirm').click()
    cy.wait(2000)
    cy.get('[data-test-id="CT_Component_Insurance_CheckboxInsurance"]').click()
    cy.get('[data-test-id="CT_Component_ConfirmContent_Cancel"]').click()

    cy.get('[data-test-id="CT_Component_SelectorPayment_ButtonPayment"]').eq(1).click()
    cy.contains('Bank Transfer').click()
    cy.contains('BCA Bank Transfer').click()
    cy.contains('Confirm Payment Method').click()
    cy.wait(2000)

    cy.contains('Place Order').should('be.visible')
})

Cypress.Commands.add('conoproductsbag', () =>{
    cy.get('[data-test-id="CT-Go-To-Cart"]').click()
    cy.wait(5000)
    cy.get('[data-test-id="CT_Component_checkboxSelectAll"]').click()
    cy.wait(7000)
    cy.get('[data-test-id="CT_Component_checkboxSelectAll"]').click()
    cy.get('[data-test-id="CT_Component_btnCheckout"]').click()

    cy.contains('Select product to checkout.').should('be.visible')
})

Cypress.Commands.add('conopaymentsbag', () =>{
    cy.get('[data-test-id="CT-Go-To-Cart"]').click()
    cy.get('[data-test-id="CT_Component_checkboxSelectAll"]').click()
    cy.wait(5000)
    cy.get('[data-test-id="base"]').eq(1).click({ force: true })
    cy.wait(5000)
    cy.get('[data-test-id="CT_Component_btnCheckout"]').click()

    cy.get('[data-test-id="CT_Notes_Checkout"]')
    .type("Please contact me first if the product is not available.")

    cy.get('[data-test-id="CT_Component_ShippingSelector_ButtonShipping"]').click()
    cy.contains('JNE YES').click()
    cy.contains('Confirm').click()
    cy.wait(2000)

    cy.get('[data-test-id="CT_Component_btnPlaceOrder"]').click()
    cy.contains('Select payment method to place order.').should('be.visible')
})

Cypress.Commands.add('conoshippingsbag', () =>{
    cy.get('[data-test-id="CT-Go-To-Cart"]').click()
    cy.get('[data-test-id="CT_Component_checkboxSelectAll"]').click()
    cy.wait(5000)
    cy.get('[data-test-id="base"]').eq(1).click({ force: true })
    cy.wait(5000)
    cy.get('[data-test-id="CT_Component_btnCheckout"]').click()

    cy.get('[data-test-id="CT_Notes_Checkout"]')
    .type("Please contact me first if the product is not available.")

    cy.get('[data-test-id="CT_Component_SelectorPayment_ButtonPayment"]').eq(1).click()
    cy.contains('Virtual Account').click()
    cy.contains('BCA Virtual Account').click()
    cy.contains('Confirm Payment Method').click()
    cy.wait(2000)

    cy.get('[data-test-id="CT_Component_btnPlaceOrder"]').click()
    cy.contains('Select shipping service to place order.').should('be.visible')
})

Cypress.Commands.add('conoshippaysbag', () =>{
    cy.get('[data-test-id="CT-Go-To-Cart"]').click()
    cy.get('[data-test-id="CT_Component_checkboxSelectAll"]').click()
    cy.wait(5000)
    cy.get('[data-test-id="base"]').eq(1).click({ force: true })
    cy.wait(5000)
    cy.get('[data-test-id="CT_Component_btnCheckout"]').click()

    cy.get('[data-test-id="CT_Notes_Checkout"]')
    .type("Please contact me first if the product is not available.")

    cy.get('[data-test-id="CT_Component_btnPlaceOrder"]').click()
    cy.contains('Select shipping service and payment method to place order.').should('be.visible')
})





