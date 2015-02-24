(function() {

  flow("My first responsive webpage", function() {
    decision({
      "View in 1500px": function() {
        step('Look at the page', function() {
          lookAtIt(1500);
        });
      },
      "View in 990px": function() {
        step('Look at the page', function() {
          lookAtIt(990);
        });
      },
      "View in 440px": function() {
        step('Look at the page', function() {
          lookAtIt(440);
        });
      }
    });
  });

  function lookAtIt(w) {
    casper.viewport(w, 768).thenOpen('http://localhost:9001/responsive', function() {
      casper.test.pass('Responsive page has loaded');
      phantomCSS.screenshot('body');
    });
  };

}());
