module.exports = function override(config, env) {
    // change the appHtml property to point to your index.js file
    config.entry.appHtml = "./src/index.js";
    return config;
  };