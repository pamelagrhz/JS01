var gulp = require("gulp"),
    pug = require("gulp-pug"),
    autoprefixer = require("gulp-autoprefixer"),
    sass = require("gulp-sass"),
    browsersync = require('browser-sync');
gulp.task("pug", function() {
    return gulp
        .src("./src/pug/*.pug")
        .pipe(
            pug({
                doctype: "html",
                pretty: true,
            })
        )
        .pipe(gulp.dest("dist/"));
});
gulp.task("sass", function() {
    return gulp
        .src("./src/sass/*")
        .pipe(
            sass({
                sourceComments: true,
            })
        )
        .pipe(sass())
        .pipe(
            autoprefixer({
                browsers: ["last 2 version"],
            })
        )
        .pipe(gulp.dest("./dist/css"));
});
gulp.task('browserSync', function() {
    browsersync.init({
        server: {
            baseDir: "dist/"
        }
    });
});
gulp.task("watch", function() {
    gulp.watch("./src/sass/*", ["sass", browsersync.reload]);
    gulp.watch("./src/pug/*", ["pug", browsersync.reload]);
});
gulp.task("default", ["sass", "pug", "browserSync", "watch"]);