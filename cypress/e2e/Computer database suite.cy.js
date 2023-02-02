///cypress
import devicesData from '../fixtures/devices.json'
import { recurse } from 'cypress-recurse'

describe('Computer database test suite', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Search for Commodore 64 and verify update message is display', () => {
    let device = devicesData.computerName
    cy.get('#searchbox').type(device)
    cy.get('#searchsubmit').click()
    cy.get('tr td:nth-child(1)').each(($element) => {

      if ($element.text() == device) {
        cy.get($element).children('a').click()
      }
    })

    cy.get('#discontinued').clear().type('2023-01-01')
    cy.get('input[value="Save this computer"]').click()
    cy.get('.alert-message').should('contain', `${device} has been updated`)

  })

  it('Search for Commodore 64 and verify failure message is display', () => {
    let device = devicesData.computerName
    cy.get('#searchbox').type(device)
    cy.get('#searchsubmit').click()
    cy.get('tr td:nth-child(1)').each(($element) => {

      if ($element.text() == device) {
        cy.get($element).children('a').click()
      }
    })

    cy.get('#introduced').clear().type('2023-01-01')
    cy.get('input[value="Save this computer"]').click()
    cy.get('.error > .input > .help-inline').should('contain', 'Discontinued date is before introduction date')


  })

  it('Filter computer list by "HP" and create a map of the returned data', () => {
    let brand = devicesData.mapBrand
    cy.get('#searchbox').type(brand)
    cy.get('#searchsubmit').click()

    let hashy = new Map()

    cy.get('tr td:nth-child(1)').each(($element) => {
      hashy.set(($element).children('a').text(), $element.next().text())
    }).then(() => {
      for (let [key, value] of hashy) {
        cy.log(`Computer name: ${key} = Introduced ${value}`)
      }
    })


  })

  it('Filter computer list by "IBM" and return list of computer names of the last page', () => {

    let brand = devicesData.listBrand
    cy.get('#searchbox').type(brand)
    cy.get('#searchsubmit').click()


    cy.get('li.current > a').invoke('text').then(($element) => {

      //We are getting the numbers in results
      let numbers = $element.match(/\d+/g)

      //We get the last element and divide it / 10 so we know how many times we have to click on Next()
      let howManyClicks = ~~(numbers[2] / 10)

      let k = 0
      recurse(
        () => cy.contains('Next'),
        ($button) => (k === howManyClicks),
        {
          log: false,
          delay: 500,
          limit: 10,
          timeout: 20000,
          post() {
            cy.contains('Next').click()
            k += 1
          },
        },
      )
    })

    cy.get('tr td:nth-child(1)').each(($element) => {

      cy.log($element.text())
    })


  })

  it('Add new computer', () => {

    cy.get('#add').click()
    let brand = devicesData.newBrand

    cy.get('#name').type('New Computer')

    cy.get('#company').select(brand)
    cy.get('input[value="Create this computer"]').click()
    cy.get('.alert-message').should('contain', "New Computer has been created")



  })

})
