
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-minesweeper/'
    : '/',
  outputDir: 'docs'
}
