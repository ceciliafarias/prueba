import './home'
import './search'
import './product'
import './checkout'
import './shoppingCartItem'
/// <reference types="cypress" />
declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        insertSearchCriteria(criteria:string): Chainable<Element>
        searchProduct(): Chainable<Element>
        clickCartItem(): Chainable<Element>
        addToCart(): Chainable<Element>
        selectProduct(item:string): Chainable<Element>
        goToCheckout(): Chainable<Element>
        selectGuestCheckout(): Chainable<Element>
        clickButton(which?:string): Chainable<Element>
        insertInformation(which:string, info:string): Chainable<Element>
        insertRegionInfoInBillingDetails(option:string): Chainable<Element>
      }
    }
  }