'use strict';

/**
 * @ngdoc function
 * @name rinoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rinoApp
 */
angular.module('rinoApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
