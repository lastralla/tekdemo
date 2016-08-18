angular
  .module('tekdemo.temperature')
  .component('tekAddTemperature', {
    templateUrl: 'features/temperature/tek-add-temperature/tek-add-temperature.html',
    controller: AddTemperatureController
  });

AddTemperatureController.$inject = ['temperatures'];

function AddTemperatureController(temperatures) {
  this.newTemp = '';
  this.error = '';

  this.addTemperature = function() {
    var done = temperatures.addTemperature(this.newTemp);

    if (done) {
      this.newTemp = '';
      this.error = '';
    } else {
      this.error = 'Must be a number';
    }
  };
}
