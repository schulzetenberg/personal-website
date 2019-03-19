describe('Header', function() {

  beforeEach(function () {
    cy.visit('http://localhost:4200')
  })

  it('should display all social icons', function() {
    cy.get('header .nav-flex-icons li').should('have.length', 6)
    // TODO: Click each of the links to verify they are all valid
  })

  it('should have a clickable blog link', function() {
    cy.get('header a').contains('Blog').as('blogLink')

    cy.get('@blogLink').should('have.length', 1)
    cy.get('@blogLink').click()
  })
})
