///////comentarios

var gulp = require('gulp');	//importamos gulp
var sass = require('gulp-sass');
var notify = require('gulp-notify');

//definimos la tarea por defecto
gulp.task("default", ["compile-sass"], function(){	//ejecutará previamente las tareas entre []
	gulp.watch('./src/scss/style.scss', ['compile-sass']);	//con watch dejamos alguien vigilando para actualizar los cambios
});

//definimos la tarea por defecto
gulp.task("compile-sass", function(){
	gulp.src('./src/scss/style.scss')				//cargo el fichero style.scss
	.pipe(sass().on('error', function(error){
		return notify().write(error);
	}))		//compilo con sass
	.pipe(gulp.dest('./dist/'))						//genero el fichero style.css en ./
	.pipe(notify("SASS Compilado"));				//nos muestra notificaciones de escritorio
});