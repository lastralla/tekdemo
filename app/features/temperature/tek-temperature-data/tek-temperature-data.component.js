angular
  .module('tekdemo.temperature')
  .component('tekTemperatureData', {
    templateUrl: 'features/temperature/tek-temperature-data/tek-temperature-data.html',
    controller: TemperatureDataController
  });

TemperatureDataController.$inject = ['temperatures'];

function TemperatureDataController(temperatures) {
  this.temperatures = temperatures.getTemperatures();
}
