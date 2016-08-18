describe('Temparature component', function() {

  describe('controller', function() {

    var $componentController;
    var controller;

    beforeEach(module('tekdemo.temperature'));

    beforeEach(inject(function($injector) {
      $componentController = $injector.get('$componentController');
      controller = $componentController('tekTemperature', {
        $scope: {}
      });
    }));

    it('should have empty array of temperatures', function() {
      expect(controller.temperatures).toEqual([]);
    });

    // more...
  });
});
