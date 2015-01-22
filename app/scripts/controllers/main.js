'use strict';

/**
 * @ngdoc function
 * @name rinoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rinoApp
 */
angular.module('rinoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
