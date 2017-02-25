/**
 * Created by evans on 2017/2/24.
 */
/**
 * Created by zhangyajun on 2016/11/7.
 */
(function () {
    "use strict";
    var app = angular.module("advertisementServiceModule", []);
    app.factory('advertisementService', ["$http", "settings", "$rootScope", function ($http, settings, $rootScope) {
        function advertisementGetService() {
            this.getAdvList = function (userId) {
                return $http({
                    method: "post",
                    url: settings.advertisementUrl,
                    data: {
                        "userId": userId,
                    },

                    tracker: $rootScope.loadingTracker
                }).then(function (r) {
                    return r.data;
                }, function (r) {
                    throw r.data;
                })
            }
            this.saveOrUpdate = function (input) {
                return $http({
                    method: "post",
                    url: settings.advertisementCreateOrUpdateUrl,
                    data: {
                        "userId": input.userId,
                        "proTitle": input.proTitle,
                        "proNames": input.proNames,
                        "proType": input.proType,
                        "status": input.status,
                        "Priority": input.Priority,
                        "deadline": input.deadline
                    },

                    tracker: $rootScope.loadingTracker
                }).then(function (r) {
                    return r.data;
                }, function (r) {
                    throw r.data;
                })
            }
        }

        return new advertisementGetService();
    }])
}());