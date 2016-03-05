(function() {
  'use strict';

  angular
    .module('rw')
    .factory('rwFactory', function($http, $firebaseArray) {
      var ref = new Firebase('https://ngrwa.firebaseio.com/');
      function getItems() {
        // return $http.get('/data/rw.json');
        return ref;
      }

      function getItem(itemId) {
        return getItems().find((item) => item.id == itemId);
      }

      function loadInitialData() {
        var data = [
          {
            "id": 1,
            "img": "http://lorempixel.com/200/200/?1",
            "posted": "Tue Mar 08 1977 08:05:04",
            "title": "First item",
            "price": 11111,
            "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            "contact": {
              "name": "Some name",
              "phone": "1234123412",
              "email": "some@email.com"
            },
            "categories": [
              "Category 1",
              "Category 2"
            ]
          },
          {
            "id": 2,
            "img": "http://lorempixel.com/200/200/?2",
            "posted": "Tue Mar 02 1977 08:05:04",
            "title": "First item",
            "price": 2222,
            "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            "contact": {
              "name": "Some name",
              "phone": "1234123412",
              "email": "some@email.com"
            },
            "categories": [
              "Category 2"
            ]
          },
          {
            "id": 3,
            "img": "http://lorempixel.com/200/200/?3",
            "posted": "Tue Mar 03 1977 08:05:04",
            "title": "First item",
            "price": 3333,
            "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            "contact": {
              "name": "Some name",
              "phone": "1234123412",
              "email": "some@email.com"
            },
            "categories": [
              "Category 3",
              "Category 4"
            ]
          },
          {
            "id": 4,
            "img": "http://lorempixel.com/200/200/?4",
            "posted": "Tue Mar 04 1977 08:05:04",
            "title": "First item",
            "price": 4444,
            "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            "contact": {
              "name": "Some name",
              "phone": "1234123412",
              "email": "some@email.com"
            },
            "categories": [
              "Category 5",
              "Category 6"
            ]
          },
          {
            "id": 5,
            "img": "http://lorempixel.com/200/200/?5",
            "posted": "Tue Mar 05 1977 08:05:04",
            "title": "First item",
            "price": 55,
            "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            "contact": {
              "name": "Some name",
              "phone": "1234123412",
              "email": "some@email.com"
            },
            "categories": [
              "Category 1",
              "Category 9"
            ]
          }
        ];
        angular.forEach(data, (item) => {
          ref.$add(item);
        });
      }

      return {
        getItems,
        getItem,
        ref: $firebaseArray(ref),
        loadInitialData
      }
    });


})();