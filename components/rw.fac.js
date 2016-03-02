(function() {
  'use strict';

  angular
    .module('rw')
    .factory('rwFactory', function($http) {
      function getItems() {
        return $http.get('/data/rw.json');
      }

      return {
        getItems: getItems
      }
    });

})();