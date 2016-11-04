(function () {
    "use strict";
    var app = angular.module("loginModule", ["ui.router"]);

    app.controller("loginController", ["$scope","$http","$state", function ($scope,$http,$state) {
        $scope.userInfo=[];
       $scope.signIn=function () {
           var phoneNum=$scope.userInfo.phoneNum;
           var psd=$scope.userInfo.passWord;
           console.log(phoneNum+"+"+psd);
           $state.go("tabs.usersAccountAdmin")
       }
    }]);
}());