'use strict';

describe('Controller: InstallationCtrl', function () {

  // load the controller's module
  beforeEach(module('rinoApp'));

  var InstallationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstallationCtrl = $controller('InstallationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
