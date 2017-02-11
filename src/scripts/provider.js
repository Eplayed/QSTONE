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
                        templateUrl: "accountAdmin/accountAdmin.html",
                        controller:"accountAdminController"

                    }
                }
            })
            .state('tabs.usersAccountAdmin.user', {
                url: "/user/:id",
                views: {
                    'accountView': {
                        templateUrl: "accountAdmin/accountUserModule.html",
                        controller:"accountUserController"
                    }
                }
            })
            .state('tabs.advertisementAdmin', {
                url: "/advertisementAdmin",
                views: {
                    'mainView': {
                        templateUrl: "advertisement/advertisement.html"


                    }
                }
            })
            .state('tabs.advertisementAdmin.release', {
                url: "/release",
                views: {
                    'advertisemenView': {
                        templateUrl: "advertisement/advertisement.release.html"


                    }
                }
            })
            .state('tabs.advertisementAdmin.del', {
                url: "/del",
                views: {
                    'advertisemenView': {
                        templateUrl: "advertisement/advertisement.del.html"


                    }
                }
            })

            .state('tabs.dataStatistics', {
                url: "/dataStatistics",
                views: {
                    'mainView': {
                        templateUrl: "dataStatistics/dataStatistics.html",
                        controller:"dataStatisticsController"


                    }
                }
            })
            .state('tabs.administration', {
                url: "/administration",
                views: {
                    'mainView': {
                        templateUrl: "administration/administration.html"


                    }
                }
            })
            .state('tabs.dataStatistics.today', {
                url: "/today",
                views: {
                    'chartsView': {
                        templateUrl: "dataStatistics/dataStatistics.today.html"


                    }
                }
            })
        $urlRouterProvider.otherwise(function () {
            return "/login";
        })
    }])
}());
