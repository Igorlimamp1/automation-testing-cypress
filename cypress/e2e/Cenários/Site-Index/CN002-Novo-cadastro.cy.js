/// <reference types="Cypress" />

describe ('CN002', () => {
    it('Novo cadastro', () => {
        cy.visit('https://demo.automationtesting.in/Index.html')

        cy.get('#enterimg')
        .click()

        cy.get('input[type="text"][placeholder="First Name"]')
        .type('João')

        cy.get('input[type="text"][placeholder="Last Name"]')
        .type('Silva')

        cy.get('textarea[rows="3"][ng-model="Adress"]')
        .type('Rua Professora Nina Stocco')

    })
})