var gulp = require('gulp');
var rev = require('gulp-rev');

gulp.task('pack-assets', function(){
	return gulp.src(['dev/assets/*.png'])
		   .pipe(gulp.dest('build/assets'));
});
gulp.task('pack-css', function(){
	return gulp.src(['dev/css/*.css'])
	       .pipe(concat('stylesheet.css'))
		   .pipe(gulp.dest('build/css'));
});
gulp.task('pack-js', function(){
	return gulp.src(['dev/js/*.js'])
	// using gulp-rev
	       .pipe(rev())
		   .pipe(gulp.dest('build/js'))
		   .pipe(rev.manifest())
		   .pipe(gulp.dest('build'))
});
gulp.task('pack-html', function(){
	return gulp.src(['dev/index.html'])
		   .pipe(gulp.dest('build'));
});


gulp.task('default', ['pack-assets', 'pack-css', 'pack-js', 'pack-html']);
