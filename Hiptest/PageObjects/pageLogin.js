function login(email, password) {
  var env = require('./environment.js');
  browser.driver.get(env.baseUrl+'/login');
  element(by.model("user.username")).sendKeys(email);
  element(by.model("user.password")).sendKeys(password);
  element(by.buttonText('Sign in')).click();
  browser.wait(isElementPresent(element(by.linkText('My Scopes'))), 10);
}

exports.login=login(email, password);
