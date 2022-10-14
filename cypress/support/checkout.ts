Cypress.Commands.add('selectGuestCheckout', () => {
    return cy.fixture('checkout').then((checkout) => {
        cy.get(checkout.checkoutRadioButton).click()
    })
})

Cypress.Commands.add('clickButton', (which:string) => {
    return cy.fixture('checkout').then((checkout) => {
        let button
        switch (which) {
            case 'guest':
                button = checkout.continueButton
                break;
            case 'billing':
                button = checkout.billinContinueButton
                break;       
            case 'shipping':
                button = checkout.shippingContinueButton
                break;
            case 'agree':
                button = checkout.agreeCheckbox
                break;
            case 'payment':
                button = checkout.paymentContinueButton
                break;
            default:
                button = checkout.confirmButton
                break;
        }
        cy.get(button).click()
    })
})

Cypress.Commands.add('insertInformation', (which:string, info:string) => {
    return cy.fixture('checkout').then((checkout) => {
        let field;

        switch(which) { 
            case 'first': 
                field = checkout.firstNameInput
               break; 
            case 'last': 
                field = checkout.lastNameInput
               break; 
            case 'email': 
                field = checkout.emailInput
               break; 
            case 'cell': 
                field = checkout.cellPhoneInput
               break; 
            case 'address': 
                field = checkout.addressInput
               break; 
            case 'city': 
                field = checkout.cityInput
               break; 
            case 'code': 
                field = checkout.postCodeInput
               break; 
            case 'area': 
                field = checkout.addCommentTextArea 
                break; 
            default: 
                field = checkout.addCommentTextArea 
               break; 
        } 
        
        cy.get(field).clear().type(info)
    })
})

Cypress.Commands.add('insertRegionInfoInBillingDetails', (option:string) => {
    return cy.fixture('checkout').then((checkout) => {        
        cy.get(checkout.regionInput).select(option)
    })
})