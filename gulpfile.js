/// <binding BeforeBuild='min' Clean='clean' />
"use strict";
var gulp = require("gulp"),
    bower = require("gulp-bower"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    es = require("event-stream"),
    templateCache = require("gulp-angular-templatecache"),
    urlAdjuster = require("gulp-css-url-adjuster"),
    minifyHTML = require("gulp-minify-html"),
    webServer = require('gulp-webServer'),
    gulpsync = require('gulp-sync')(gulp),
    utf8Convert = require('gulp-utf8-convert');

var srcroot = "./src/";
var webroot = "./www/";
var bowerroot = "./bower_components/";

var paths = {
    loginjs: webroot + "login.js",
    appjs: webroot + "app.js",
    libjs: webroot + "lib.js",
    momentjs: webroot + "moment.js",
    appcss: webroot + "app.css"
};


gulp.task("bower", function () {
    return bower({}, "--force-latest");
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);


function getTemplateStream() {
    var opts = {
        conditionals: true,
        spare: true
    };

    return gulp.src([srcroot + "partials/**/*.html"])
        .pipe(minifyHTML(opts))
        .pipe(templateCache("templates.js", {
            "standalone": true,
            templateHeader: "(function(){angular.module(\"templates\",[]).run([\"$templateCache\", function($templateCache){",
            templateFooter: "}]);}());"
        }));
}

gulp.task("min:img", function () {
    return gulp.src(srcroot + "img/**").pipe(gulp.dest(webroot + "img"));
});

gulp.task("min:html", function () {
    return es.merge(
        gulp.src([
            srcroot + "index.html"
        ])
            .pipe(minifyHTML({
                conditionals: true,
                spare: true
            }))
            .pipe(utf8Convert())
            .pipe(gulp.dest(webroot)));
});

gulp.task("min:js", function () {
    return es.merge(
        gulp.src([
            bowerroot + "jquery/dist/jquery.js",
            bowerroot + "es6-shim/es6-shim.js",
            bowerroot + "angular/angular.js",
            bowerroot + "angular-ui-router/release/angular-ui-router.js",
            bowerroot + "angular-mocks/angular-mocks.js",
            bowerroot + "angular-native-picker/build/angular-datepicker.js",
            bowerroot + "angular-promise-tracker/promise-tracker.js",
            bowerroot + "angular-promise-tracker/promise-tracker-http-interceptor.js",
            bowerroot + "bootstrap/dist/js/bootstrap.js"
        ], {base: "."})
            .pipe(concat(paths.libjs))
            //.pipe(uglify())
            .pipe(gulp.dest(".")),

        es.merge(gulp.src([
                srcroot + "scripts/**/*.js", "!" + srcroot + "scripts/login.js"
            ], {base: "."})
            , getTemplateStream()
        )
            .pipe(concat(paths.appjs))
            //.pipe(uglify())
            .pipe(utf8Convert())
            .pipe(gulp.dest(".")
            ),

        es.merge(gulp.src([
                bowerroot + "moment/src/moment.js"
            ], {base: "."})
            , getTemplateStream()
        )
            .pipe(concat(paths.momentjs))
            .pipe(gulp.dest("."))
    );
});

gulp.task("min:css", function () {
    return es.merge(
        gulp.src([
            bowerroot + "bootstrap/dist/css/bootstrap.css",
            bowerroot + "bootstrap/dist/css/bootstrap-theme-css",
            bowerroot + "font-awesome/font-awesome.css",
            bowerroot + "angular-native-picker/build/themes/default.css",
            bowerroot + "angular-native-picker/build/themes/default.date.css",
        ])
            .pipe(urlAdjuster({replace: ["../fonts/", "fonts/"]})),
        gulp.src([
            srcroot + "css/index.css",
            srcroot + "css/login.css"
        ]))
        .pipe(concat(paths.appcss))
        //.pipe(cssmin())
        .pipe(gulp.dest("."));
});


// gulp.task("min:font", function () {
//     return gulp.src([
//         bowerroot + "ionic/release/fonts/ionicons.ttf",
//         bowerroot + "ionic/release/fonts/ionicons.eot",
//         bowerroot + "ionic/release/fonts/ionicons.svg",
//         bowerroot + "ionic/release/fonts/ionicons.woff",
//         srcroot + "fonts/kei.ttf",
//         srcroot + "fonts/kei.eot",
//         srcroot + "fonts/kei.svg",
//         srcroot + "fonts/kei.woff"
//     ])
//         .pipe(gulp.dest(webroot + "fonts"));
// });


gulp.task("min", ["min:js", "min:css", "min:html", "min:img"]);

gulp.task("watch", function () {
    gulp.watch("./src/scripts/**/*.js", ["min:js"]);
    gulp.watch("./src/partials/**/*.html", ["min:js"]);
    gulp.watch("./src/css/*.*", ["min:css"]);
    gulp.watch("./src/*.html", ["min:html"]);
});

gulp.task("webServer", function () {
    gulp.src("./www")
        .pipe(webServer({
            root: "dist",
            port: 8002,
            livereload: true,
            path: "/",
            fallback: "index.html",
            open: "http://localhost:8002/"
        }));
});

gulp.task("startDebugServer", gulpsync.sync(["min", ["webServer", "watch"]]));

