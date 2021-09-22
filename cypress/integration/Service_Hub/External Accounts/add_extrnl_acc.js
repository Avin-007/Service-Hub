



      describe("External account functionalities", () => {


        before(() =>{

          cy.contains('Service Hub').click({force:true})
          cy.get('a[href*="/ExternalAccounts"]').click({force: true})
          cy.url().should('contains', 'https://apims.dghub.io:2301/ExternalAccounts');
          // cy.contains("Add Service").click()
          // cy.url().should('contains', 'https://apims.dghub.io:2301/Service/AddService');
    
        })


                            it("Add New Account",() =>{

                                  // cy.get('a[href*=/ExternalAccounts/Manage]').click()
                                  cy.contains("Add Account").click()
                                  cy.get('#AccountName').type("   ")
                                  cy.get('#AccountNumber').type('   ')
                                  cy.get('#AccountNature').select("   ")
                                  cy.get('#SolId').type("    ")
                                  cy.get('#MapId').type('   ')
                                  cy.get('[type="checkbox"]').check({force: true})
                                  cy.get('[type="submit"]').click()


                            } )


      })