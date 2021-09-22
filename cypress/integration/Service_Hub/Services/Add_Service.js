
     import 'cypress-file-upload';

     
describe("Service Hub Services Scenario", () => {

  it("add new service", () =>{

    cy.contains('Service Hub').click({force:true})
      cy.contains('Services').click({force:true})

                    //Add New Service
                    cy.contains("Add Service").click()
                    cy.get('#DisplayName').type("Mock Service")
                    cy.get('#Category').select("Banking")
                    cy.get('#Description').type("This is for test purpose only")
                    cy.get('#Email').type("testuser@mailinator.com")
                    cy.get('#Phone').type("1234567890000")
        
                          //attach files
                          const yourFixturePath = 'logo.jpg'
                    cy.get('#file').attachFile(yourFixturePath)
                    cy.contains('Save').click()


                    //configurecharges

                    cy.contains("Charges").click({force:true})


    })

                                  

})