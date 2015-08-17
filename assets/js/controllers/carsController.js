(function() {

    var app;
    if(!!window.angular_app){
        app = window.angular_app;
    } else {
        app = angular.module("com.test", [], function ($interpolateProvider) {
            $interpolateProvider.startSymbol('[{');
            $interpolateProvider.endSymbol('}]');
        });
    }

    app.controller("CarsController", ["$scope", "$http", function($scope, $http) {

        $scope.data = {};

        var loadCars = function() {
            $http.get("/car")
                .success(function(data) {
                    $scope.users = data;
                })
                .error(function() {
                    console.log("Error, no es posible descargar los datos de autos.")
                });
        };

        $scope.saveCar = function() {
            $http.post("/car", $scope.data)
                .success(function(data) {
                    loadCars();
                })
                .error(function() {
                    console.log("Error, no es posible almacenar el auto.")
                });
        };

        loadCars();

    }]);

})();
