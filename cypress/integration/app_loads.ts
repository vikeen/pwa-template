it('A user loads the app', () => {
    cy.visit('http://localhost:3000');

    cy.contains('React App');
});