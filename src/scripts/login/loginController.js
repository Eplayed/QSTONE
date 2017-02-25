(function () {
    "use strict";
    var app = angular.module("loginModule", ["ui.router"]);

    app.controller("loginController", ["$scope","$http","$state","loginService","$rootScope",
        function ($scope,$http,$state,loginService,$rootScope) {
        $scope.userInfo=[];
       $scope.signIn=function () {
           var phoneNum=$scope.userInfo.phoneNum;
           var psd=$scope.userInfo.passWord;
           loginService.login(phoneNum,psd).then(function (r) {
               if(r.result.res=="success"){
                   $rootScope.userId=r.result.userId;
                   $state.go("tabs.usersAccountAdmin",{userId:r.result.userId})
               }
           },function (r) {
               console.log(r);
               alert(r);
           })


       }
    }]);
}());