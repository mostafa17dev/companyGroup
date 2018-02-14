var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');


//4 files
var usedJSFiles = [
    'js/jquery.min.js',
    'js/bootstrap.min.js',
    'js/bootstrap-tabcollapse.js',
    'js/scripts.js'
  ];

var sassFile = 'scss/styles.scss';

gulp.task('scripts', function(){
    gulp.src(usedJSFiles)
    .pipe(concat('scripts.min.js')) // concatenated files name
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function(){
    sass(sassFile)
    .on('error', sass.logError)
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
    gulp.watch(sassFile,['sass'])
});

gulp.task('default', ['scripts']);
