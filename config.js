var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            useAutomationExtension: false,
            args: ['--disable-browser-side-navigation']
        }
    },
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./*.js'],
    directConnect: true,
	 onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'tmp/reporting'
		  , screenshotsSubfolder: 'screenshots'
		  , docTitle: 'LearnAutomationQAReport'
		  , preserveDirectory: false
      }).getJasmine2Reporter());
   }
}
