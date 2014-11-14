angular.module('app').controller('LoginController', function ($scope, $http) {
    $scope.signin = function (username, password) {
        $http.post('/login', {userName: username, password: password}).then(function(response) {
            if(response.data.success) {
                console.log('Success');
            } else {
                console.log('Fail');
            }
        })
    };
});