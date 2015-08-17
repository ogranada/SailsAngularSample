(function() {

    var app = angular.module("com.test", ['ngRoute'], function ($interpolateProvider) {
            $interpolateProvider.startSymbol('[{');
            $interpolateProvider.endSymbol('}]');
        });

    window.angular_app = app;

        app.config(function($routeProvider){
            $routeProvider
            .when('/', {
                templateUrl: "home",
                controller: 'HomeController'
            })
            .when('/users', {
                templateUrl: "users",
                controller: 'UsersController'
            })
            .when('/cars', {
                templateUrl: "cars",
                controller: 'CarsController'
            })
            ;
        });

    app.controller("HomeController", ["$scope", "$http", function($scope, $http) {

        $scope.message = "Hello, I'm a Main Controller...";

    }]);

})();
