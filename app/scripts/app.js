'use strict';

/**
 * @ngdoc overview
 * @name yeomanTestApp
 * @description
 * # yeomanTestApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  // ,$locationProvider
  .config(function ($routeProvider) {  
    // $locationProvider.html5Mode(true);
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

