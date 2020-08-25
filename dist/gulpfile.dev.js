"use strict";

var gulp = require("gulp"),
    pug = require("gulp-pug"),
    autoprefixer = require("gulp-autoprefixer"),
    sass = require("gulp-sass");

gulp.task("pug", function () {
  return gulp.src("./src/pug/*.pug").pipe(pug({
    doctype: "html",
    pretty: true
  })).pipe(gulp.dest("dist/"));
});
gulp.task("sass", function () {
  return gulp.src("./src/sass/*").pipe(sass({
    outputStyle: "expended",
    sourceComments: true
  })).pipe(sass()).pipe(autoprefixer({
    browsers: ["last 2 version"]
  })).pipe(gulp.dest("./dist/css"));
});
gulp.task("watch", function () {
  gulp.watch("./src/sass/*", ["sass"]);
  gulp.watch("./src/pug/*", ["pug"]);
});
gulp.task("default", ["sass", "pug"]);