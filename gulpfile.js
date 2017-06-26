var gulp = require("gulp");
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var download = require("gulp-download");

gulp.task('compress', function () {
    gulp.src('src/*.js').pipe(minify({
            ext: {
                min: '.min.js',
                noSource:true
            }
        })).pipe(concat('rsat.ui.elements.min.js'))
        .pipe(gulp.dest('dist'))

    //move css file material.indigo-pink.min.css
    gulp.src('src/*.css')
        .pipe(concat('rsat.ui.elements.min.css'))
        .pipe(gulp.dest('dist'))

});


gulp.task('default', ['compress']);

