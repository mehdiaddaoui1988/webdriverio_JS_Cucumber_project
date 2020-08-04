const { Feature, Before, Given, When, And, Then } = require('cucumber');
const { assert, expect } = require('chai');
let url = "https://orangehrm-demo-6x.orangehrmlive.com/auth/login";
Given('I am on the login page ORANGEHRM', async function () {
    await browser.url(url)
console.log('done');
});
When('I use a valid login and password', async function(){
    (await browser.$('//*[@id="txtUsername"]')).addValue('Melanie');
    (await browser.$('//*[@id="txtPassword"]')).addValue('Silent666');
    (await browser.$('//*[@id="btnLogin"]')).click();

});
Then('I shall be on the ORANGEHRM user page', async function(){
    let ExpectedUrl = 'https://orangehrm-demo-6x.orangehrmlive.com/client/#/dashboard';
    let currentUrl = browser.getUrl();
    assert(ExpectedUrl,currentUrl);
});


