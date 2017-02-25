/**
 * Created by evans on 2017/2/24.
 */
(function () {
    "use strict";
    var app = angular.module("dataStatisticsServiceModule", []);
    app.factory('dataStatisticsService',["$http","settings","$rootScope",function ($http,settings,$rootScope) {
        function dataStatisticsGetService() {
            this.getAllStatisticsList=function () {
                return $http({
                    method:"get",
                    url:settings.allStatisticsUrl,
                    tracker:$rootScope.loadingTracker
                }).then(function (r) {
                    return r;
                },function (r) {
                    throw r;
                })
            }
            this.getTodayStatisticsList=function () {
                return $http({
                    method:"get",
                    url:settings.todayStatisticsUrl,
                    tracker:$rootScope.loadingTracker
                }).then(function (r) {
                    return r;
                },function (r) {
                    throw r;
                })
            }
        }
        return new dataStatisticsGetService();
    }])
}());