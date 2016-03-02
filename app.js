angular
  .module('rw', ['ngMaterial', 'ui.router'])
  .config(function($mdThemingProvider, $stateProvider) {

    $mdThemingProvider
      .theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');

    $stateProvider
      .state('items', {
        url: '/items',
        templateUrl: 'components/items/items.tpl.html',
        controller: 'RwCtrl as rwCtrl',
      })
      .state('items.new', {
        url: '/new',
        templateUrl: 'components/new/items.new.tpl.html',
        controller: 'NewRwCtrl as newRwCtrl',
      })
      .state('items.edit', {
        url: '/edit',
        templateUrl: 'components/items/items.tpl.html',
        controller: 'RwCtrl as rwCtrl',
      })
  })
  .directive('helloWorld', function() {
    return {
      template: "<h1>Hello, World</h1>"
    };
  });

