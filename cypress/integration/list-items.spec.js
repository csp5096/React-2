describe('Delete Items', () => {
  context('Item Deletion', () => {
    it.only('Deletes todo items', () => {
      cy.get('.todo-text')
        .first()
        .find('.todo-delete')
        .click()
        .should('have.length', 0)
    })
  })
});