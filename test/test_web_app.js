const { Builder, By, until } = require('selenium-webdriver');
const mocha = require('mocha');
const { describe, it, before, after } = mocha;

describe('Web Application Acceptance Tests', function() {
    this.timeout(30000);
    let driver;
    let expect;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.get('https://campus-connect-gules.vercel.app/');

        // Dynamically import chai and assign expect
        const chai = await import('chai');
        expect = chai.expect;
    });

    after(async function() {
        await driver.quit();
    });

    it('should have the correct title on the home page', async function() {
        const title = await driver.getTitle();
        expect(title).to.equal('Campus Connect');
    });
    

    // it('should allow user to log in', async function() {
    //     await driver.findElement(By.id('username')).sendKeys('testuser');
    //     await driver.findElement(By.id('password')).sendKeys('password');
    //     await driver.findElement(By.id('login-button')).click();

    //     const welcomeMessage = await driver.wait(until.elementLocated(By.id('welcome-message')), 10000).getText();
    //     expect(welcomeMessage).to.include('Welcome, testuser');
    // })
    // it('should navigate to the profile page', async function() {
    //     await driver.findElement(By.linkText('Login')).click();

    //     await driver.wait(until.titleIs('Campus Connect'), 10000);
    //     const title = await driver.getTitle();
    //     expect(title).to.equal('Campus Connect');
    // });

   
});
