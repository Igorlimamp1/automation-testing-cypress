/// <reference types="Cypress" />

describe('CN001', () => {
    beforeEach(() => {
        cy.visit('https://notes-serverless-app.com/')
    })

    it('Valida titulo da página', () => {
        cy.title().should('be.equal', 'Scratch - A simple note taking app')
       })

})