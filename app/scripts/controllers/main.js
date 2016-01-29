'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'item1',
      'item3',
      'item4',
      'item2'
    ];
    $scope.addTodo = function(){
    	$scope.todos.push($scope.todo);
    	$scope.todo="";
    };

    $scope.removeTodo = function (index) {
	  $scope.todos.splice(index, 1);
	};
  });
