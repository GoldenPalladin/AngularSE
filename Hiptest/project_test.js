describe('Scope expert', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  it('Login', function () {
    // As a User
    // I want to login
    // In order to see agency scopes list
    // When I login as ""
    this.actionwords.iLoginAsUserName();
    // Then I should see scopes list
    this.actionwords.iShouldSeeScopesList();
  });

  it('Scope details page view', function () {

  });

  it('Library view', function () {

  });

  it('Manage page view', function () {

  });

  it('Empty scope creation', function () {
    // As a User
    // I want to create a scope
    // In order the scope to exist in my agency
    // Given client "ClientName" should be created
    this.actionwords.clientClientNameShouldBeCreated("ClientName");
    // When I create empty scope "ScopeName"
    this.actionwords.iCreateEmptyScopeScopeName("ScopeName");
    // Then empty scope "ScopeName" should be created
    this.actionwords.emptyScopeScopeNameShouldBeCreated("ScopeName");
  });

  it('Scope output', function () {

  });

  it('Submit scope', function () {
    // As a user
    // I want to submit scope for review
    // Given scope "ScopeName" should be created
    this.actionwords.scopeScopeNameShouldBeCreated("ScopeName");
    // When I open scope "ScopeName"
    this.actionwords.iOpenScopeScopeName("ScopeName");
    // And I submit scope
    this.actionwords.iSubmitScope();
    // Then scope "ScopeName" should be submitted
    this.actionwords.scopeScopeNameShouldBeSubmitted("ScopeName");
  });

  it('Decline scope', function () {

  });

  it('Accept scope', function () {

  });

  it('Reject scope', function () {

  });

  it('Approve scope', function () {

  });

  it('Close scope', function () {

  });

  it('Traffic scope', function () {

  });

  it('Adding scope deliverable', function () {
    // As a User 
    // I want to add deliverable to the scope
    // In order the scope to be non-empty
    // Given scope "" should be created
    this.actionwords.scopeScopeNameShouldBeCreated("");
    // When I add deliverable "DeliverableName"
    this.actionwords.iAddDeliverableDeliverableName("DeliverableName");
    // Then deliverable "DeliverableName" should be added to the scope "ScopeName"
    this.actionwords.deliverableDeliverableNameShouldBeAddedToTheScopeScopeName("DeliverableName", "ScopeName");
  });
});
