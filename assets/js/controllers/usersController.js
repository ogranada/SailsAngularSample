(function() {
    
    var app = angular.module("com.test", [], function ($interpolateProvider) {
            $interpolateProvider.startSymbol('[{');
            $interpolateProvider.endSymbol('}]');
        });
    app.controller("UsersController", ["$scope", "$http", function($scope, $http) {
        
        $scope.data = {};

        var loadUsers = function() {
            $http.get("/user")
                .success(function(data) {
                    $scope.users = data;
                })
                .error(function() {
                    console.log("Error, no es posible descargar los datos de usuarios.")
                });
        };

        $scope.saveUser = function() {
            $http.post("/user", $scope.data)
                .success(function(data) {
                    loadUsers();
                })
                .error(function() {
                    console.log("Error, no es posible almacenar el usuario.")
                });
        };


    }]);

})();