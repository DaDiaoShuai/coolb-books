const List = require("../models/List");

class IndexController {
    constructor() {}

    async actionList(ctx, next) {
        const list = new List();
        const result = await list.getData({
            url: "/top/playlist?limit=10&order=new"
        });
        ctx.body = await ctx.render("index/index", {
            data: result.data.playlists
        });
    }
}
module.exports = IndexController;
