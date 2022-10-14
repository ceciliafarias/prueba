Cypress.Commands.add('selectProduct', (item:string) => {
    return cy.fixture('search').then((search) => {
        let product = search.productImage
        cy.get(product.replace('Product', item)).click()
    })
})