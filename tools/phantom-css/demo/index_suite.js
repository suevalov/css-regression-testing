var phantomcss = require('../phantomcss.js');

casper.test.begin('Profile testing', 5, function() {

  phantomcss.init({
    rebase: casper.cli.get('rebase')
  });

  casper.start('http://localhost:3000/profile.html');

  casper.viewport(1280, 968);

  casper.then(function () {
    phantomcss.screenshot('body', 'Whole_Page');
  });

  casper.then(function () {
    phantomcss.screenshot('.js-profile-detail-block', 'Profile_Detail');
  });

  casper.then(function () {
    phantomcss.screenshot('.js-profile-activities', 'Profile_Activities');
  });

  casper.then(function () {
    casper.click('.js-profile-activities__dropdown');
    phantomcss.screenshot('.js-profile-activities', 'Profile_Activities_With_Dropdown');
  });

  casper.then(function () {
    casper.click('.js-profile-activities__collapse');
    phantomcss.screenshot('.js-profile-activities', 'Collapsed_Profile_Activities');
  });

  casper.then(function() {
    phantomcss.screenshot('.navbar.navbar-static-top', 'Navigation_Bar');
  });

  casper.then(function() {
    casper.sendKeys('.navbar.navbar-static-top input[type="text"]', 'some text');
    phantomcss.screenshot('.navbar.navbar-static-top', 'Navigation_Bar_With_Text');
  });

  casper.then(function now_check_the_screenshots() {
    phantomcss.compareAll();
  });

  casper.run(function () {
    casper.test.done();
  });

});
