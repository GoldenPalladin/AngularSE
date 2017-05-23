function login() {
  browser.get("http://scope.expert");
  element(by.model("user.username")).sendKeys("py.scope.expert@gmail.com");
  element(by.model("user.password")).sendKeys("Xqp6Ghcry");
  element(by.buttonText('Sign in')).click();
  browser.wait(isElementPresent(element(by.linkText('My Scopes'))), 10);
}

exports.login=login;
