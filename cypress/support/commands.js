


import 'cypress-file-upload';


Cypress.Commands.add("Login", (username, password) => { 

  cy.visit ("https://apims.dghub.io:2301/")
  cy.get('[name=UserName]').type("superadmin")
  cy.get('#Password').type("Superadmin@123")
  cy.get("#AccessCode").type('1')
  cy.get('.btn').click()
  
  })
  


  

    before(() => {


  cy.Login("username", "password")
    
  })
  