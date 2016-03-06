(function() {
  'use strict';

  angular
    .module('rw')
    .controller('RwCtrl', function($scope, rwFactory, $mdSidenav, $mdToast, $mdDialog, $state) {
      function getCategories(items) {
        return _.uniq(_.flatten(items.map((item) => item.categories)));
      }
      function showToast(text) {
        return $mdToast.show(
          $mdToast.simple()
            .content(text)
            .position('top, right')
            .hideDelay(3000)
        );
      }

      this.items = rwFactory.ref;
      this.items.$loaded().then((items) => this.categories = getCategories(items));

      this.openSidebar = () => $state.go('items.new');
      this.clearFilters = () => {
        this.category = '';
        this.searchTerm = '';
        this.showFilters = false;
      };

      $scope.$on('addNewItem', (ev, item) => {
        this.items.$add(item);
        $scope.$broadcast('clearItem');
        $scope.$broadcast('closeSidebar');
        showToast('Item added');
      });
      $scope.$on('saveEditItem', (ev, item) => {
        this.items.$save(item);
        $scope.$broadcast('clearItem');
        $scope.$broadcast('closeSidebar');
        showToast('Item saved');
      });
      $scope.$on('removeItem', (ev, item) => {
        this.items.$remove(item);
        showToast('Item removed');
      });
    });
})();
