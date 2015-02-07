'use strict';

/**
 * @ngdoc function
 * @name aprilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aprilApp
 */
angular.module('aprilApp')
  .controller('MainCtrl',['$scope', 'Blogs', function ($scope, Blogs) {

        $scope.save = function() {
            var result = {
                author: $scope.author,
                title: $scope.title,
                blog: $scope.blog
            }

            Blogs.save(result);
        }
  }]);
