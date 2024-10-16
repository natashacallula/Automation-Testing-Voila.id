/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Checkout Process', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/')
        cy.url().should('include', 'voila.id')
      });
  
    it('Complete checkout using virtual account payment method.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.coproductallsbag()
    })
  
    it('Checkout without extra protection shipping using bank transfer payment method.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.coproductnoprotectsbag()
    })
  
    it('Attempt to checkout without selecting products.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.conoproductsbag()
    })
  
    it('Attempt to checkout without choosing a payment method.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.conopaymentsbag()
    })
  
    it('Attempt to checkout without selecting a shipping method.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.conoshippingsbag()
    })
  
    it('Attempt to checkout without choosing payment and shipping methods.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.conoshippaysbag()
    })
  });

  