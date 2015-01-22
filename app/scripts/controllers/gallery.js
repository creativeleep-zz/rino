'use strict';

/**
 * @ngdoc function
 * @name rinoApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the rinoApp
 */
angular.module('rinoApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
