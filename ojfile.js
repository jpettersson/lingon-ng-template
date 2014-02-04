#! /usr/bin/env node

var oj = require('orangejuice');
var html2js = require('gulp-html2js')

oj.sourcePath = 'source';
oj.buildPath = 'build';

oj.preProcessors['ngt'] = function() {
  return {
    name: 'gulp-html2js',
    stream: html2js({
      base: 'source'
    })
  }
};