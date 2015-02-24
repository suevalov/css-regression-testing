var path = require('path');
var connect = require('connect');

var showReport;
var filterTest;
var debugMode;
var remoteDebug;

process.argv.forEach(function(arg, i){
  if(arg === 'report'){
    showReport = true;
  }
  if(/^debug/.test(arg)){
    debugMode = true;
  }
  if(/^remoteDebug/.test(arg)){
    remoteDebug = true;
  }
  if(/^test=/.test(arg)){
    filterTest = arg.split('=')[1];
  }
});

var flow = require('../node_modules/phantomflow/phantomflow.js').init({
  debug: debugMode ? 2 : undefined,
  createReport: true,
  test: filterTest,
  remoteDebug: remoteDebug,
});

if (showReport) {
  flow.report();
} else {

  connect(
    connect.static(  path.join(__dirname, '..', 'ui_for_tests') ) // Serve the system under test for this example
  ).listen(9001);

  flow.run(function(code) {
    process.exit(code);
  });

}
