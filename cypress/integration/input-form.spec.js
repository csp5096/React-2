describe('Input form', function() {
  beforeEach(() => {
    cy.visit('/')
  })
  it('focuses input on load', function() {
    cy.focus()
      .should('have.class', 'todo-input')
  })

  it.only('accepts input', () => {
    const todoText = 'Get better at testing'
    cy.get('.todo-input')
      .type(todoText)
      .should('have.value', todoText)
  })

  context('Form submission', () => {
    it.only('Adds a new todo on submit', () => {
      const itemText = 'Get better at testing 2'
      cy.get('.todo-input')
        .type(itemText)
        .type('{enter}')
    })
  })
})