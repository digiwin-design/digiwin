const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const mainBowerFiles = require('main-bower-files');
const del = require('del');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const args = require('yargs').argv;
const exists = require('path-exists').sync;
const sass = require('gulp-sass');
sass.compile = require('node-sass');
const assetFunctions = require('node-sass-asset-functions');

// 編譯sass並加入css prefix
gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            functions: assetFunctions({
                images_path: 'images', // image-url 的圖檔位置,
                http_images_path: '../images' // image-url 的輸出路徑
            })
        }))
        .pipe($.postcss([autoprefixer()]))
        .pipe($.sourcemaps.write(''))
        .pipe(gulp.dest('css'));
});

// sass編譯完畢後reload
gulp.task('sass-watch', ['sass'], function (done) {
    browserSync.reload();
    done();
});

// js轉換es5
gulp.task('babel', function () {
    gulp.src('src/js/**/*.js')
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.sourcemaps.init())
        .pipe($.babel({ presets: ['@babel/preset-env'] }))
        .pipe($.uglify())
        .pipe($.rename({ extname: '.min.js' }))
        .pipe($.sourcemaps.write(''))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.stream({ match: '**/*.js' }));
});

// js模組化
gulp.task('browserify', function () {
    return browserify(`src/js/${args.p}.js`, { paths: ['.'], debug: true })
        .transform('babelify', { presets: ['@babel/preset-env'], compact: true })
        .bundle()
        .pipe(source(`${args.p}.js`))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.stream({ match: '**/*.js' }));
});

// server
gulp.task('server', function () {
    browserSync.init({
        server: '.',
        // 將<script>標籤插入至</head>前方
        snippetOptions: {
            rule: {
                match: /<\/head>/i,
                fn: function (snippet, match) {
                    return snippet + match;
                }
            }
        }
    });
});

// 取出套件主要檔案
gulp.task('bower', function () {
    let option = {
        'overrides': {
            'lodash': {
                'main': 'dist/lodash.min.js'
            },
        }
    };
    // Replace files by their minified version when possible
    let bowerWithMin = mainBowerFiles(option).map(function (path, index, arr) {
        let newPath = path.replace(/.([^.]+)$/g, '.min.$1');
        return exists(newPath) ? newPath : path;
    });
    return gulp.src(bowerWithMin).pipe(gulp.dest('assets'));
});

// 編譯pug
gulp.task('pug', function () {
    return gulp.src('src/pug/partial/**/*.pug')
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.pug({ pretty: true }))
        .pipe($.rename({ extname: '.htm' }))
        .pipe(gulp.dest(''));
});

// 刪除已編譯檔案
gulp.task('del', function () {
    return del(['css/**', 'js/**']);
});

// 編譯全部檔案
gulp.task('compile', function () {
    gulp.start('sass', 'babel', 'pug', 'bower');
});

gulp.task('bs', ['server'], function () {
    gulp.watch('src/sass/**/*.scss', ['sass-watch']);
    gulp.watch('src/js/**/*.js', ['babel']);
    gulp.watch('src/pug/**/*', ['pug']);
    $.watch('**/*.@(html|htm)', browserSync.reload);
});

gulp.task('default', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['babel']);
    gulp.watch('src/pug/**/*', ['pug']);
});
