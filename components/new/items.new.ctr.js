;(function() {
 'use strict';

  angular.module('rw')
    .controller('NewRwCtrl', function($scope, $mdSidenav, $mdToast, $mdDialog, $timeout, $state) {
      var newRwCtrl = this;
      this.closeSidebar = () => this.isOpen = false;

      $timeout(() => $mdSidenav('left').open());

      $scope.$watch('newRwCtrl.isOpen', (isOpen) => {
        if(isOpen === false) {
          $mdSidenav('left').close()
            .then(() => $state.go('items'));
        }
      });
    })
})();