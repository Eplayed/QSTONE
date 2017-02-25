/**
 * Created by evans on 2017/2/19.
 */
/**
 * Created by zhangyajun on 2016/11/8.
 */
(function () {
    "use strict";
    var app = angular.module("advertisementModule", []);
    app.controller("advertisementController",["$scope","$stateParams","advertisementService","$rootScope","$state"
        ,function ($scope,$stateParams,advertisementService,$rootScope,$state) {
        $scope.init=function () {

            var userId=String($rootScope.userId);
            $scope.getAdvertisementList(userId);

        }
        $scope.goToAdvertisementItem=function (item) {
            $rootScope.advItem=item;
            $state.go("tabs.advertisementAdmin.release")
        }
        $scope.getAdvertisementList=function (userId) {
           return advertisementService.getAdvList(userId).then(function (r) {
                console.log(r.result);
                $scope.advertisementItemList=r.result
            },function (r) {

            })
        }
        $scope.init();
    }])
}());