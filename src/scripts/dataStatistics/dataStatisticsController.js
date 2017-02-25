(function () {
    "use strict";
    var app = angular.module("dataStatisticsModule", []);
    app.controller("dataStatisticsController", ["$scope", "dataStatisticsService",
        function ($scope, dataStatisticsService) {
            $scope.data = {};
            $scope.init = function () {
                $scope.data.currentSelected = $scope.currentSelectedList[0];
                setWrap()
            }
            function setWrap() {
                var bodyHeight = $(window).height();
                var bodyWidth = $(window).width();
                $('#container').height(bodyHeight-200);
                $('#container').width(bodyWidth-500);
            }
            window.onresize=function(){
                    setWrap()
            };
            $scope.currentSelectedList = [
                {
                    "date": "当日",
                    "type": "today"
                },
                {
                    "date": "总计",
                    "type": "all"
                }
            ]
            var title;
            var xAxis;
            function chats(title,xAxis,dueUserList,porbationUserList,sumUserList) {
                $('#container').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: title
                    },
                    xAxis: {
                        categories: xAxis
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: ''
                        },
                        stackLabels: {
                            enabled: true,
                            style: {
                                fontWeight: 'bold',
                                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                            }
                        }
                    },
                    legend: {
                        align: 'right',
                        x: -30,
                        verticalAlign: 'top',
                        y: 25,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                        borderColor: '#CCC',
                        borderWidth: 1,
                        shadow: false
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
                            stacking: 'normal',
                            dataLabels: {
                                enabled: true,
                                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                                style: {
                                    textShadow: '0 0 3px black'
                                }
                            }
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: '正式用户量',
                        data: dueUserList
                    },
                        {
                            name: '试用用户量',
                            data: porbationUserList
                        }, {
                            name: '已注册用户量',
                            data: sumUserList
                        }]
                });
            }
            $scope.$watchGroup(['data.currentSelected'], function (v) {
                if (v) {
                    var dueUserList = [];
                    var porbationUserList = [];
                    var sumUserList = [];

                    if (v[0].type == "all") {
                        title = "总计用户注册数量";
                        xAxis = ["总计用户注册数量"];
                        dataStatisticsService.getAllStatisticsList().then(function (r) {
                            console.log(r)
                            dueUserList.push(r.data.result.dueUser);
                            porbationUserList.push(r.data.result.porbationUser);
                            sumUserList.push(r.data.result.sumUser);
                            chats(title,xAxis,dueUserList,porbationUserList,sumUserList)
                        }, function (r) {
                            console.log(r)
                        })

                    }
                    if (v[0].type == "today") {
                        title = "当前用户注册数量";
                        xAxis = ["当前用户注册数量"];
                        dataStatisticsService.getTodayStatisticsList().then(function (r) {
                            console.log(r)
                            dueUserList.push(r.data.result.dueUser);
                            porbationUserList.push(r.data.result.porbationUser);
                            sumUserList.push(r.data.result.sumUser)
                            chats(title,xAxis,dueUserList,porbationUserList,sumUserList)
                        }, function (r) {
                            console.log(r);
                        })
                    }
                }

            });
            $scope.gotoCharts = function (item) {
                var tabs = "tabs.dataStatistics.";
                $state.go(tabs + item.type);
            }

            $scope.$on('$viewContentLoaded', function () {
                $scope.init();

            });

        }])
}());
