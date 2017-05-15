/**
 * Created by 宇欣 on 2017/5/15.
 */
var gulp=require("gulp");
var less = require("less");
var cleancss = require("gulp-clean-css");
var plugins = require("gulp-load-plugins")();
// var dist =
gulp.task("show",function () {
    console.log("hello gulp");
})
gulp.task('myless',function () {
    gulp.src('app/style/*.less')
        .pipe(plugins.less())
        .pipe(gulp.dest('app/style/'));
});
gulp.task("mywatch",function () {
    gulp.watch("app/style/*.less",["myless"])
});
/*当改变代码的时候无刷新改变网页*/
gulp.task("dist",function () {
    gulp.watch("login.html",['serve']);
    /*当改变less文件的时候自动重新编译less文件*/
    // gulp.watch("style/*.less",['less']);//编译和压缩CSS文件
    // gulp.watch("/script/*.js",["concatjs"]);//压缩JS文件
});