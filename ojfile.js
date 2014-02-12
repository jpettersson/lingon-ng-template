#!/usr/bin/env node

var oj = require('orangejuice');
var ngHtml2js = require('gulp-ng-html2js');

oj.sourcePath = 'source';
oj.buildPath = 'build';

oj.preProcessor('ngt', function() {
  return ngHtml2js({
    moduleName: 'templates',
    base: 'source'
  });
});
