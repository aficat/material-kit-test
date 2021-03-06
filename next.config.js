const debug = process.env.NODE_ENV !== "production";
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");

module.exports = withPlugins([[withSass], [withImages]], {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/components": { page: "/components" },
      "/login": { page: "/login" },
      "/landing": { page: "/landing" },
      "/profile": { page: "/profile" },
      "/signUp": { page: "/signUp" }
    }
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '/material-kit-test/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  }
})