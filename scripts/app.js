angular
  .module('rw', ['ngMaterial', 'ui.router'])
  .config(function($mdThemingProvider, $stateProvider) {

    $mdThemingProvider
      .theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');
  })
  .directive('helloWorld', function() {
    return {
      template: "<h1>Hello, World</h1>"
    };
  });

