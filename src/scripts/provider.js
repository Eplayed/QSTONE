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
                templateUrl: "main.html",
                controller: "mainController",
                abstract: true
            })
            .state('tabs.usersAccountAdmin', {
                url: "/usersAccountAdmin",
                views: {
                    'mainView': {
                        templateUrl: "accountAdmin.html"

                    }
                }
            })
            .state('tabs.advertisementAdmin', {
                url: "/advertisementAdmin",
                views: {
                    'mainView': {
                        templateUrl: "advertisement.html"

                    }
                }
            })
        $urlRouterProvider.otherwise(function () {
            return "/login";
        })
    }])
}());
