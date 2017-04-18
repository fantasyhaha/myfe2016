var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('test',function(){
	console.log('haha');
});

gulp.task('test2',function(){
	console.log('hengheng');
});

gulp.task('default',['test','test2']);

gulp.task('test1',function(){
	gulp.src('index.html').pipe(gulp.dest('dest')).pipe(connect.reload());
});

gulp.task('copy-img',function(){
	gulp.src('images/*.jpg').pipe(gulp.dest('dest/img'));

});
//检测HTML变化
gulp.task('watch',function(){
	gulp.watch('index.html',['test1']);
	gulp.watch('src/sass/*.scss',['sass']);
});

gulp.task('sass',function(){
	gulp.src('src/sass/*.scss').pipe(sass()).pipe(gulp.dest('dest/css')).pipe(connect.reload());
});

gulp.task('servers',function(){
	connect.server({
		root:'dest',
		livereload:true
	})
});

gulp.task('a',['servers','watch']);






