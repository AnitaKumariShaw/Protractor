let homePage = require('../pages/homePage.js');

describe('demo calculator tests', function(){

    it('addition test', function(){
        //browser.get('https://juliemr.github.io/protractor-demo/');
        //element(by.model('first')).sendKeys('5');
        //element(by.model('second')).sendKeys('10');
        //element(by.css('[ng-click="doAddition()"]')).click();
        // let result  =element(by.cssContainingText('.ng-binding', '15'));
        // expect(result.getText()).toEqual('15');
        homePage.getUrl('https://juliemr.github.io/protractor-demo/');
        homePage.enterFirstInput('5');
        homePage.enterSecondInput('6');
        homePage.clickGo();
        homePage.verifyResult('11');

        browser.sleep(2000);

        


    });

    // it('subtraction tests', function(){


    // });



});