describe("Service Category Module",() =>{


  before(() =>{

    cy.contains('Service Hub').click({force:true})
    cy.contains('Services').click({force:true})
    cy.url().should('contains', 'https://apims.dghub.io:2301/Service')
    cy.get('a[href*="/ServiceCategory"]').click({force: true})
    cy.url().should('contains', "https://apims.dghub.io:2301/ServiceCategory")
   
  })

                      it("add new service category", () =>{

                        cy.get('a[href*="ServiceCategory/AddServiceCategory"]').click()
                        cy.get('#Name').type("      ")
                        cy.get('#Description').type("     ")
                        cy.get('[type=submit]').click()


                      })
})