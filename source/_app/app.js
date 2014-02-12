(function(){
  "use strict";

  var module = angular.module( 'app', ['ngAnimate', 'templates'])

  module.controller('AppCtrl', function($scope){
    console.log('AppCtrl!');
  });

})();
