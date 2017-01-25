///////comentarios

var gulp = require('gulp');	//importamos gulp
var sass = require('gulp-sass');

//definimos la tarea por defecto
gulp.task("default", function(){
	console.log("hello world!!!");
});

//definimos la tarea por defecto
gulp.task("compile-sass", function(){
	gulp.src('./style.scss')			//cargo el fichero style.scss
	.pipe(sass())						//compilo con sass
	.pipe(gulp.dest('./'));				//genero el fichero style.css en ./
});