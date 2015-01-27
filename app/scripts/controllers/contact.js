'use strict';

/**
 * @ngdoc function
 * @name rinoApp.controller:FormController
 * @description
 * # FormController
 * Controller of the rinoApp
 */
angular.module('rinoApp')
  .controller('FormController', function ($scope, $http) {
    $scope.formData = {};
    $scope.submission = false;
    // Updated code thanks to Yotam
    var param = function(data) {
      var returnString = '';
      for (var d in data){
        if (data.hasOwnProperty(d)) {
          returnString += d + '=' + data[d] + '&';
        }
      }
      return returnString.slice( 0, returnString.length - 1 );
    };
    $scope.submitForm = function() {
      $http({
        method : 'POST',
        url : 'http://rinoremodeling.com/php/process.php',
        data : param($scope.formData), // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
      })
      .success(function(data) {
        if (!data.success) {
          // if not successful, bind errors to error variables
          $scope.errorName = data.errors.name;
          $scope.errorEmail = data.errors.email;
          $scope.errorTextarea = data.errors.message;
          $scope.submissionMessage = data.messageError;
          $scope.submission = true; //shows the error message
        } else {
          // if successful, bind success message to message
          $scope.submissionMessage = data.messageSuccess;
          $scope.formData = {}; // form fields are emptied with this line
          $scope.submission = true; //shows the success message
        }
      });
    };
  });
