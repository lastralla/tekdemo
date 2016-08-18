angular
  .module('tekdemo.temperature')
  .component('tekCalculationsDisplay', {
    bindings: {
      temps: '<'
    },
    templateUrl: 'features/temperature/tek-calculations-display/tek-calculations-display.html',
    controller: CalculationsDisplayController
  });

function CalculationsDisplayController() {
  // TODO perform calculations
  this.mean = this.temps;
  this.median = this.temps;
  this.mode = this.temps;
  this.range = this.temps;
}
