"use strict";

const { go, resize, click, scrollToElement, test, l, Locator } = require('testim');



Locator.set(require('./locators/locators.js'));

test('untitled test', async () => {
  await go("http://stackoverflow.com");
  await resize({
    width: 1024, 
    height: 680
  });
  await click(l("For_developers"));
  await scrollToElement(l("[data-gps-track='product_homepage.for_developers.click({ product: \'PrivateQA\' })']"));
  await click(l("[data-gps-track='product_homepage.for_developers.click({ product: \'PrivateQA\' })']"));
  await click(l("Work_email"));
  await click(l("Get_started"));

}); // end of test
