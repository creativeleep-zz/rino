'use strict';

/**
 * @ngdoc function
 * @name rinoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rinoApp
 */
angular.module('rinoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
