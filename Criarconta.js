describe( 'Criar conta no site da Terra Flor', () => {
    beforeEach( () => {
      cy.clearLocalStorage()
      cy.viewport( 1280, 720 )
    } )

    it ( 'Should load the page', () => {
        cy.visit( 'https://teste.terra-flor.com/' )
      } )
    

    it ( 'Should click on Entrar', () => {
        cy.get( 'ul' ).contains( 'tf-account' ).click(); {force: true}
        cy.wait( 3000 )
        cy.location( 'pathname' ).should( 'contain', '/minha-conta/' )
    } )
} )