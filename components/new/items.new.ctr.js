;(function() {
 'use strict';

  angular.module('rw')
    .controller('NewRwCtrl', function($mdSidenav, $mdToast, $mdDialog, $timeout) {

      $timeout(() => {
        $mdSidenav('left').open();
      });

    })
})();