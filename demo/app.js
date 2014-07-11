/* jslint browser: true, undef: true, newcap: true, forin: true, sub: true, white: true, indent: 4, unused: false */
/* globals define: true */

define(
    [
        'angularAMD',
        'selectize-ng'
    ], function (angularAMD) {
        $.noConflict();

        var App= angular.module('selectize-ng-demo', ['selectize-ng'])
          .controller('MainCtrl', function($scope) {

            $scope.users = [
              { id: 1, name: 'Bob' },
              { id: 2, name: 'Sally' },
              { id: 3, name: 'Jill' },
              { id: 4, name: 'Jane' }
            ];

            function newUsers() {
              $scope.users.push(
                { id: 5, name: 'Janet' }
              );
            }

            $scope.tagging = {
              value: [1, 3],
              options: {
                valueField: 'id',
                labelField: 'name',
                searchField: ['name'],
                create: true
              },
            };

            $scope.single = {
              value: 2,
              options: {
                valueField: 'id',
                labelField: 'name',
                searchField: ['name']
              }
            };
        
        $scope.addUsers = newUsers;

      });

        return App;
    }
);