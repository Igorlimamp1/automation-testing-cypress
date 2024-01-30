import {faker} from '@faker-js/faker/locale/en'

describe ('CN002', () => {
    it('Novo cadastro', () => {
        const email = `${faker.datatype.uuid()}@gamail.com`

        cy.visit('https://demo.automationtesting.in/Index.html')

        cy.get('#enterimg')
        .click()

        cy.get('input[type="text"][placeholder="First Name"]')
        .type('João')

        cy.get('input[type="text"][placeholder="Last Name"]')
        .type('Silva')

        cy.get('textarea[rows="3"][ng-model="Adress"]')
        .type('Rua Professora Nina Stocco')

        cy.get('input[type="email"]')
        .type(email)

        cy.get('input[type="tel"]')
        .type('11965443322')

        cy.get('input[type="radio"][value="Male"]')
        .check()    



    })
})