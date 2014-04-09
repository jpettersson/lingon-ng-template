#!/usr/bin/env node

var lingon = require('lingon');
var html2js = require('gulp-html2js');

lingon.sourcePath = 'source';
lingon.buildPath = 'build';

lingon.preProcessor('ngt', function() {
  return html2js({
    base: 'source'
  })
});