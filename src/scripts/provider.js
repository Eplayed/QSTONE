(function () {
    "use strict";
    var app = angular.module("providerModule", ['ui.router']);
    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("login", {
                url: '/login',
                // template: "<h1>login</h1>",
                templateUrl: "login/login.html",
                //     templateProvider:function ($templateCache) {
                //         return $templateCache.get("login/login.html")
                //     },
                controller: "loginController"

            })
            .state('tabs', {
                url: "/tab",
                templateUrl: "/templates/main.html",
                controller: "mainController"
            })
        $urlRouterProvider.otherwise(function () {
            return "/login";
        })
    }])
}());
