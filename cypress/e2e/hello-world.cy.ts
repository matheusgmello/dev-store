describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rocketseat.com.br')

    cy.contains('React').click()
  })
})
