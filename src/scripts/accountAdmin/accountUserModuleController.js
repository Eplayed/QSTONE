/**
 * Created by zhangyajun on 2016/11/8.
 */
(function () {
    "use strict";
    var app = angular.module("accountUserModule", []);
    app.controller("accountUserController", ["$scope", "$stateParams", function ($scope, $stateParams) {
        var id = $stateParams.id;
        var list = $scope.$parent.accountList;
        angular.forEach(list,function (data) {
            if(id==data.id){
                $scope.userList=data;
                return;
            }
        })
    }])
}());