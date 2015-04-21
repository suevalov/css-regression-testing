var gemini = require('gemini');

gemini.suite('new-data-for-the-report', function(suite) {
    suite
        .setUrl('/')
        .setCaptureElements('.js-new-data-for-the-report')
        .capture('plain')
        .capture('with dropdown', function(actions, find) {
            actions.click(find('.js-new-data-for-the-report a.dropdown-toggle'));
        });
});

gemini.suite('index-page', function(suite) {
    suite
        .setUrl('/')
        .setCaptureElements('body')
        .ignoreElements([
            'canvas',
            '#polarChart',
            '#doughnutChart',
            '#page-wrapper > div:nth-child(3) > div > div.wrapper.wrapper-content > div > div:nth-child(3) > div > div.ibox-content.inspinia-timeline > div:nth-child(1) > div > div.col-xs-7.content.no-top-border > p:nth-child(3)'
        ])

        .capture('1280', function(actions) {
            actions.setWindowSize(1280, 1200);
            actions.wait(500);
        })

        .capture('1024', function(actions) {
            actions.setWindowSize(1024, 1200);
            actions.wait(500);
        })

        .capture('600', function(actions) {
            actions.setWindowSize(600, 1200);
            actions.wait(500);
        })

        .capture('320', function(actions) {
            actions.setWindowSize(320, 1200);
            actions.wait(500);
        });


});