Cypress.Commands.add('insertSearchCriteria', (criteria:string) => {
    return cy.fixture('home').then((home) => {
        cy.get(home.searchInputText).clear().type(criteria)
    })
})

Cypress.Commands.add('searchProduct', () => {
    return cy.fixture('home').then((home) => {
        cy.get(home.searchButton).click()
    })
})

Cypress.Commands.add('clickCartItem', () => {
    return cy.fixture('home').then((home) => {
        cy.get(home.carItem).click()
    })    
})