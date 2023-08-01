///cypress
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
import data from '../fixtures/data.json'

describe('Search', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  data.forEach(element => {
    it(`Verify first result for ${JSON.stringify(element.search)} is ${JSON.stringify(element.expectedResult)}`, () => {

      cy.get('#searchbox_input').type(`${element.search}`)
      cy.get('button[type=submit]').click()
      cy.get(':nth-child(1) > [data-testid="result"] > div:nth-child(2) > h2 > a').click()

      cy.url().should('eq', `${element.expectedResult}`)
    })
  });

})
