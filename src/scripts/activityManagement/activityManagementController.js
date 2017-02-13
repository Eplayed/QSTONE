(function () {
    "use strict";
    var app = angular.module("activityManagementModule", []);
    app.controller("activityManagementController", ["$scope", "$stateParams", function ($scope, $stateParams) {
    $scope.activityData=[
        {
            "name":"活动编号",
            "cont":"dhjkwioh1223456123"
        },
        {
            "name":"活动主题",
            "cont":"papap"
        },
        {
            "name":"男生参加人数",
            "cont":"12人"
        },
        {
            "name":"女生参加人数",
            "cont":"8人"
        },
        {
            "name":"位置信息",
            "cont":"sign"
        },
        {
            "name":"可参加距离限制",
            "cont":"50M？"
        },
        {
            "name":"活动发布有效时间",
            "cont":"20：00"
        },
        {
            "name":"信用等级限制",
            "cont":"AA（以上）"
        },
        {
            "name":"活动发布人",
            "cont":"梁晓"
        },
        {
            "name":"活动发布时间",
            "cont":"12：00"
        },
        {
            "name":"活动状态",
            "cont":"已发布"
        },
        {
            "name":"所属板块",
            "cont":"公共活动"
        },


    ]
    }])
}());

