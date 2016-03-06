;(function() {
  'use strict';

  angular
    .module('rw')
    .directive('itemCard', function() {
      return {
        templateUrl: 'components/items/card/item-card.tpl.html',
        scope: {
          item: '='
        },
        controller: itemCardController,
        controllerAs: 'vm'
      };

      function itemCardController() {

      }
    })
})();