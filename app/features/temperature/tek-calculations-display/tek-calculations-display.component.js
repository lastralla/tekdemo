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
  this.$onChanges = function() {
    this.mean = calcMean(this.temps);
    this.median = calcMedian(this.temps);
    this.mode = calcMode(this.temps);
    this.range = calcRange(this.temps);
  };
}

// TODO in real world move these outside of controller into a service
function calcMean(values) {
  var meanTemp;
  var totalTemp;

  if (values.length === 0) {
    return;
  }

  totalTemp = values.reduce(function(total, num) {
      return total + num;
  });

  meanTemp = Math.round(totalTemp / values.length);

  return meanTemp;
}

function calcMedian() {
  // TODO implement
  return;
}

function calcMode() {
  // TODO implement
  return;
}

function calcRange() {
  // TODO implement
  return;
}
