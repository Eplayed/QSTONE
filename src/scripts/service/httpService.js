/**
 * Created by zhangyajun on 2016/11/4.
 */
(function () {
    "use strict";
    var baseUrl = "/qstone/"
    angular.module("settingsModule", [])
        .constant("settings", {
            loginUrl: baseUrl + "user/login",
            // 广告
            advertisementUrl:baseUrl+"supplys/paginateSupply",
            advertisementCreateOrUpdateUrl:baseUrl+"supplys/saveOrUpdate",
            // 统计
            allStatisticsUrl:baseUrl+"count/sum",
            todayStatisticsUrl:baseUrl+"count/todaySum",
            // 活动
            allActivityUrl:baseUrl+"activity/listAll",
            topActivityUrl:baseUrl+"activity/topList",
            delActivityUrl:baseUrl+"activity/del"


        });
}());