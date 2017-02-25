/**
 * Created by evans on 2017/2/25.
 */

(function () {
    "use strict";
    var app = angular.module("advertisementCreateModule", []);
    app.controller("advertisementCreateController",["$scope","$rootScope","advertisementService"
        ,function ($scope,$rootScope,advertisementService) {
            $scope.init=function () {
                $("[name='isTop']").bootstrapSwitch();
                $scope.userId=$rootScope.userId;
            }
            $scope.init();
            $scope.create=function () {
                var input={};
                input.userId= $scope.userId;
                advertisementService.saveOrUpdate(input).then(function (r) {

                },function (r) {
                    
                })
            }
        }])
}());