import { faker } from "@faker-js/faker";


describe('Buy Products', () => {
  before(() => {
    cy.visit('http://opencart.abstracta.us/index.php')
  })

  it('Select first product', () => {
    cy.insertSearchCriteria('MacBook')
    cy.searchProduct()
    cy.selectProduct('MacBook')
    cy.fixture('product').then((product) => {
      cy.get(product.productText).should('have.text', 'MacBook')
    })
    cy.addToCart()
    cy.fixture('product').then((product) => {
      cy.get(product.successAlert).should('have.text', 'Success: You have added MacBook to your shopping cart!×')
    })
  })

  it('Select second product', () => {
    cy.insertSearchCriteria('iMac')
    cy.searchProduct()
    cy.selectProduct('iMac')
    cy.fixture('product').then((product) => {
      cy.get(product.productText).should('have.text', 'iMac')
    })
    cy.addToCart()
    cy.fixture('product').then((product) => {
      cy.get(product.successAlert).should('have.text', 'Success: You have added iMac to your shopping cart!×')
    })
  })

  it('Produt checkout from cart button', () => {
    cy.clickCartItem()
    cy.goToCheckout()
    cy.visit('http://opencart.abstracta.us/index.php?route=checkout/checkout')
  })

  it('Product checkout', () => {
    cy.selectGuestCheckout()
    cy.clickButton('guest')
    cy.insertInformation('first', faker.name.firstName())
    cy.insertInformation('last', faker.name.lastName())
    cy.insertInformation('email', faker.internet.email())
    cy.insertInformation('cell', faker.phone.phoneNumber())
    cy.insertInformation('address', faker.address.city())
    cy.insertInformation('city', faker.address.city())
    cy.insertInformation('code', faker.address.zipCode())
    cy.insertRegionInfoInBillingDetails(faker.datatype.number({min:3513, max:3612}).toString())
    cy.clickButton('billing')
    cy.insertInformation('area', faker.lorem.paragraph())
    cy.clickButton('shipping')
    cy.clickButton('agree')
    cy.clickButton('payment')
    cy.clickButton()
    cy.fixture('checkout').then((checkout) => {
      cy.get(checkout.confirmText).should('have.text', 'Your order has been placed!')
    })
  })
})