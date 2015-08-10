(function() {
    
    var app = angular.module("com.test.car", [], function ($interpolateProvider) {
            $interpolateProvider.startSymbol('[{');
            $interpolateProvider.endSymbol('}]');
        });
    app.controller("CarsController", ["$scope", "$http", function($scope, $http) {
        
        $scope.data = {};

        var loadUsers = function() {
            $http.get("/car")
                .success(function(data) {
                    $scope.users = data;
                })
                .error(function() {
                    console.log("Error, no es posible descargar los datos de usuarios.")
                });
        };

        $scope.saveUser = function() {
            $http.post("/car", $scope.data)
                .success(function(data) {
                    loadUsers();
                })
                .error(function() {
                    console.log("Error, no es posible almacenar el usuario.")
                });
        };


    }]);

})();