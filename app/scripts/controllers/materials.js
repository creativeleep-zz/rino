'use strict';

/**
 * @ngdoc function
 * @name rinoApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the rinoApp
 */
angular.module('rinoApp')
  .controller('MaterialsCtrl', function ($scope, $log) {

    //dropdowns
    $scope.items = [
      '',
      '',
      ''
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  });
