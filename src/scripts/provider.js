(function () {
    "use strict";
    var app = angular.module("providerModule", ['ui.router',"ngAnimate"]);
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
                url: "/usersAccountAdmin/:userId",
                views: {
                    'mainView': {
                        templateUrl: "accountAdmin/accountAdmin.html",
                        controller:"accountAdminController"

                    }
                }
            })
            .state('tabs.usersAccountAdmin.user', {
                url: "/user",
                views: {
                    'accountView': {
                        templateUrl: "accountAdmin/accountUserModule.html",
                        controller:"accountUserController"
                    }
                }
            })
            .state('tabs.advertisementAdmin', {
                url: "/advertisementAdmin/:userId",
                views: {
                    'mainView': {
                        templateUrl: "advertisement/advertisement.html",
                        controller:"advertisementController"
                    }
                }
            })
            .state('tabs.advertisementAdmin.release', {
            url: "/release",
            views: {
                'advertisemenView': {
                    templateUrl: "advertisement/advertisement.release.html",
                    controller:"advertisementReleaseController"


                }
            }
        })
            // .state('tabs.advertisementAdmin.release', {
            //     url: "/release",
            //     views: {
            //         'advertisemenView': {
            //             templateUrl: "advertisement/advertisement.release.html"
            //
            //
            //         }
            //     }
            // })
            .state('tabs.advertisementAdmin.create', {
                url: "/create",
                views: {
                    'advertisemenView': {
                        templateUrl: "advertisement/advertisement.create.html",
                        controller:"advertisementCreateController"


                    }
                }
            })

            .state('tabs.dataStatistics', {
                url: "/dataStatistics/:userId",
                views: {
                    'mainView': {
                        templateUrl: "dataStatistics/dataStatistics.html",
                        controller:"dataStatisticsController"


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
            .state('tabs.administration', {
                url: "/administration/:userId",
                views: {
                    'mainView': {
                        templateUrl: "administration/administration.html"


                    }
                }
            })
            .state('tabs.activityManagement', {
                url: "/activityManagement/:userId",
                views: {
                    'mainView': {
                        templateUrl: "activityManagement/activityManagement.html",
                        controller:"activityManagementController"


                    }
                }
            })
            .state('tabs.activityManagement.create', {
                url: "/create",
                views: {
                    'activityView': {
                        templateUrl: "activityManagement/activityManagement-create.html",
                        controller:"activityManagementCreateController"


                    }
                }
            })
            .state('tabs.activityManagement.release', {
                url: "/release",
                views: {
                    'activityView': {
                        templateUrl: "activityManagement/activityManagement-release.html",
                        controller:"activityManagementReleaseController"


                    }
                }
            })

        $urlRouterProvider.otherwise(function () {
            return "/login";
        })
    }])
}());
