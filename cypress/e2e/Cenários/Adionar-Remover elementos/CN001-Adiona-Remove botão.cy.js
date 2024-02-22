describe('Adiona-Remove botão', () => {
    
    it('CN001 - Adiona-Remove botão', () => {
            cy.visit('http://the-internet.herokuapp.com/')
            
            cy.get('li > a[href="/add_remove_elements/"]')
            .click()

            cy.get('button[onclick="addElement()"]')
            .click()
            .should('be.visible')

            cy.get('.added-manually')
            .click()
            .should('not.exist')


    }) 
    
})