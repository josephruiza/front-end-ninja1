///////comentarios

var gulp = require('gulp');	//importamos gulp
var sass = require('gulp-sass');

//definimos la tarea por defecto
gulp.task("default", function(){
	gulp.watch('./src/scss/style.scss', ['compile-sass']);	//con watch dejamos alguien vigilando para actualizar los cambios
});

//definimos la tarea por defecto
gulp.task("compile-sass", function(){
	gulp.src('./src/scss/style.scss')						//cargo el fichero style.scss
	.pipe(sass().on('error', sass.logError))		//compilo con sass
	.pipe(gulp.dest('./dist/'));							//genero el fichero style.css en ./
});