context("Boclips web app", () => {
  const username = Cypress.env("PUBLISHER_USERNAME");
  const password = Cypress.env("PUBLISHER_PASSWORD");

  const logInAndPreserveCookies = () => {
    cy.visit("https://app.boclips.com");

    cy.get("#username").invoke('val', username);
    cy.get("#password").invoke('val', password);

    cy.get("#kc-form-login").submit();

    Cypress.Cookies.preserveOnce(
        "KEYCLOAK_SESSION",
        "AUTH_SESSION_ID",
        "KEYCLOAK_IDENTITY"
    );
  }

  it("can detect reduced index size on search page", { retries: 3 }, () => {
    logInAndPreserveCookies()

    cy.visit("https://app.boclips.com");

    cy.get("#hs-eu-confirmation-button").click();
    cy.findByRole("button", { name: /Search/i }).should("exist");

    cy.findByPlaceholderText("Search for videos").type("cats" + "{enter}");

    cy.get("[data-qa=search-hits]")
      .should("exist")
      .and((searchHitsSpan) => {
        const numberOfResults = parseInt(searchHitsSpan.text());
        assert.isAtLeast(numberOfResults, 500);
      });
  });

  it.skip("can play a video", { retries: 3 }, () => {
    logInAndPreserveCookies()

    cy.visit("https://videos.boclips.com");

    cy.get("#hs-eu-confirmation-button").click();

    cy.findByPlaceholderText("Search for videos").type(
      '"Cat Scratch Disease | Causes, Symptoms and Treatment"' + "{enter}"
    );
    cy.findAllByText("Cat Scratch Disease | Causes, Symptoms and Treatment")
      .closest("a")
      .click();

    // Wait for the video to load by checking the src is not the default one
    cy.get("video")
      .should("have.prop", "paused", true)
      .should((video) => {
        expect(video[0].src).to.not.equal(
          "https://cdn.plyr.io/static/blank.mp4"
        );
        expect(video[0].src).to.not.equal("");
      });

    cy.wait(1000);

    cy.findByRole("button", { name: "Play" }).click();

    cy.get("video").should("have.prop", "paused", false);

    // Wait for the first 2 seconds to play
    cy.get("video").should((video) => expect(video[0].currentTime).to.be.gt(2));

    // Pause the video
    cy.get('[data-qa="player"]').click();
    cy.get("video").should("have.prop", "paused", true);
  });
});
