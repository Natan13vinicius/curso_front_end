// importação gulp
const gulp = require('gulp');
// importação gulp sass
const sass = require('gulp-sass')(require('sass'));
// importação sourcemaps
const sourcemaps = require('gulp-sourcemaps');
// importação uglify
const uglify = require('gulp-uglify')
// / importação obfuscate
const obfuscate = require('gulp-obfuscate');
// importação imagemin
 const imagemin = require('gulp-imagemin');

// comprimir javascript
function comprimeJavascript(){
  return gulp.src('./source/scripts/*.js')
  .pipe(uglify())
  .pipe(obfuscate())
  .pipe(gulp.dest('./build/scripts'))
}

// função de compilar sass
function compilaSass(){
  return gulp.src('./source/styles/main.scss')
  .pipe(sourcemaps.init())
      .pipe(sass({
          outputStyle:'compressed'
      }))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./build/styles'));
}

// comprimir imagens
function comprimirImagem(){
  return gulp.src('./source/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./build/images'))
}


// exports.sass = compilaSass;

// exportação watch
exports.default= function(){
  gulp.watch('./source/styles/*.scss',{ignoreInitial:false},gulp.series(compilaSass));
  gulp.watch('./source/scripts/*.js',{ignoreInitial:false},gulp.series(comprimeJavascript));
   gulp.watch('./source/images/*',{ignoreInitial:false},gulp.series(comprimirImagem));

}

// exports.images= comprimirImagem;

