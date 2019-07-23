context('getty ingest', () => {
  it('200s with an empty POST', () => {
    cy.request({
      method: 'POST',
      url: 'https://gettyingest.boclips.com/',
      headers: {
        'content-type': 'application/json'
      }
    })
      .its('status')
      .should('eq', 200)
  });
});
