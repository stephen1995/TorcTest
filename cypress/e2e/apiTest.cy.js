///cypress

import httpScenarios from '../fixtures/httpScenarios.json'

describe('Rest Api Service', () => {

    beforeEach(() => {
        cy.visit('https://www.football-data.org/')
    })

    httpScenarios.forEach(element => {
        it(`Verify response for ${JSON.stringify(element.url)} is ${JSON.stringify(element.statusCode)}`, () => {
            cy.request({
                method: "GET",
                url: `${element.url}`,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(element.statusCode)
            });
        })
    });

})