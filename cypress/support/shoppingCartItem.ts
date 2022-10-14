Cypress.Commands.add('goToCheckout', () => {
    return cy.fixture('shoppingCartItem').then((shopping) => {
        cy.get(shopping.checkoutButton).contains('Checkout').click()
    })
})