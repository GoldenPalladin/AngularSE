
Feature('Basic tabs and scope navigation');

Scenario('login', (I) => {
I.amOutsideAngularApp();
//browser.driver.get('about:blank');

I.amOnPage("http://scope.expert");
I.fillField('Email', 'py.scope.expert@gmail.com');
I.fillField('Password', 'Xqp6Ghcry');
//I.waitForClickable('Sign in', 2);
I.click('Sign in');
I.amInsideAngularApp();
I.see('My Scopes');
});

Scenario('Top navigate', (I)=>{
  I.click('Library');



  I.see('Scope items');
  I.see('Deliverable items');
  I.see('Component items');
  I.moveTo('/manage');
  I.see('Agency details');
  I.see('Integration settings');
  I.see('Clients');
  I.see("Rate Cards");
  I.see('Members');
  I.see('Groups');
  I.see('Output');
});
