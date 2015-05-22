#!/usr/bin/env node
'use strict';

var Workshopper = require('workshopper')
  , path = require('path');

var ws = new Workshopper({
  name: 'getprimus',
  title: 'Learn Primus and tranform the real-time web',
  appDir: __dirname,
  helpFile : path.join(__dirname, 'help.txt'),
  menu: {
    bg: 91 // HOT PURPLE BABE.
  }
});
