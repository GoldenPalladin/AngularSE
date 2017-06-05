var env = require('./environment.js');

function findClientByName(client_name) {
    browser.get(env.baseUrl+'/admin');
    element(by.buttonText('Clients')).click();
    return client = $$('p.client-name.ng-binding')).filter(function(elem, index) {
      return elem.getText().then(function(text) {
        return text === client_name;
      });
    });
}

exports.findClientByName = findClientByName(client_name);
