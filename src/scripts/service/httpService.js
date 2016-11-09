/**
 * Created by zhangyajun on 2016/11/4.
 */
(function () {
    "use strict";
    var baseUrl = "http://localhost:8080/qstone/"
    angular.module("settingsModule", [])
        .constant("settings", {
            loginUrl: baseUrl + "user/login"
        });
}());