(function() {
  'use strict';

  angular
    .module('rw')
    .controller('RwCtrl', function($scope, rwFactory, $mdSidenav, $mdToast, $mdDialog, $state) {
      function getCategories(items) {
        return _.uniq(_.flatten(items.map((item) => item.categories)));
      }

      this.items = rwFactory.ref;
      this.items.$loaded().then((items) => this.categories = getCategories(items));

      this.openSidebar = () => $state.go('items.new');
      this.editItem = (item) => {
        $state.go('items.edit', {
          id: item.id
        });
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
        this.items.$add(item);
        $scope.$broadcast('clearItem');
        $scope.$broadcast('closeSidebar');
        $mdToast.show(
          $mdToast.simple()
            .content('Item saved')
            .position('top, right')
            .hideDelay(3000)
        );
      });
      $scope.$on('saveEditItem', (ev, item) => {
        // add logic to save data on server
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
      };
    });
})();
