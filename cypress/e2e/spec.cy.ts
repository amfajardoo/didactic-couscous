describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('h1').contains('didactic-couscous');
  })
})
