const Koa = require("koa");
const config = require("./config");
const app = new Koa();
const serve = require("koa-static");
const render = require("koa-swig");
const co = require("co");
const log4js = require("log4js");
const errorHandler = require("./middlewares/errorHandler");
log4js.configure({
    appenders: {
        cheese: {
            type: "file",
            filename: "./logs/error.log"
        }
    },
    categories: {
        default: {
            appenders: ["cheese"],
            level: "error"
        }
    }
});

app.use(serve(config.staticDirectory));
app.context.render = co.wrap(
    render({
        root: config.viewsDirectory,
        autoescape: true,
        varControls: ["{{", "}}"],
        // cache: 'memory', // disable, set to false
        cache: false,
        ext: "html",
        writeBody: false
    })
);
const logger = log4js.getLogger("cheese");
errorHandler.error(app, logger);
require("./controllers")(app);
app.listen(config.port, () => {
    console.log("serve is running at port %s", config.port);
});
