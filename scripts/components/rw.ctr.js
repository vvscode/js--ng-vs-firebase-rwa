(function() {
  'use strict';

  angular
    .module('rw')
    .controller('RwCtrl', function(rwFactory, $mdSidenav) {
      rwFactory.getItems().then((data) => (this.items = data.data));

      this.openSidebar = () => $mdSidenav('left').open();
      this.closeSidebar = () => $mdSidenav('left').close();
      this.saveItem = (item) => {
        this.items.push(item);
        this.item = {};
        this.closeSidebar();
      };
      this.saveEdit = () => {};
    });
})();
