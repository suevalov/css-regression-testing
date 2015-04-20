var gemini = require('gemini');

gemini.suite('new-data-for-the-report', function(suite) {
    suite.setUrl('/')
        .setCaptureElements('.js-new-data-for-the-report')
        .capture('plain')
        .capture('with dropdown', function(actions, find) {
            actions.click(find('.js-new-data-for-the-report a.dropdown-toggle'));
        });
});