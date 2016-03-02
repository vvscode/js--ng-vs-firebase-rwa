;(function() {
 'use strict';

  angular.module('rw')
    .controller('NewRwCtrl', function($scope, $mdSidenav, $mdToast, $mdDialog, $timeout, $state) {
      var newRwCtrl = this;
      this.closeSidebar = () => this.isOpen = false;
      this.saveItem = () => $scope.$emit('addNewItem', this.item);

      $timeout(() => $mdSidenav('left').open());

      $scope.$on('clearItem', () => this.item = {});
      $scope.$on('closeSidebar', () => this.closeSidebar());
      $scope.$watch('newRwCtrl.isOpen', (isOpen) => {
        if(isOpen === false) {
          $mdSidenav('left').close()
            .then(() => $state.go('items'));
        }
      });
    })
})();