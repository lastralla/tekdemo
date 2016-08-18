angular
  .module('tekdemo.temperature')
  .service('temperatures', TemperaturesService);

var _$rootScope;

TemperaturesService.$inject = ['$rootScope'];

function TemperaturesService($rootScope) {
  _$rootScope = $rootScope;

  this.temperatures = [];

  this.getTemperatures = getTemperatures.bind(this);
  this.addTemperature = addTemperature.bind(this);
}

// Here I'm using JavaScript's function hoisting to make the code more readable.
// By pushing implementations down the service is easier to reason about.

function getTemperatures() {
  return this.temperatures;
}

function addTemperature(newTemp) {
  if ((!Number.parseFloat(newTemp) || !Number.parseInt(newTemp)) && newTemp != 0) {
    return;
  }

  this.temperatures.push(Number.parseFloat(newTemp));

  // _$rootScope.$emit('temperature.newTemp', function(evt, data) {
  //  console.log('temperature.newTemp', this.getTemperatures());
  // });

  return this.getTemperatures();
}
