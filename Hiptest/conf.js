var env = require('./environment.js');
exports.config = {
  directConnect: true,
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['project_test.js'],
  capabilities: {
    'browserName': 'chrome',
  },
  getPageTimeout: 10000,
  ignoreUncaughtExceptions: true,

  /* Protractor will exit with an error if it sees any command line flags it doesn't  recognize. Set disableChecks true to disable this check. */
 disableChecks: true,

 /*A callback function called once protractor is ready and available, and
 before the specs are executed. If multiple capabilities are being run,
 this will run once per capability.
 You can specify a file containing code to run by setting onPrepare to
 the filename string. onPrepare can optionally return a promise, which
 Protractor will wait for before continuing execution. This can be used if the preparation involves any asynchronous calls, e.g. interacting with the browser. Otherwise Protractor cannot guarantee order of execution and may start the tests before preparation finishes.
 At this point, global variable 'protractor' object will be set up, and
 globals from the test framework will be available. */
 onPrepare: function() {
    browser.driver.get(env.baseUrl+'/login');
    browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return env.baseUrl+'/login';
      });
    }, 10000);
    browser.driver.get(env.baseUrl+'/login');
    browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return env.baseUrl+'/login';
      });
    }, 10000);
    browser.driver.findElement(by.xpath('//*[@id="input_0"]')).sendKeys(env.login.username);
    browser.driver.findElement(by.xpath('//*[@id="input_1"]')).sendKeys(env.login.password);
    browser.driver.findElement(by.xpath('/html/body/md-content/div/section[2]/div/div/div/form/button')).click();
    // Login takes some time, so wait until it's done.
    // For the test app's login, we know it's done when it redirects to
    // index.html.
    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return env.baseUrl;
      });
    }, 10000);
  }
}
