/**
 * Created by zhangyajun on 2016/10/17.
 */
(function () {
    "use strict";
    var app = angular.module("QSTONE", ["providerModule", "loginModule", "templates",
        "settingsModule", "ajoslin.promise-tracker", "loginServiceModule", "accountAdminModule",
        "accountUserModule","dataStatisticsModule"]);

    app.run(["$rootScope", "promiseTracker", function ($rootScope, promiseTracker) {
        $rootScope.loadingTracker = promiseTracker();
    }])
    app.controller("mainController", ["$scope", "$state", function ($scope, $state) {
        $scope.list = [
            {
                "name": "用户账号管理",
                "type": "usersAccountAdmin"
            },
            {
                "name": "广告管理",
                "type": "advertisementAdmin"
            },
            {
                "name": "数据统计",
                "type": "dataStatistics"
            },
            {
                "name": "活动管理"
            },
            {
                "name": "管理员账号管理",
                "type": "administration"
            }
        ];
        $scope.gotoAdmin = function (item) {
            var tabs = "tabs.";
            $state.go(tabs + item.type);
        }
    }]);
}());