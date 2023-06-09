const mongoose = require('../dao/advise')
// token验证中间件
const verifyToken = require('../middleware/verifyToken')

module.exports = {
    createAdvise: async ctx => {
        // 验证token
        verifyToken(ctx);
        let obj = ctx.request.body;
        let result = await mongoose.createAdvise(obj);
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
    queryAdvise: async ctx => {
        let result = await mongoose.queryAdvise();
        ctx.body = {
            message: "获取成功",
            status: 200,
            data: result ? result : null
        }
    },
    findAdviseById: async ctx => {
        let id = ctx.request.body.id;
        if (!id) {
            ctx.body = {
                message: "id参数没有携带",
                status: 404
            }
            return;
        }
        let result = await mongoose.findAdviseById(id);
        ctx.body = {
            message: "获取成功",
            status: 200,
            data: result ? result : null
        }
    },
}