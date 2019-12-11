var xl = require('./XLReader.js');

describe('Read Excel Data', function () {
    var Test_Data = xl.read_from_excel('Sheet1', './testData.xlsx');
    beforeEach(function () {
        browser.ignoreSynchronization = true
            browser.get('http://www.learnautomationQA.com/practiceAngular.htm#/store');
    });

    Test_Data.forEach(function (data) {
        it('Price of item '+ data.item +'should be ' + data.ExpectedPrice , function () {
            browser.sleep(2000);
            element(by.model("search")).sendKeys(data.item).clear();
            var price = element(by.className("tdRight ng-binding"));
            expect(price.getText()).toEqual(data.ExpectedPrice);
        });
    });

});
