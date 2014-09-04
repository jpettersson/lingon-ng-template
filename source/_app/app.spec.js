describe('AppCtrl', function() {
  var scope, ctrl;

  beforeEach(module('app')); // include our app module that gives us access to our AppCtrl

  beforeEach(inject(function($controller, $rootScope) { // inject dependenceis
    scope = $rootScope.$new();
    ctrl = $controller('AppCtrl', { $scope: scope }); // get our AppCtrl and pass it our scope
  }));

  it('should be defined', function() {
    expect(ctrl).toBeDefined();
  });
});