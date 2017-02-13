/**
 * Created by zhangyajun on 2016/10/17.
 */
(function () {
    "use strict";
    var app = angular.module("QSTONE", ["providerModule", "loginModule", "templates",
        "settingsModule", "ajoslin.promise-tracker", "loginServiceModule", "accountAdminModule",
        "accountUserModule","dataStatisticsModule","activityManagementModule"]);

    app.run(["$rootScope", "promiseTracker", function ($rootScope, promiseTracker) {
        $rootScope.loadingTracker = promiseTracker();
    }])
    app.controller("mainController", ["$scope", "$state", function ($scope, $state) {
        $scope.list = [
            {
                "name": "用户账号管理",
                "type": "usersAccountAdmin",
                "id":0
            },
            {
                "name": "广告管理",
                "type": "advertisementAdmin",
                "id":1
            },
            {
                "name": "数据统计",
                "type": "dataStatistics",
                "id":2
            },
            {
                "name": "活动管理",
                "type": "activityManagement",
                "id":3
            },
            {
                "name": "管理员账号管理",
                "type": "administration",
                "id":4
            }
        ];
    }]);
}());