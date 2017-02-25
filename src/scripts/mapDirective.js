/**
 * Created by evans on 2017/2/25.
 */
(function () {
    "use strict";
    var app=angular.module("mapModule",[]);
    app.directive("appMap", function ($rootScope) {
        return {
            restrict: "E",
            replace: true,
            template: "<div id='allMap'></div>",
            link: function (scope, element, attrs) {
                var long=$rootScope.actItem.long;
                var latitude=$rootScope.actItem.latitude
                // 百度地图API功能
                var map = new BMap.Map("allMap");
                // 创建地址解析器实例
                var point = new BMap.Point(long, latitude);
                map.centerAndZoom(point, 17);
                // var marker = new BMap.Marker(point);
                // map.addOverlay(marker);
                // var opts = {
                //     width: 200,
                //     height: 100,
                //     title: title
                // }
                // var infoWindow = new BMap.InfoWindow('地址：'+address, opts)
                // marker.addEventListener('click', function () {
                //     map.openInfoWindow(infoWindow, point);
                // });
                // 将地址解析结果显示在地图上,并调整地图视野

            }
        };
    });
})