

describe("Charges offer", () => {


                  
    before(() =>{

      cy.contains('Service Hub').click({force:true})
      cy.contains('Services').click({force:true})
      cy.url().should('contains', 'https://apims.dghub.io:2301/Service');
      cy.contains("Add Service").click()
      cy.url().should('contains', 'https://apims.dghub.io:2301/Service/AddService');
      

    })



  it("selects the offers", () =>{
      
    //click on href link 
    cy.get('a[href*="#offers"]').click()
    
 cy.get('[name=OfferType').select("Cashback")
    cy.get('#OfferSelected').select("5% Cashback")
    cy.get('[name=OfferAccount]').select("NIBL Cashback Account")
    cy.contains("Preview").click()
           




  })





})