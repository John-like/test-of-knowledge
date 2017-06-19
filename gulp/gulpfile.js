var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');


var browserify = require('browserify');
var source = require('vinyl-source-stream');


// 编译并压缩js
gulp.task('convertJS', function(){
	 gulp.src('app/js/app.js')
    .pipe(babel({
      presets: ['es2015']
    }))
//  .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
})
// 合并并压缩css
gulp.task('convertCSS', function(){
 	 gulp.src('css/*.css')
    .pipe(concat('all.css'))
    .pipe(cleanCSS())
  .pipe(rename(function(path){
    path.basename += '.min';
  }))
    .pipe(gulp.dest('dist/css'));
})


// browserify
gulp.task("browserify", function () {
    var b = browserify({
        entries: "dist/js/app.js"
    });

    return b.bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist/js/bundle.js"));
});

gulp.task('watch',function(){
	gulp.watch('app/js/*.js',['convertJS','browserify']);
	gulp.watch('app/css/*.css',['convertCSS']);
	
})
var problem='aaa'
gulp.task('can',function(){
	console.log(problem)
})

gulp.task('start',['convertCSS','can','convertJS','browserify','watch']);
