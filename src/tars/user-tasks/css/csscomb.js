const gulp = tars.packages.gulp;
const csscomb = require('gulp-csscomb');

module.exports = () => {
    return gulp.task('css:csscomb', () => {
        return gulp.src([`markup/${tars.config.fs.componentsFolderName}/**/*.${tars.cssPreproc.ext}`], {base: './'})
            .pipe(csscomb())
            .pipe(gulp.dest('./'));
    });
};
