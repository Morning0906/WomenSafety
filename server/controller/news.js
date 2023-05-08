const mongoose = require('../dao/news')
// token验证中间件
const verifyToken = require('../middleware/verifyToken')

module.exports = {
    createNews: async ctx => {
        // 验证token
        verifyToken(ctx);
        let obj = ctx.request.body;
        let result = await mongoose.createNews(obj);
        if (!result) {
            ctx.body = {
                message: '保存失败',
                status: 500
            }
            return
        }
        ctx.body = {
            message: '保存成功',
            status: 200
        }
    },
    queryNews: async ctx => {
        let result = await mongoose.queryNews();
        ctx.body = {
            message: "获取成功",
            status: 200,
            data: result ? result : null
        }
    },
    findNewsById: async ctx => {
        let id = ctx.request.body.id;
        if (!id) {
            ctx.body = {
                message: "id参数没有携带",
                status: 404
            }
            return;
        }
        let result = await mongoose.findNewsById(id);
        ctx.body = {
            message: "获取成功",
            status: 200,
            data: result ? result : null
        }
    },
}