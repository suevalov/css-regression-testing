var connect = require('connect');
var path = require('path');

connect(
    connect.static(path.join(__dirname))
).listen(8000);