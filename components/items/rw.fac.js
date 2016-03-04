(function() {
  'use strict';

  angular
    .module('rw')
    .factory('rwFactory', function($http) {
      function getItems() {
        return $http.get('/data/rw.json');
      }

      function getItem(itemId) {
        return getItems().then((data) => data.data.find((item) => item.id == itemId));
      }

      return {
        getItems: getItems,
        getItem: getItem
      }
    });

})();