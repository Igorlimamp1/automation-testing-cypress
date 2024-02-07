describe('Teste A/B', () => {

      it('CN001 - Teste A/B - ', () => {
            cy.visit('http://the-internet.herokuapp.com/')
            
        cy.get('li > a[href="/abtest"]')
        .click()

        cy.get('h3')
        .invoke('text')
        .then(texto => {
          if (texto === 'A/B Test Control' || texto === 'A/B Test Variation 1') {
                // O texto corresponde a um dos valores esperados
              expect(texto).to.be.oneOf(['A/B Test Control', 'A/B Test Variation 1']);
              } else {
                // Caso o texto não seja um dos valores esperados
                throw new Error(`Texto inesperado: ${texto}`);
              }
    })
  })
})