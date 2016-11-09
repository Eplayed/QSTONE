(function () {
    "use strict";
    var app = angular.module("loginModule", ["ui.router"]);

    app.controller("loginController", ["$scope","$http","$state","loginService", function ($scope,$http,$state,loginService) {
        $scope.userInfo=[];
       $scope.signIn=function () {
           var phoneNum=$scope.userInfo.phoneNum;
           var psd=$scope.userInfo.passWord;
           console.log(phoneNum+"+"+psd);
           loginService.login(phoneNum,psd).then(function (r) {
               console.log(r);
           })
           // $state.go("tabs.usersAccountAdmin")
       }
    }]);
}());