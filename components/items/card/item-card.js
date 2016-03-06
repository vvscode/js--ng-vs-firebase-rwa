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

      function itemCardController($scope, $mdDialog, $state) {
        this.editItem = (item) => {
          $state.go('items.edit', {
            id: item.$id
          });
        };

        this.removeItem = (event, itemToRemove) => {
          var confirm = $mdDialog.confirm()
            .title(`Are you sure you wnat to delete "${itemToRemove.tile}"?`)
            .ok('Yes')
            .cancel('No')
            .targetEvent(event);

          $mdDialog.show(confirm).then(() => $scope.$emit('removeItem', itemToRemove));
        };

      }
    })
})();