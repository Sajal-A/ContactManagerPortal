describe('AddContact Component', () => {
    beforeEach(() => {
      // Visit the page where your AddContact component is rendered
      cy.visit('http://localhost:3000/addcontact'); 
    });
    it('should add a contact', () => {
        // Fill out the form
        cy.get('input[name="firstName"]').type('John');
        cy.get('input[name="lastName"]').type('Doe');
        cy.get('input[name="email"]').type('johndoe@example.com');
        cy.get('input[name="contactNo"]').type('1234567890');
        cy.get('input[name="address"]').type('123 Main St');
        cy.get('input[name="organization"]').type('Acme Corp');
    
        // Click the "Add Contact" button
        cy.get('.btn-success').should('contain','Add Contact')
        
    })
    it('should reset the form', () => {

    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.wait(4000)
    cy.get('.btn-danger').click();
    cy.wait(4000)
    cy.get('input[name="firstName"]').should('have.value', '');
    cy.get('input[name="lastName"]').should('have.value', '');

  });
})  