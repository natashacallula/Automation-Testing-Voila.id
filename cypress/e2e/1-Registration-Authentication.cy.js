/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('User Registration and Authentication', () => {
      beforeEach(() => {
          cy.visit('https://voila.id/')
          cy.url().should('include', 'voila.id')
        });
  
      it('Register account using valid e-mail & password.',() => {
  
        cy.fixture("voila").then(voila => {
          const email = voila.emailregst
          const password = voila.passwordregst
            
          cy.regvoila(email, password)
  
          cy.get('[data-test-id="CT_component_register_submit"]').click();
          cy.contains('or register with').should('be.visible')
        })
      })
  
      it('Register account using valid e-mail & password without uppercase letter.',() => {
  
        cy.fixture("voila").then(voila => {
          const email = voila.emailregst
          const password = voila.uniqepass1
            
          cy.regvoila(email, password)
          cy.contains('Must contain one uppercase letter').should('be.visible')
        })
      })
  
      it('Register account using valid e-mail & password without number.',() => {
  
        cy.fixture("voila").then(voila => {
          const email = voila.emailregst
          const password = voila.uniqepass2
            
          cy.regvoila(email, password)
          cy.contains('Must contain one number').should('be.visible')
        })
      })
  
      it('Register account using valid e-mail & password without lowercase letter.',() => {
  
        cy.fixture("voila").then(voila => {
          const email = voila.emailregst
          const password = voila.uniqepass3
            
          cy.regvoila(email, password)
          cy.contains('Must contain one lowercase letter').should('be.visible')
        })
      })
  
      it('Sign in with registered email and password.',() => {
  
        cy.fixture("voila").then(voila => {
          const email = voila.emailfix
          const password = voila.passwordfix
            
          cy.loginvoila(email, password)
        })
      })
  
      it('Attempt to sign in with registered email and unregistered password.',() => {
  
        cy.fixture("voila").then(voila => {
          const email = voila.emailfix
          const password = voila.passwordfalse
          
          cy.logfalVoila(email, password)
          cy.contains('Your account ID or password is incorrect. Please try again.').should('be.visible')
        })
      })
  
      it('Attempt to sign in with an unregistered email.',() => {
  
        cy.fixture("voila").then(voila => {
          const email = voila.emailun
          cy.logUnVoila(email)
        })
          cy.url().should('include', '/account/register')
      })
  
      it('Attempt to sign in without email and password.',() => {
  
      cy.get('[data-test-id="CT-SignIn-Btn"]').click()
      cy.url().should('include', 'login')
        
      cy.get('[data-test-id="CT_component_login_input"]').click()
      cy.wait(3000)
  
      cy.contains('Sign In').click()
      cy.contains('Please enter email or phone number.').should('be.visible')
    })
  });
  