/// <reference types="Cypress" />

describe('CN001', () => {
    it('Valida titulo do site', () => {
        cy.visit('https://demo.automationtesting.in/Index.html')
        
        cy.title()
        .should('be.equal', 'Index')
    })
})