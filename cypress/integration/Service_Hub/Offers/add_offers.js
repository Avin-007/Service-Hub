


      describe("explore offers functionalities", () => {


        before(() =>{

          cy.contains('Service Hub').click({force:true})

                            //click on offers(nav bar)
          cy.get('a[href*="/CashBackAndDiscount"]').click({force: true})
          cy.url().should('contains', 'https://apims.dghub.io:2301/CashBackAndDiscount')
         
    
        })

                              it("add new offer", () => {

                                //click by href 
                                // cy.get('a[href*="/CashBackAndDiscountAddCashBackAndDiscount"]').click({force: true})
                                cy.contains("Add Offer").click({force:true})
                                cy.url().should('contains', 'https://apims.dghub.io:2301/CashBackAndDiscount/AddCashBackAndDiscount')
                          
                                     //click by class name
                                 cy.get('[name=Name]').type ("    ")
                                 cy.get('[name=Type]').select("Discount")

                                 //click radio button
                                 cy.get('[type="checkbox"]').check({force: true})
                                 cy.get('[type="submit"]').click()



                              })

      })