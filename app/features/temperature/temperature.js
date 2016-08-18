// Temperature feature wrapper component

angular
	.module('tekdemo.temperature')
  .component('tekTemperature', {
    templateUrl: 'features/temperature/temperature.html',
    controller: TemperatureController
  });

TemperatureController.$inject = ['$rootScope', 'temperatures'];

function TemperatureController($rootScope, temperatures) {
	var self = this;

	this.temperatures = temperatures.getTemperatures();

	var listener = $rootScope.$on('temperature.newTemp', function() {
		self.temperatures = temperatures.getTemperatures();
	});

  /* Stop listening for the event on the rootScope */
  // note: using $onDestroy may now de supported in v1.5.x but did not verify
  $rootScope.$on('$destroy', function() {
    listener();
  });
}
