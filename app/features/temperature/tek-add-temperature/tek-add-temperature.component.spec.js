describe('addTemparature component', function() {

  describe('controller', function() {

    var $componentController;
    var controller;

    beforeEach(module('tekdemo.temperature'));

    beforeEach(inject(function($injector) {
      $componentController = $injector.get('$componentController');
      controller = $componentController('tekAddTemperature', {
        $scope: {}
      });
    }));

    it('should have empty form models at first', function() {
      expect(controller.newTemp).toMatch('');
      expect(controller.error).toMatch('');
    })

    it('should add new temperature and clear form models', function() {
      controller.newTemp = 2,
      controller.addTemperature();

      expect(controller.newTemp).toMatch('');
      expect(controller.error).toMatch('');
    })

    it('should only accept numbers as new temperatures', function() {
      controller.newTemp = 2,
      controller.addTemperature();

      expect(controller.newTemp).toMatch('');
      expect(controller.error).toMatch('');

      controller.newTemp = 2.5,
      controller.addTemperature();

      expect(controller.newTemp).toMatch('');
      expect(controller.error).toMatch('');

      controller.newTemp = 'a string',
      controller.addTemperature();

      expect(controller.newTemp).toMatch('a string');
      expect(controller.error).toMatch('Must be a number');
    })

    it('should clear error after good temperature value', function() {
      controller.newTemp = 'a string',
      controller.addTemperature();

      expect(controller.newTemp).toMatch('a string');
      expect(controller.error).toMatch('Must be a number');

      controller.newTemp = 2,
      controller.addTemperature();

      expect(controller.newTemp).toMatch('');
      expect(controller.error).toMatch('');
    })

    it('should accept negative number', function() {
      controller.newTemp = -2,
      controller.addTemperature();

      expect(controller.newTemp).toMatch('');
      expect(controller.error).toMatch('');
    })

    it('should accept 0 as a value', function() {
      controller.newTemp = 0,
      controller.addTemperature();

      expect(controller.newTemp).toMatch('');
      expect(controller.error).toMatch('');
    })
  });
});
