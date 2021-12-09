context('Boclips web app', () => {
    it('can visit the landing page', { retries: 3 }, () => {
        cy.visit('https://videos.boclips.com');
        cy.get('#username').type(Cypress.env('PUBLISHER_USERNAME'));
        cy.get('#password').type(Cypress.env('PUBLISHER_PASSWORD'));
        cy.get('#kc-form-login').submit();
        cy.findByRole('button', {name: /Search/i}).should('exist');
    })
});
