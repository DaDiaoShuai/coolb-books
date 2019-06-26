const { join } = require("path");
const { extend } = require("lodash");
let config = {
    staticDirectory: join(__dirname, "..", "assets"),
    viewsDirectory: join(__dirname, "..", "views")
};

if (process.env.NODE_ENV === "development") {
    localeConfig = {
        port: 8023,
        baseUrl: 'https://4bros.cn/neapi'
    };
    config = extend(config, localeConfig);
}
if (process.env.NODE_ENV === "production") {
    prodConfig = {
        port: 80
    };
    config = extend(config, prodConfig);
}

module.exports = config;
