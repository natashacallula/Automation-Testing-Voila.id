/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Product Navigation and Interaction', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/')
        cy.url().should('include', 'voila.id')
      });
  
    it('Navigate through each category product page on Voila.id.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.navigatescategory()
    })
  
    it('Open the first available product on Womens page in Voila.id',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.detailproduct()
    })
    
    it('Sorting functionality on Voila.id Men Shoes Page',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.sortingproducts()
    })
  
    it('Filter products by stock availability and color category.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.filterproducts()
    })
  
    it('Open brand details using the search bar on the brand page.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.brandpagesearch()
    })
  
    it('Open brand details using alphabetical filter on the brand page.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.brandalphabeticalfilter()
    })
  
    it('Opens brand details by clicking a button from the brand list.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.brandlist()
    })
  
    it('Search and open product list using the search bar.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.productsearch()
    })
  
    it('Search and open brand list using the search bar',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.brandsearch()
    })
  });