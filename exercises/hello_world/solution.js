'use strict';

var Primus = require('primus')
  , http = require('http');

var server = http.createServer()
  , primus = new Primus(server);

primus.on('connection', function (spark) {
  spark.write('hello world');
});

server.listen(8080);
