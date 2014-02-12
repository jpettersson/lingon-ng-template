#!/usr/bin/env node

var oj = require('orangejuice');
var html2js = require('gulp-html2js');

oj.sourcePath = 'source';
oj.buildPath = 'build';

oj.preProcessor('ngt', function() {
  return html2js({
    base: 'source'
  })
});