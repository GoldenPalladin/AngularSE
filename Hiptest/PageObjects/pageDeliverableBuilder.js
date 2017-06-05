function addComponent(component_name) {
let component = element(by.('//*[@id="component-options-list--nav"]/div[1]/div[3]/div/ul/li[1]/div/span/span[1]'));
let target = element(by.className('text-for-empty'));
  browser.actions().dragAndDrop(component, target).perform();


};
