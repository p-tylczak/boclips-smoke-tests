context('Boclips web app', () => {
    const username = Cypress.env('PUBLISHER_USERNAME');
    const password = Cypress.env('PUBLISHER_PASSWORD');

    it('can detect reduced index size on search page', {retries: 3}, () => {
        cy.visit('https://app.boclips.com');
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#kc-form-login').submit();
        cy.findByRole('button', {name: /Search/i}).should('exist');

        cy.findByPlaceholderText('Search for videos').type("cats" + '{enter}');


        // cy.get("[data-qa=search-hits]").contains('10000')
        cy.get("[data-qa=search-hits]").should((searchHitsSpan) => {
            const numberOfResults = parseInt(searchHitsSpan.text());
            assert.isAtLeast(numberOfResults, 500);
        });
    });
});
