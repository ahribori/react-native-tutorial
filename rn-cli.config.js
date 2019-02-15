let blacklist = require('metro-config/src/defaults/blacklist');

let config = {
  getBlacklistRE() {
    return blacklist([
      // Ignore local `.sample.js` files.
      /.*\.sample\.js$/,
      // Ignore IntelliJ directories
      /.*\.idea\/.*/,
      // ignore git directories
      /.*\.git\/.*/,
      // Ignore android directories
      /.*\/app\/build\/.*/
      // Add more regexes here for paths which should be blacklisted from the packager.
    ]);
  }
};

module.exports = config;
