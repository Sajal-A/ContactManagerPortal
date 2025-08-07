
describe('Navbar Component', () => {
    it('should navigate to different pages', () => {
      // Visit the page where your component is used
      cy.visit('http://localhost:3000'); 
      cy.get('a[href="/addcontact"]').click();
      cy.wait(3000)
      cy.url().should('include', '/addcontact');
      cy.get('a[href="/contactlist"]').click();
      cy.wait(3000)
      cy.url().should('include', '/contactlist');
    });
  
  });
  