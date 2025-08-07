///<reference types='cypress'/>
describe('template spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/contactlist'); 
      });

      it('should display contact list', () => {
        cy.get('.con').should('be.visible');
      });
      
      it('should delete a contact', () => {
        cy.get('.table tbody tr').first().as('firstContact');
        cy.get('@firstContact').find('button:contains("Delete")').click();
        cy.get('.table tbody tr').should('not.contain', '@firstContact');
      });

      it.skip('pagination button',()=>{
      cy.get('.MuiTablePagination-selectLabel').invoke('text').then((text)=>{
          expect(text).to.eq('Rows per page:')
        })
      cy.get('select[aria-label="rows per page"]').select('10')
      cy.get('button[aria-label="first page"]')
      cy.get('button[aria-label="previous page"]')
        

      // cy.get('button[aria-label="next page"]').click()
      // cy.get('button[aria-label="last page"]').click()
      })

      it.only('Table content',()=>{
        cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1)')
      })
      
  })