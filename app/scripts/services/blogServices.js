'use strict';
/**
 * Created by Fathalian on 2/6/14.
 */

var app = angular.module('aprilApp');

app.factory('Blogs', ['$resource',
    function($resource){
        return $resource('http://localhost:8004/blogs');
    }]);
