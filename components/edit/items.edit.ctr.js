;(function() {
  'use strict';

  angular.module('rw')
    .controller('EditRwCtrl', function($scope, $mdSidenav, $mdToast, $mdDialog, $timeout, $state) {
      var editRwCtrl = this;
      this.item = $state.params.item;
      this.closeSidebar = () => this.isOpen = false;
      this.saveItem = () => $scope.$emit('addNewItem', this.item);

      $timeout(() => $mdSidenav('left').open());

      $scope.$on('clearItem', () => this.item = {});
      $scope.$on('closeSidebar', () => this.closeSidebar());
      $scope.$watch('editRwCtrl.isOpen', (isOpen) => {
        if(isOpen === false) {
          $mdSidenav('left').close()
            .then(() => $state.go('items'));
        }
      });
    })
})();