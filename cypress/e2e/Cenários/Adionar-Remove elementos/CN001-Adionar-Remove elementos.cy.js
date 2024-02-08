describe('Adicionar / Remover elementos', () => {
    
    it('CN001 - Adicionar / Remover elementos', () => {
            cy.visit('http://the-internet.herokuapp.com/')
            
            cy.get('li > a[href="/add_remove_elements/"]')
            .click()

            cy.get('button[onclick="addElement()"]')
            .click()
            .should('be.visible')


    }) 
    
})