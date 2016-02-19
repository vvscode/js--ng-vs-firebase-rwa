(function() {
  'use strict';

  angular
    .module('rw')
    .controller('RwCtrl', function($http) {
      $http.get('/data/rw.json').then((data) => (this.items = data.data));
    });
})();
