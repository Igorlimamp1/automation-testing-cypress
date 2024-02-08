describe('Teste A/B', () => {

      it('CN001 - Teste A/B - ', () => {
            cy.visit('http://the-internet.herokuapp.com/')
            
        cy.get('li > a[href="/abtest"]')
        .click()

        cy.get('h3')
        .invoke('text')
        .then(texto => {
          if (texto === 'A/B Test Control1' || texto === 'A/B Test Variation 1') {
              expect(texto).to.be.oneOf(['A/B Test Control1', 'A/B Test Variation 1']);
              } 
    })
  })
})