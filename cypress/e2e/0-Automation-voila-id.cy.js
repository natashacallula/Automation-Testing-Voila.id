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
