import { src, series, dest } from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer' // 给不同的浏览器加上前缀，兼容各浏览器
import cssnano from 'cssnano' // 压缩css
import postcss from 'gulp-postcss'
import path from 'path'

const distFolder = path.resolve(__dirname, 'dist')

function buildThemeChalk() {
  const sass = gulpSass(dartSass)
  return src(path.resolve(__dirname, 'src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(postcss([cssnano()]))
    .pipe(dest(distFolder))
}

const build = series(buildThemeChalk)

export default build
