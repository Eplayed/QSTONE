/**
 * Created by zhangyajun on 2016/10/17.
 */
(function () {
    "use strict";
    var app = angular.module("QSTONE", ["providerModule","loginModule","templates"]);

    app.controller("mainController", ["$scope", function ($scope) {
        $scope.name = "lihai";
    }]);
}());