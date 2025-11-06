exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      devtool: 'eval',
      plugins: [
        plugins.define({
          'process.env.GATSBY_WEBPACK_PUBLICPATH': JSON.stringify('/')
        })
      ]
    })
  }
}
