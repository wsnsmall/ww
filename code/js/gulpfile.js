var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS
	minifyCSS: true //压缩页面CSS
}

var gulp = require("gulp");
var uglify = require("gulp-uglify");
gulp.task("jsTask",function(){
	gulp.src("myplane.js")
	.pipe(uglify())
	.pipe(gulp.dest("test"))
});
gulp.task("default",["jsTask"]);

//var gulp = require('gulp');  
//var babel = require('gulp-babel');  
//var config={  
//  es6file:'*.js',  
//  es5file:'test/'  
//};  
//gulp.task('es6', function () {  
//  return gulp.src(config.es6file)  
//      .pipe(babel({  
//          presets: ['es2015']  
//      }))  
//        .pipe(uglify())  
//      .pipe(gulp.dest(config.es5file));  
//});  
//gulp.task('default', ['es6'], function () {  
//  
//});  
