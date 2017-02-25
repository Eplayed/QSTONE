/**
 * Created by zhangyajun on 2016/11/7.
 */
(function () {
    "use strict";
    var app = angular.module("loginServiceModule", []);
    app.factory('loginService',["$http","settings","$rootScope",function ($http,settings,$rootScope) {
        function loginInService() {
            this.login=function (username,password) {
                return $http({
                    method:"post",
                    url:settings.loginUrl,
                    data:{
                        "username":username,
                        "password":password
                    },

                    tracker:$rootScope.loadingTracker
                }).then(function (r) {
                    return r.data;
                },function (r) {
                    throw r.data;
                })
            }
        }
        return new loginInService();
    }])
}());