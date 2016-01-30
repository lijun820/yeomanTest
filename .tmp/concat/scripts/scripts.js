'use strict';

/**
 * @ngdoc overview
 * @name yeomanTestApp
 * @description
 * # yeomanTestApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  // ,$locationProvider
  .config(["$routeProvider", function ($routeProvider) {  
    // $locationProvider.html5Mode(true);
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);


'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
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
  }]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('loginCtrl', ["$scope", function ($scope) {
    $scope.name = "11111";
  }]);


