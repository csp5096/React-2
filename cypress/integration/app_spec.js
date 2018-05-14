describe('Home Page Test', function() {
  it('Visits the React App', function() {
    cy.visit('/')
    cy.title().should('include', 'React App')
    cy.contains('My App')
  })
})