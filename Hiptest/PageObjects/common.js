
function listComplete(element, text) { // выбирает элемент в списке автозаполнения
  element.click();
  browser.actions()
        .sendKeys(text)
        .perform().then(function(){
          browser.sleep(500);
          browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
          browser.sleep(500);
          browser.actions().sendKeys(protractor.Key.ENTER).perform();
        });

};


exports.listComplete = listComplete(element, text);
