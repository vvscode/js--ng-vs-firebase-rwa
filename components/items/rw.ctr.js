(function() {
  'use strict';

  angular
    .module('rw')
    .controller('RwCtrl', function($scope, rwFactory, $mdSidenav, $mdToast, $mdDialog, $state) {
      function getCategories(items) {
        return _.uniq(_.flatten(items.map((item) => item.categories)));
      }

      rwFactory.getItems().then((data) => {
        this.items = data.data || [];
        this.categories = getCategories(this.items);
      });

      this.openSidebar = () => $state.go('items.new');
      this.editItem = (item) => {
        this.item = item;
        this.openSidebar();
      };
      this.removeItem = (event, itemToRemove) => {
        var confirm = $mdDialog.confirm()
          .title(`Are you sure you wnat to delete "${itemToRemove.tile}"?`)
          .ok('Yes')
          .cancel('No')
          .targetEvent(event);

        $mdDialog.show(confirm).then(() => {
          this.items = this.items.filter((item) => item !== itemToRemove);
        });
      };

      $scope.$on('addNewItem', (ev, item) => {
        this.items.push(item);
        $scope.$broadcast('clearItem');
        $scope.$broadcast('closeSidebar');
        $mdToast.show(
          $mdToast.simple()
            .content('Item saved')
            .position('top, right')
            .hideDelay(3000)
        );
      });

      this.saveEdit = () => {
        this.item = {};
        this.closeSidebar();
        $mdToast.show(
          $mdToast.simple()
            .content('Item saved')
            .position('top, right')
            .hideDelay(3000)
        );
      };

      this.clearFilters = () => {
        this.category = '';
        this.searchTerm = '';
        this.showFilters = false;
      }
    });
})();
