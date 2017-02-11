(function () {
    "use strict";
    var app = angular.module("dataStatisticsModule", []);
    app.controller("dataStatisticsController", ["$scope", "$stateParams", function ($scope, $stateParams) {
        $scope.data=[
            {
                "name":"当日用户注册总量",
                "type":"today"
            },
            {
                "name":"当日试用用户注册总量",
                "type":"try"
            },
            {
                "name":"当日正式用户注册总量",
                "type":"formal"
            },
            {
                "name":"当日用户登陆总量",
                "type":"login"
            },
            {
                "name":"当日用户签到总量",
                "type":"sign"
            },
            {
                "name":"当日用户发布总量",
                "type":"release"
            },
            {
                "name":"当日用户参与总量",
                "type":"join"
            },
        ]
        $scope.gotoCharts=function (item) {
            var tabs = "tabs.dataStatistics.";
            $state.go(tabs + item.type);
        }

        $scope.$on('$viewContentLoaded', function() {
            $('#container').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Total fruit consumtion, grouped by gender'
                },
                xAxis: {
                    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    title: {
                        text: 'Number of fruits'
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            'Total: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    }
                },
                series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2],
                    stack: 'male'
                }, {
                    name: 'Joe',
                    data: [3, 4, 4, 2, 5],
                    stack: 'male'
                }, {
                    name: 'Jane',
                    data: [2, 5, 6, 2, 1],
                    stack: 'female'
                }, {
                    name: 'Janet',
                    data: [3, 0, 4, 4, 3],
                    stack: 'female'
                }]
            });
        });

    }])
}());
