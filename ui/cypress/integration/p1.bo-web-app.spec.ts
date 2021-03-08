context('Boclips web app', () => {
    it('can visit the landing page', () => {
        cy.visit('https://tazingo.boclips.com');
        cy.get('#username').type(Cypress.env('PUBLISHER_USERNAME'));
        cy.get('#password').type(Cypress.env('PUBLISHER_PASSWORD'));
        cy.get('#kc-form-login').submit();
        cy.findByRole('button', {name: /Search/i}).should('exist');
    })
});
