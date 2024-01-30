/// <reference types="Cypress" />

describe('Realiza login', () => {
    beforeEach (() =>{
        cy.visit('https://notes-serverless-app.com/')

    })

    it('Realiza Login', () => {
        cy.get('.href="Login"')
        .click()

        cy.get('#email')
        .type('caio04598@gmail.com')

        cy.get('#password')
        .type('Leroy@123')

        cy.get('button disabled[type="submit"]')
        .click()
    })
})




