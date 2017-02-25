/**
 * Created by evans on 2017/2/24.
 */
(function () {
    "use strict";
    var app = angular.module("advertisementReleaseModule", []);
    app.controller("advertisementReleaseController",["$scope","$rootScope"
        ,function ($scope,$rootScope) {
            $scope.init=function () {
                $scope.item = $rootScope.advItem;

            }
            $scope.init();
            $scope.del=function () {
                
            }
        }])
}());