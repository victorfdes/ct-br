module.exports = {
  chainWebpack: config => {
    config.resolve.symlinks(false)
  },
  devServer: {
    disableHostCheck: true
  },
  publicPath: '/ct-br/',
  outputDir: 'docs'
}
