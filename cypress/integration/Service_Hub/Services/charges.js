


describe("Charge Module",() =>{


    before(() =>{

      cy.contains('Service Hub').click({force:true})
      cy.contains('Services').click({force:true})
      cy.url().should('contains', 'https://apims.dghub.io:2301/Service');
      cy.contains("Add Service").click()
      cy.url().should('contains', 'https://apims.dghub.io:2301/Service/AddService');

    })



                        it("Configure the charges", ()=>{
                          cy.contains("Charges").click({force:true})
                          // cy.get('[name=duallistbox_demo1[]_helper1]').select("Issuer Fee")
                          // cy.contains('Issuer Fee').click({force:true})
                          // cy.get('select multiple').select('3')


                     


                          cy.get('#bootstrap-duallistbox-nonselected-list_duallistbox_demo1[]').then(function($select){
                                                                                  $select.val('Issuer Fee')
                                                                                        })

                        })




})