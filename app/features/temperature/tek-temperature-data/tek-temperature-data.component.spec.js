describe('temperatureData component', function() {

  describe('controller', function() {

    var $componentController;
    var controller;

    beforeEach(module('tekdemo.temperature'));

    beforeEach(inject(function($injector) {
      $componentController = $injector.get('$componentController');
      controller = $componentController('tekTemperatureData', {
        $scope: {}
      });
    }));

    it('should get temperatures', function() {
      expect(controller.temperatures).toEqual([]);
    })
  });
});
