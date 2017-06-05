const env = require('./environment.js');

function submitScope() {
  let submit = element(by.buttonText('Submit'));
  submit.isDisplayed()==false ? return false : submit.click();
  let submitComment = element(by.model('submitComment'));
  browser.wait(isElementPresent(submitComment)), env.waitTimeout); //thus we define scopes main page is loaded
  submitComment.sendKeys('Automatically submitted scope.');
  element(by.linkText('Submit')).click();
  browser.wait(isElementPresent(element(by.buttonText('Accept')))), env.waitTimeout);
  return true;
};

function addDeliverable(deliverable_name) {
  const common = require('PageObjects/common');
  let addDeliverable = element(by.buttonText('Add deliverable'));
  addDeliverable.isDisplayed()==false ? return false : addDeliverable.click();
  let deliverableName = element(by.model('deliverable.name'));
  let deliverableType = element(by.model('autoComplete.searchText'));
  deliverableName.sendKeys(deliverable_name);
  common.listComplete(deliverableType, 'website');
  element(by.linkText('Start buildiding your deliverable')).click();
};

exports.submitScope = submitScope();
