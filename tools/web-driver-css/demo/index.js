var assert = require('assert');

var client = require('webdriverio').remote({
    desiredCapabilities: {
        browserName: 'phantomjs'
    }
});

require('webdrivercss').init(client, {
    misMatchTolerance: 0.01,
    screenWidth: [320, 640, 1024, 1280],
    screenshotRoot: 'website',
    api: 'http://localhost:9000/api/repositories/'
});


client
    .init()
    .sync()
    .url('http://localhost:3000/index.html')
    .webdrivercss('Widgets', [
        {
            name: 'new-data-for-the-report',
            elem: '.js-new-data-for-the-report'
        },
        {
            name: 'read-comments-and-tweets',
            elem: '.js-read-comments-and-tweets'
        },
        {
            name: 'your-daily-feed',
            elem: '.js-your-daily-feed'
        }
    ])
    .click('.js-new-data-for-the-report .collapse-link')
    .click('.js-read-comments-and-tweets .collapse-link')
    .webdrivercss('Collapsed Widgets', [
        {
            name: 'new-data-for-the-report',
            elem: '.js-new-data-for-the-report'
        },
        {
            name: 'read-comments-and-tweets',
            elem: '.js-read-comments-and-tweets'
        }
    ])
    .sync()
    .end();