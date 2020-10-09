var themename = "first-portfolio";

var gulp = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  browserSync = require("browser-sync").create(),
  reload = browserSync.reload,
  sass = require("gulp-sass"),
  cleanCSS = require("gulp-clean-css"),
  sourcemaps = require("gulp-souremaps"),
  concat = require("gulp-concat"),
  imagemin = require("gulp-imagemin"),
  changed = require("gulp-changed"),
  uglify = require("gulp-uglify"),
  lineec = require("gulp-line-ending-corrector");

var root = '../' + themename + '/',
    scss = root +'sass/',
    js = roote +'src/'+
