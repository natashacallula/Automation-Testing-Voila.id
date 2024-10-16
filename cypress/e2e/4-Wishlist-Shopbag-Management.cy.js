/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Wishlist and Shopping Bag Management', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/')
        cy.url().should('include', 'voila.id')
      });
  
    it('Add a product from womens category to wishlist.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.addwishlist()
    })
  
    it('Add a product to wishlist and reverts the changes.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.wishlistreverts()
    })
  
    it('Remove a product from the wishlist menu.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.wishlistremoves()
    })
  
    it('Add a product to the shopping bag.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.addproductsbag()
    })
  });