(function () {
    "use strict";
    var app = angular.module("activityManagementServiceModule", []);
    app.factory('activityManagementService',["$http","settings","$rootScope",function ($http,settings,$rootScope) {
        function activityManagementGetService() {
            this.getAllList=function () {
                return $http({
                    method:"get",
                    url:settings.allActivityUrl,
                    tracker:$rootScope.loadingTracker
                }).then(function (r) {
                    return r;
                },function (r) {
                    throw r;
                })
            }
            this.getTopList=function () {
                return $http({
                    method:"get",
                    url:settings.topActivityUrl,
                    tracker:$rootScope.loadingTracker
                }).then(function (r) {
                    return r;
                },function (r) {
                    throw r;
                })
            }
            this.delList=function (activityId) {
                return $http({
                    method:"get",
                    url:settings.delActivityUrl+"?activityId="+activityId,
                    tracker:$rootScope.loadingTracker
                }).then(function (r) {
                    return r;
                },function (r) {
                    throw r;
                })
            }
        }
        return new activityManagementGetService();
    }])
}());