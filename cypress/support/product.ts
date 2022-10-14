Cypress.Commands.add('addToCart', () => {
    return cy.fixture('product').then((product) => {
        cy.get(product.addToCardButton).click()
    })
})