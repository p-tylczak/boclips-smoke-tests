context('Boclips web app', () => {
    const username = Cypress.env('PUBLISHER_USERNAME');
    const password = Cypress.env('PUBLISHER_PASSWORD');

    // it('can visit the landing page', {retries: 3}, () => {
    //     cy.visit('https://videos.boclips.com');
    //     cy.get('#username').type(username);
    //     cy.get('#password').type(password);
    //     cy.get('#kc-form-login').submit();
    //     cy.findByRole('button', {name: /Search/i}).should('exist');
    // })

    it('can detect reduced index size on search page', {retries: 3}, () => {
        cy.visit('https://videos.boclips.com');
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#kc-form-login').submit();
        cy.get('[data-qa=search-input]').type("cats");
        cy.findByRole('button', {name: /Search/i}).click();


        cy.get("[data-qa=search-hits]").contains('10000')
    })
});