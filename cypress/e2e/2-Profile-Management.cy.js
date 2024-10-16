/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('User Profile Management', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/')
        cy.url().should('include', 'voila.id')
      });
  
    it('Edit the personal information section and reverts the changes.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
        const FirstA = voila.first1
        const FirstB = voila.first2
          
        cy.loginvoila(email, password)
        cy.editprofile(FirstA, FirstB)
      })
    })
  
    it('Add new address by searching the postal code.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
        const Label = voila.label1
        const Name = voila.name
        const Phone = voila.pNumber
        const Postal = voila.postal1
        const Detail = voila.detail1
        const Note = voila.note1
  
        cy.loginvoila(email, password)
        cy.AddbyPostal(Label, Name, Phone, Postal, Detail, Note)
      })
    })
  
    it('Add new address by selecting details.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
        const Label = voila.label2
        const Name = voila.name
        const Phone = voila.pNumber
        const Detail = voila.detail2
        const Note = voila.note2
  
        cy.loginvoila(email, password)
        cy.AddbySelecting(Label, Name, Phone, Detail, Note)
      })
    })
  
    it('Log out account from the website.',() => {
  
      cy.fixture("voila").then(voila => {
        const email = voila.emailfix
        const password = voila.passwordfix
  
        cy.loginvoila(email, password)
      })
        cy.logoutvoila()
    })
});
  