describe('Basic Test',
  () => {

    it('passes', () => {
      cy.visit('localhost:4200/book-entry')

      cy.get('[data-cy=title-input]')
        .type('This is a new book')

      cy.get('[data-cy=author-input]')
        .type('This is a the Author')

      cy.get('[data-cy=isbn-input]')
        .type('000-1234-000')

      cy.get('[data-cy=pages-input]')
        .type('123')

      cy.get('[data-cy=price-input]')
        .type('9.99')
    })
  })
