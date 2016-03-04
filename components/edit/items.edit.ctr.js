;(function() {
  'use strict';

  angular.module('rw')
    .controller('EditRwCtrl', function($scope, $mdSidenav, $mdToast, $mdDialog, $timeout, $state, rwFactory) {
      var editRwCtrl = this;
      rwFactory.getItem($state.params.id).then((item) => {
        this.item = item;
        $timeout(() => $mdSidenav('left').open());
      });
      this.closeSidebar = () => this.isOpen = false;
      this.saveEdit = (item) => $scope.$emit('saveEditItem', item);

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