context("Teachers", () => {
    const username = Cypress.env("TEACHERS_USERNAME");
    const password = Cypress.env("TEACHERS_PASSWORD");


    it("logs in and searches for videos", {retries: 0}, () => {
        cy.visit("https://teachers.boclips.com");

        cy.get('body').then($body => {
            if ($body.find('#hs-eu-confirmation-button').length > 0) {
                cy.get("#hs-eu-confirmation-button").click();
            }
        })

        cy.get("#username").type(username);
        cy.get("#password").type(password);

        cy.get("#kc-form-login").submit();

        cy.get('body').then(($body) => {
            if ($body.find('#firstName').length > 0) {
                cy.get("#firstName").type("Xi");
                cy.get("#lastName").type("Jinping");
                cy.get("#role").click();

                cy.get('.ant-select-dropdown').should('be.visible')

                cy.get('[data-state="TEACHER"]').click()

                cy.get('button.onboarding-form__primary').click()

                cy.wait(1000)

                cy.get("[data-qa='age-select']").should('be.visible')

                cy.wait(1000)

                cy.get('button.onboarding-form__primary').click()

                cy.wait(1000)

                cy.get("[data-qa='countries-filter-select']").should('be.visible')

                cy.get("[data-qa='countries-filter-select']").click()

                cy.wait(1000)
                cy.get("div[title='India']").click()
                cy.get('#school-autocomplete').type('II LO BP')
                cy.get('button.onboarding-form__primary').click()
                cy.get('#privacyPolicy').click()
                cy.get('button.onboarding-form__primary').click()
            }
        });


        cy.get('[data-qa="testing-form"] input').type('cats' + '{enter}')

        cy.get("[data-qa=search-count]")
            .should("exist")
            .and((searchHitsSpan) => {
                const numberOfResults = parseInt(searchHitsSpan.text());
                assert.isAtLeast(numberOfResults, 500);
            });
    });

});
