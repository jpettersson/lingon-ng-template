(function(){
  'use strict';

  //-------------------------------
  // Basic app setup with routing config
  //-------------------------------
  angular.module('app', [
    'ngAnimate', // animation module for various transitions. Dependecy of AngularStrap
    'templates', // module containing all the .ngt templates. https://github.com/philipvonbargen/lingon-ng-html2js
    'ui.router', // views and routing helper. https://github.com/angular-ui/ui-router
    'mgcrea.ngStrap' // Bootstrap components as Angular directives. http://mgcrea.github.io/angular-strap
  ])

    // App config
    //-------------------------------
    .config(function ($urlRouterProvider, $stateProvider) {

      // Default route
      $urlRouterProvider.otherwise('/');

      // Routing config using $stateProvider provided by angular-ui-router
      // https://github.com/angular-ui/ui-router
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '_app/home.ngt',
          controller: 'AppCtrl'
        })
    });

  //-------------------------------
  // Basic app controller
  //-------------------------------
  angular.module('app').controller('AppCtrl', function ($scope){
    console.log('AppCtrl!');
  });

})();