const gulp = require('gulp');
const { series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync');
const del = require('del')

function js() {
    return gulp
        .src('./main.js')
        .pipe(browserSync.reload({ stream: true }))
}

function browserSyncFunction() {
    browserSync({
        server: {
            baseDir: __dirname + '/'
        },
        notify: false
    })
}

gulp.task("cssAsync", function () {
    // return gulp
    //     .src('**/*.scss')
    //     .pipe(sass())
    //     .pipe(gulp.dest('/'))
    //     .pipe(browserSync.reload({ stream: true }))    
})

function css() {
    return gulp
        .src('**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./styles/'))
        .pipe(browserSync.reload({ stream: true }))
}

function reloadForHtml() {
    return gulp
        .src('/')
        .pipe(browserSync.reload({ stream: true }))
}

function watchFiles() {
    gulp.watch(['main.js'], js);
    gulp.watch(['index.html'], reloadForHtml);
    gulp.watch(['./style.scss'], css);
}

gulp.task('clean', function () {
    return del(__dirname + '/styles')
})

// gulp.task('initial_build', function () {
//     return gulp.series('clean', css)
// })

// exports.initial_build = series('clean', css);

gulp.task('initial_build', gulp.series('clean', css))
exports.start = parallel(browserSyncFunction, watchFiles);