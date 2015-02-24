var phantomcss = require('../phantomcss.js');

casper.test.begin('Index page testing', 5, function(test) {

  phantomcss.init({
    rebase: casper.cli.get('rebase')
  });

  casper.start('http://localhost:8000/pages/index.html');

  casper.viewport(1280, 968);

  casper.then(function () {
    phantomcss.screenshot('.js-index-widgets-dashboard', 'Index Widgets Dashboard');
  });

  casper.then(function () {
    phantomcss.screenshot('.js-index-area-chart-example', 'Area Chart Example');
  });

  casper.then(function () {
    casper.click('.js-index-area-chart-example .dropdown-toggle');
    phantomcss.screenshot('.js-index-area-chart-example', 'Area Chart Example With Opened Dropdown');
  });

  casper.then(function () {
    phantomcss.screenshot('.js-index-chat-panel', 'Chat Panel');
  });

  casper.then(function now_check_the_screenshots() {
    phantomcss.compareAll();
  });

  casper.run(function () {
    casper.test.done();
  });

});
