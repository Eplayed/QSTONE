/**
 * Created by zhangyajun on 2016/10/17.
 */
(function () {
    "use strict";
    var app = angular.module("QSTONE", ["providerModule", "loginModule", "templates",
        "settingsModule","ajoslin.promise-tracker","loginServiceModule","accountAdminModule",
    "accountUserModule"]);

    app.run(["$rootScope","promiseTracker",function ($rootScope,promiseTracker) {
        $rootScope.loadingTracker = promiseTracker();
    }])
    app.controller("mainController", ["$scope","$state", function ($scope,$state) {
        $scope.list = [
            {
                "name": "用户账号管理",
                "type":"usersAccountAdmin"
            },
            {
                "name": "广告管理",
                "type":"advertisementAdmin"
            },
            {
                "name": "数据统计"
            },
            {
                "name": "活动管理"
            },
            {
                "name": "管理员账号管理"
            }
        ];
        $scope.gotoAdmin = function (type) {
            var tabs="tabs.";
            switch (type){
                case "usersAccountAdmin":
                    $state.go(tabs+type);
                    break;
                case "advertisementAdmin":
                    $state.go(tabs+type);
                    break;

            }

        }
    }]);
}());