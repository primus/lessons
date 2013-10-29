#!/usr/bin/env node

var Workshopper = require('workshopper')
  , path = require('path');

Workshopper({
    name: 'getprimus'
  , title: 'Learn Primus and tranform the real-time web'
  , appDir: __dirname
  , helpFile : path.join(__dirname, 'help.txt')
  , menu: {
      bg: 91
    }
}).init();
