(function() {
  'use strict';

  angular
    .module('rw')
    .controller('RwCtrl', function(rwFactory, $mdSidenav, $mdToast) {
      rwFactory.getItems().then((data) => (this.items = data.data));

      this.openSidebar = () => $mdSidenav('left').open();
      this.closeSidebar = () => $mdSidenav('left').close();
      this.editItem = (item) => { };
      this.removeItem = (item) => { }
      this.saveItem = (item) => {
        this.items.push(item);
        this.item = {};
        this.closeSidebar();
        $mdToast.show(
          $mdToast.simple()
            .content('Item saved')
            .position('top, right')
            .hideDelay(3000)
        );
      };
      this.saveEdit = () => {};
    });
})();
