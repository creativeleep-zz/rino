'use strict';

/**
 * @ngdoc overview
 * @name rinoApp
 * @description
 * # rinoApp
 *
 * Main module of the application.
 */
angular
  .module('rinoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-loading-bar',
    'bootstrapLightbox'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/installation', {
        templateUrl: 'views/installation.html',
        controller: 'InstallationCtrl'
      })
      .when('/materials', {
        templateUrl: 'views/materials.html',
        controller: 'MaterialsCtrl'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
