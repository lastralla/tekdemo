angular.module('tekdemo', []);

angular.element(document).ready(function bootstrapApp() {
    angular.bootstrap(document, ['tekdemo'], {
      strictDi: true
    });
  });
