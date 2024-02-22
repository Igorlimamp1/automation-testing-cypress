describe('Descrição do describe', () => {
    
    it('CN002 - Adiona-Remove botôes', () => {
            cy.visit('http://the-internet.herokuapp.com/')
            
            cy.get('li > a[href="/add_remove_elements/"]')
            .click()

            cy.get('button[onclick="addElement()"]')
            .click()
            .click()
            .click()

            cy.get('.added-manually')
            .eq(2)
            .should('be.visible')

            cy.get('[onclick="deleteElement()"]')
            .eq(2)
            .click()
            .eq(2)
            .should('not.exist')


    }) 
    
}) 