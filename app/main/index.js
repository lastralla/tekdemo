angular.module('tekdemo', [
    'tekdemo.temperature'
]);

angular.element(document).ready(function bootstrapApp() {
    angular.bootstrap(document, ['tekdemo'], {
      strictDi: true
    });
  });
