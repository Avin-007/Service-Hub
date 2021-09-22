describe("Application Dll Module",() =>{


  before(() =>{

    cy.contains('Service Hub').click({force:true})
    cy.contains('Services').click({force:true})
    cy.url().should('contains', 'https://apims.dghub.io:2301/Service')
    cy.get('a[href*="/ApplicationDll"]').click({force: true})
    cy.url().should('contains', "https://apims.dghub.io:2301/ApplicationDll")
   
  })

                    it("Add new Application Dll", () =>{

                      cy.get('a[href*="/ApplicationDll/AddApplicationDll"]').click({force: true})
                      cy.get('#DllName').type('   ')
                            cy.get('#description').type("    ")
                            cy.get('#DllNameSpace').type("    ")
                            cy.get('#DllClass').type("    ")
                            cy.get('#DllMain').type("    ")
                            cy.get('#DllValidate').type("   ")
cy.wait(15000)


                                       //choose file  Manual upload ; cypress doesnot support dll file format .
//                                 cy.get('#DllFile')



//                                 //configure json
                                // cy.get('#ConfigurationJson').type("")

                                cy.get('[type="submit"]').click()


                     


                    })
})