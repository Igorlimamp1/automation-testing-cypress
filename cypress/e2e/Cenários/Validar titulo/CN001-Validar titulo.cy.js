describe('CN001', () => {
    it('Valida titulo do site', () => {
        cy.visit('http://the-internet.herokuapp.com/')
        
        cy.title()
        .should('be.equal', 'The Internet')

    })
})