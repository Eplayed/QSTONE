(function () {
    "use strict";
    var app = angular.module("activityManagementModule", []);
    app.controller("activityManagementController", ["$scope", "$state", "activityManagementService", "$rootScope",
        function ($scope, $state, activityManagementService, $rootScope) {
            $scope.activity = {};
            $scope.init = function () {
                $scope.currentSelectedActivityList = [
                    {
                        "date": "全部活动",
                        "type": "all"
                    },
                    {
                        "date": "推荐活动",
                        "type": "top"
                    }
                ]
                $scope.activity.currentSelected = $scope.currentSelectedActivityList[0];
            }
            $scope.create = function () {
                $state.go("tabs.activityManagement.create")
            }
            $scope.$watchGroup(['activity.currentSelected'], function (v) {
                if (v) {
                    if (v[0].type == "all") {
                        activityManagementService.getAllList().then(function (r) {
                            $scope.activityItemList = r.data.result;
                        }, function (r) {
                            console.log(r);
                        })
                    }
                    if (v[0].type == "top") {
                        activityManagementService.getTopList().then(function (r) {
                            $scope.activityItemList = r.data.result;
                        }, function (r) {
                            console.log(r);
                        })
                    }
                }
            });
            $scope.goToActivityItem = function (item) {
                $rootScope.actItem = item;
                $state.go("tabs.activityManagement.release")
            }
            $scope.init();
        }])


    app.controller("activityManagementCreateController", ["$scope", function ($scope) {
        $("[name='actIsTop']").bootstrapSwitch();
    }])

    app.controller("activityManagementReleaseController", ["$scope", "$rootScope","activityManagementService",
        function ($scope, $rootScope,activityManagementService) {
            $scope.init = function () {
                $scope.item = $rootScope.actItem;
                $scope.activityId= $scope.item.activityId;
                $("[name='actReleaseIsTop']").bootstrapSwitch();
            }
            $scope.init();
            $scope.del=function () {
                activityManagementService.delList($scope.activityId).then(function (r) {
                    console.log(r)
                },function (r) {
                    console.log(r)
                })
            }
        }])
}());

