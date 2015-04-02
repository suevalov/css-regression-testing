var assert = require('assert');

var client = require('webdriverio').remote({

		desiredCapabilities: {
			browserName: 'phantomjs'
		}
		// desiredCapabilities: {
  //           browserName: 'chrome',
  //           version: '32',
  //           platform: 'XP',
  //           tags: ['examples'],
  //           name: 'This is an example test'
  //       },
  //       host: 'ondemand.saucelabs.com',
  //       port: 80,
  //       user: 'suevalov',
  //       key: '95a8584a-6e25-4995-a158-bf8e604a5f65',
  //       logLevel: 'silent'
});

require('webdrivercss').init(client, {
	misMatchTolerance: 0.01,
	screenWidth: [320, 480, 640, 1024],
	screenshotRoot: 'exampleProject',
    api: 'http://localhost:9000/api/repositories/'
});


client
	.init()
	.sync()
	.url('http://localhost:8000/pages/index.html')
	.webdrivercss('header', {
		name: 'header',
		elem: 'nav.navbar'
	})
	.sync()
	.end();