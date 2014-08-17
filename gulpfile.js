var gulp     = require('gulp'),
    beep     = require('beepbeep'),
    plumber  = require('gulp-plumber'),
    sass     = require('gulp-ruby-sass'),
    prefix   = require('gulp-autoprefixer'),
    rimraf   = require('gulp-rimraf'),
    colors   = require('colors'),
    scsslint = require('gulp-scss-lint');

// Compile Sass with Source Maps
gulp.task('sass-dev', ['scss-lint'], function () {

    console.log('[sass]'.bold.magenta + ' Compiling Sass');

    return gulp.src('./app/scss/*.scss')
        .pipe(plumber(function () {
            beep();
            console.log('[sass]'.bold.magenta + ' There was an issue compiling Sass\n'.bold.red);
            this.emit('end');
        }))
        .pipe(sass({
            sourcemap: true,
            sourcemapPath: '../scss',
            style: 'compressed',
            precision: 4
        }))
        .pipe(prefix())
        .pipe(gulp.dest('./app/css'));
});

// Lint Sass files
gulp.task('scss-lint', function() {

    console.log('[sass]'.bold.magenta + ' Compiling Sass');

    return gulp.src(['./app/scss/**/*.scss', '!./app/scss/vendor/**/*.scss'])
        .pipe(scsslint());
});

// Watch files for changes
gulp.task('watch', function () {

    console.log('[watch]'.bold.magenta + ' Watching Sass files for changes');

    // gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('./app/scss/**/*.scss', ['sass-dev']);

});

gulp.task('dev', ['sass-dev', 'watch'], function () {
    return console.log('\n[dev]'.bold.magenta + ' Ready for you to start doing things\n'.bold.green);
});
