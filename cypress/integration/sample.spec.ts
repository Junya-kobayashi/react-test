// 
describe('カウントアプリのテスト', function() {
    beforeEach(() => {
        cy.visit('/')
    });

    it('カウントが1になる', () => {
        //+をクリック
        cy.get('[data-testid="increment-button"]').click().get('[data-testid="count-number"]').should('have.text','1');
        cy.get('[data-testid="increment-button"]').click().get('[data-testid="count-number"]').should('have.text','2');
        cy.get('[data-testid="increment-button"]').click().get('[data-testid="count-number"]').should('have.text','3');
        //-をクリック
        cy.get('[data-testid="decrement-button"]').click().get('[data-testid="count-number"]').should('have.text','2');
        cy.get('[data-testid="decrement-button"]').click().get('[data-testid="count-number"]').should('have.text','1');
        cy.get('[data-testid="decrement-button"]').click().get('[data-testid="count-number"]').should('have.text','0');
        cy.get('[data-testid="decrement-button"]').click().get('[data-testid="count-number"]').should('have.text','0');
    });
}

)

// describe("My First Test", () => {
//     it("Does not do much!", () => {
//       expect(true).to.equal(true);
//     });
//   });