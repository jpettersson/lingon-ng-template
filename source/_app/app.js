(function(){
  "use strict";

  var module = angular.module( 'app', ['ngAnimate', '_app/welcome.ngt'])

  module.controller('AppCtrl', function($scope){
    console.log('AppCtrl!');
  });

})();