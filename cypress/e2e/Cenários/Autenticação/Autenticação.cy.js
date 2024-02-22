describe ('Autenticação', () => {

    it('CN001-Autenticação com dados válidos', () => {

        cy.visit('http://the-internet.herokuapp.com/basic_auth', {
            auth: {
              username: 'admin',
              password: 'admin',
            },
        })

    })   

    it.only('CN002-Autenticação com dados inválidos', () => {

        cy.visit('http://the-internet.herokuapp.com/basic_auth' , {
            auth: {
              username: 'admin2',
              password: 'admin',
            },   
            failOnStatusCode: false
        })
    })
})


