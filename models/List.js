/**
 * @fileoverview 实现musicList数据模型
 * @author coolb
 */
const SafeRequest = require("../utils");
class List {
    /**
     * @constructor
     * @param {object} app koa执行上下文
     */
    constructor(app) {
        this.app = app;
    }
    /**
     * 获取全部音乐列表
     * @param {*} options 配置项
     * @example
     * return new Promise
     * getData(options)
     */
    getData(options) {
        const safeRequest = new SafeRequest(options.url);
        return safeRequest.fetch();
    }
}

module.exports = List;
