/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Page Content Verification', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/')
        cy.url().should('include', 'voila.id')
      });
  
    it('Verify Voila.id “About Us” page content and functionality.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.contains('About voilà.id').click({force: true})
      cy.wait(3000)
      cy.scrollTo('bottom', { duration: 2000 })
      cy.url().should ('include', 'about')
    })
    
    it('Verify content on every Voila.id boutique page.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.contains('Our Boutiques').click({force: true})
  
      cy.contains('voilà.id Pondok Indah, Jakarta').click({force: true})
      cy.wait(2000)
      cy.scrollTo('bottom', { duration: 2000 })
      cy.go('back')
  
      cy.contains('voilà.id Pantai Indah Kapuk, Jakarta').click({force: true})
      cy.wait(2000)
      cy.scrollTo('bottom', { duration: 2000 })
      cy.go('back')
  
      cy.contains('Surabaya').click()
      cy.contains('voilà.id Bukit Darmo Golf, Surabaya').click({force: true})
      cy.wait(2000)
      cy.scrollTo('bottom', { duration: 2000 })
  
      cy.url().should ('include', 'voila-bukit-darmo-golf/')
    })
  
    it('Verify Voila.id “Programs and Partnerships” page content and functionality.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.contains('Programs & Partnerships').click({force: true})
      cy.wait(3000)
      cy.scrollTo('bottom', { duration: 2000 })
      cy.url().should ('include', 'programs-and-partnerships')
    })
  
    it('Verify “Shop by Request” page content and functionality.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.contains('Shop by Request').click({force: true})
      cy.wait(3000)
      cy.scrollTo('bottom', { duration: 2000 })
      cy.url().should ('include', 'shop-by-request')
    })
  
    it('Verify "Blog" page content and functionality.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.contains('Blog').click({force: true})
      cy.wait(3000)
      cy.scrollTo('bottom', { duration: 2000 })
      cy.url().should ('include', 'edit.voila.id')
    })
  
    it('Verify "Promotions" page content and functionality.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.contains('Promotions').click({force: true})
      cy.wait(3000)
      cy.scrollTo('bottom', { duration: 2000 })
      cy.contains('Bank Offers').click({force : true})
      cy.scrollTo('top', { duration: 2000 })
      cy.url().should ('include', 'promotions')
    })
  
    it('Verify “Contact Us” page content and functionality.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.contains('Contact Us').click({ force: true })
      cy.wait(3000)
      cy.scrollTo('bottom', { duration: 2000 })
      cy.url().should ('include', 'contact/')
    })
  
    it('Verify "Terms & Conditions" page content and functionality.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.contains('Terms & Conditions').click({ force: true })
      cy.wait(3000)
      cy.scrollTo('bottom', { duration: 2000 })
      cy.url().should ('include', 'terms-and-conditions')
    })
  
    it('Verify "Privacy Policy" page content and functionality.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.contains('Privacy Policy').click({ force: true })
      cy.wait(3000)
      cy.scrollTo('bottom', { duration: 2000 })
      cy.url().should ('include', 'privacy-policy')
    })
     
    it('Verify redirection to "Tokopedia" official store from Voila.id.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.get('img[alt="tokopedia"]').click({ force: true })
      cy.wait(5000)
    })
  
    it('Verify redirection to "Shopee" official store from Voila.id.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.get('img[alt="shopee"]').click({ force: true })
      cy.wait(5000)
    })
  
    it('Verify redirection to "Blibli" official store from Voila.id.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.get('img[alt="blibli"]').click({ force: true })
      cy.wait(5000)
    })
  
    it('Verify redirection to "Tiktok shop" official store from Voila.id.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.get('img[alt="tiktok"]').click({ force: true })
      cy.wait(5000)
    })
  
    it('Verify redirection to "Zalora" official store from Voila.id.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.get('img[alt="zalora"]').click({ force: true })
      cy.wait(5000)
    })
  
    it('Verify redirection to "Instagram" from Voila.id.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.get('[data-test-id="icon-instagram"]').click({ force: true })
      cy.wait(5000)
    })
  
    it('Verify redirection to "TikTok" from Voila.id.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.get('[data-test-id="icon-tiktok"]').click({ force: true })
      cy.wait(5000)
    })
    
   it('Verify redirection to "YouTube" from Voila.id.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.get('[data-test-id="icon-youtube"]').click({ force: true })
      cy.wait(5000)
    })
  
    it('Verify redirection to "Facebook" from Voila.id.',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.get('[data-test-id="icon-facebook"]').click({ force: true })
      cy.wait(5000)
    })
    
    it('Verify redirection to Voila.id app on "Google Play".', () => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.get('a[href*="play.google.com"]').first().click({ force: true })
      cy.wait(5000)
    })
  
    it('Verify redirection to Voila.id app on "App Store."',() => {
      cy.scrollTo('bottom', { duration: 2000 })
      cy.get('a[href*="apps.apple.com"]').first().click({ force: true })
      cy.wait(5000)
    })
  
  });
  