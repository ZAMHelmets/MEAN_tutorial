/**
 * Created by Aule on 2/9/15.
 */

angular.module('app')
.controller('LoginCtrl', function ($scope, UserSvc) {
        $scope.login = function (username, password) {
            UserSvc.login(username, password)
                    .then(function (user){
                    $scope.$emit('login', user)
            })
        }
    })