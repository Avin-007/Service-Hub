


      describe("Explore Charges Functionalities", () => {


        before(() =>{

          cy.contains('Service Hub').click({force:true})
          cy.get('a[href*="/FeeAndCommission"]').click({force: true})
          cy.url().should('contains', 'https://apims.dghub.io:2301/FeeAndCommission')
         
    
        })


                                        it("Add new Charges", () =>{

                                          cy.get('a[href*="/FeeAndCommission/AddFeeAndCommission"]').click({force: true})
                                          cy.url().should('contain', "https://apims.dghub.io:2301/FeeAndCommission")

                                          cy.get('[name=Name]').type ("    ")
                                          cy.get('[name=Type]').select("Fee")
         
                                          //click radio button
                                          cy.get('[type="checkbox"]').check({force: true})
                                          cy.get('[type="submit"]').click()


                                        })
      })
