#!/usr/bin/env node

var lingon = require('lingon');
var ngHtml2js = require('lingon-ng-html2js');

lingon.preProcessors.set('ngt', function() {
  return ngHtml2js({
    moduleName: 'templates',
    base: lingon.config.sourcePath
  });
});
