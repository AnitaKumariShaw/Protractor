let homePage = function(){

    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let elementGoButton = element(by.css('[ng-click="doAddition()"]'));

    this.getUrl = function(url){
        browser.get(url);
    };

    this.enterFirstInput = function(firstNo)
    {
        firstNumber.sendKeys(firstNo);
    };

    this.enterSecondInput = function(secondNo)
    {
        secondNumber.sendKeys(secondNo);
    };
    this.clickGo = function(){
        elementGoButton.click();
    };

    this.verifyResult= function(result){
        let output  = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };
};

module.exports = new homePage();