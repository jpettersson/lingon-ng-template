#!/usr/bin/env node

var lingon = require('lingon');
var ngHtml2js = require('lingon-ng-html2js');

lingon.sourcePath = 'source';
lingon.buildPath = 'build';

lingon.preProcessor('ngt', function() {
  return ngHtml2js({
    moduleName: 'templates',
    base: 'source'
  });
});
