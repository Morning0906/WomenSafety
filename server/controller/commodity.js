const mongoose = require('../dao/commodity')
// token验证中间件
const verifyToken = require('../middleware/verifyToken')

module.exports = {
    createCommodity: async ctx => {
        // 验证token
        verifyToken(ctx);
        let obj = ctx.request.body;
        let result = await mongoose.createCommodity(obj);
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
    queryCommodities: async ctx => {
        let result = await mongoose.queryCommodities();
        ctx.body = {
            message: "获取成功",
            status: 200,
            data: result ? result : null
        }
    },
}