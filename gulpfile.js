const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')

function dist()
{
    return gulp.src('./src/dev/*.scss')
    .pipe(sass({outPutStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

function images()
{
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(dist, images)

exports.watch = function()
{
    gulp.watch('./src/dev/*.scss', gulp.parallel(dist))
}