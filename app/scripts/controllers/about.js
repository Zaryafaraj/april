'use strict';

/**
 * @ngdoc function
 * @name aprilApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aprilApp
 */
angular.module('aprilApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
