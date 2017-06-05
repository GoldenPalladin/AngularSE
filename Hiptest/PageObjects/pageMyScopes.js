const env = require('./environment.js');

function findScopeInListByName(scope_name) {

  let scopeReference;
  browser.get(env.baseUrl +'/scopes');
  browser.wait(isElementPresent(element(by.linkText('My Scopes'))), env.waitTimeout); //thus we define scopes main page is loaded
  try {
    scopeReference=element(by.buttonText(scope_name));
  } catch (e) {
    console.log(e);
    scopeReference=null;
  } finally {
      return scopeReference;
  }
};

function openScopeDetails(scope_name) {
  let reqiredScope = findScopeInListByName(scope_name);
  expect(reqiredScope).to.exist;
  reqiredScope.click();
  browser.wait(isElementPresent(element(by.buttonText('Activity'))), env.waitTimeout); //thus we define scopes details page is loaded -- Activity tab is visible
  return true;
};

function getScope(scope_name) {
  let scopeRow=element.all(by.repeater('scope in scopes')).filter(function(elem, index) {
    return elem.$('main-scope-row-wrap.main-row').$('columns.three--columns').$('col-wrap').$('text.bold.ng-binding').getText().then(function(text) {
      return text === scope_name;
    });
  });
  return scopeRow;
};

function getScopeStatus(scope_name) {
  return getScope(scope_name).$("div[ng-show*=STATUS]").$('col-wrap.right').$('text.small.ng-binding').getText().toLowerCase();
};

function getScopeValue(scope_name) {
  let value = getScope(scope_name).$("div[ng-show*=VALUE]").$('col-wrap.right.ultra-right').$('text.small.ng-binding').getText();
  value=parseFloat(value.substr(1).replace(",", ""));//убираем значок валюты и разделяющую разряды запятую
  value=='NaN' ? return 0 : return value;
};

function createScope(scope_name, client_name) {
  const common = require('PageObjects/common');
  browser.get(env.baseUrl + '/create-scope');
  let scopeName = element(by.model('myNewScope.name'));
  let scopeClient = element(by.model('$mdAutocompleteCtrl.scope.searchText'));
  browser.wait(isElementPresent(scopeName), env.waitTimeout);
  scopeName.sendKeys(scope_name);
  common.listComplete(scopeClient, client_name)
  element(by.buttonText('Create Scope')).click();
  browser.wait(isElementPresent(element(by.buttonText('Activity'))), env.waitTimeout); //thus we define scopes details page is loaded -- Activity tab is visible
  return true;
};

exports.findScopeInListByName = findScopeInListByName(scope_name);
exports.openScopeDetails = openScopeDetails(scope_name);
exports.createScope = createScope(scope_name, client_name);
exports.getScopeValue = getScopeValue(scope_name);
exports.getScopeStatus = getScopeStatus(scope_name);
