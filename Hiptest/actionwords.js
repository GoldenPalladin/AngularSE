exports.Actionwords = {
  iCreateNonemptyScopeScopeNameWithDeliverableDeliverableName: function (scope_name, deliverable_name) {
    this.iCreateEmptyScopeScopeName(scope_name);
    this.iAddDeliverableDeliverableName(deliverable_name);
  },

  iOpenScopeScopeName: function (scope_name) {
    const scopes = require('PageObjects/pageMyScopes');
    let scopeDetails = scopes.openScopeDetails(scope_name);
    expect(scopeDetails).to.be.true;
  },
  scopeShouldBeNonZero: function (scope_name) {
    const scopes = require('PageObjects/pageMyScopes');
    let scopeValue = scopes.getScopeValue(scope_name);
    expect(scopeValue).to.be.above(0);
  },
  scopeShouldBeDraft: function (scope_name) {
    const scopes = require('PageObjects/pageMyScopes');
    let scopeStatus = scopes.getScopeStatus(scope_name);
    expect(scopeStatus).to.be.equal('draft');
  },
  iSubmitScope: function (scope_name) {
    const scopeDetails = require('PageObjects/pageScopeDetails');
    this.iOpenScopeScopeName(scope_name);
    scopeDetails.submitScope();


  },
  scopeShouldBeSubmitted: function (scope_name) {
    const scopes = require('PageObjects/pageMyScopes');
    let scopeStatus = scopes.getScopeStatus(scope_name);
    expect(scopeStatus).to.be.equal('submitted');
  },
  clientShouldBeCreated: function (client_name) {
    const client = require('PageObjects/Manage/pageClients');
    expect(client.findClientByName(client_name)).to.exist;

  },
  iCreateEmptyScopeScopeName: function (scope_name, client_name) {
    this.clientClientNameShouldBeCreated(client_name);
    const scopes = require('PageObjects/pageMyScopes');
    expect(scopes.createScope(scope_name, client_name)).to.be.true;

  },
  emptyScopeScopeNameShouldBeCreated: function (scope_name) {
    this.iShouldSeeScopeNamed(scope_name);
  },
  iAddDeliverableDeliverableName: function (scope_name, deliverable_name) {
    this.scopeShouldBeDraft(scope_name);
    this.iOpenScopeScopeName(scope_name);
    const scopeDetails = require('PageObjects/pageScopeDetails');
    scopeDetails.addDeliverable(deliverable_name);

  },
  deliverableShouldBeAddedToTheScope: function (deliverable_name, scope_name) {

  },
  iLoginAsUserName: function (user_name) {
    const pageLogin = require('PageObjects/pageLogin');
    let creds = user_name.split('|');
    pageLogin.login(creds[0], creds[1]);

  },
  iShouldSeeScopeNamed: function (scope_name) {
    const scopes = require('PageObjects/pageMyScopes');
    expect(scopes.findScopeInListByName(scope_name)).to.exist;;
  }
};
