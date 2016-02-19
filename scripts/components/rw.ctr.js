(function() {
  'use strict';

  angular
    .module('rw')
    .controller('RwCtrl', function(rwFactory) {
      rwFactory.getItems().then((data) => (this.items = data.data));
    });
})();
