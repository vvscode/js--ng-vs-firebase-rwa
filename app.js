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
        url: '/edit/:id',
        templateUrl: 'components/edit/items.edit.tpl.html',
        controller: 'EditRwCtrl as editRwCtrl',
        params: {
          item: null
        },
        resolve:{
          item: function($stateParams, rwFactory){
            if($stateParams.item) {
              return $stateParams.item;
            }
            return rwFactory.getItems().then((data) => {
              var item = data.data.find((item) => item.id == $stateParams.id);
              if(item) {
                return item;
              }

              throw 'Not found';
            });
          }
        }
      })
  })
  .directive('helloWorld', function() {
    return {
      template: "<h1>Hello, World</h1>"
    };
  });

