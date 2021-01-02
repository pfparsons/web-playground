module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.noParse = /gun\.js$/ 

    // Important: return the modified config
    return config
  },
}