const mongoose = require('../dao/tweets')
// token验证中间件
const verifyToken = require('../middleware/verifyToken')
// token密钥
const {
    secret
} = require('../utils/config')

module.exports = {
    queryTweets: async ctx => {
        let result = await mongoose.queryTweets();
        ctx.body = {
            message: "获取成功",
            status: 200,
            data: result ? result : null
        }
    },
    findTweetById: async ctx => {
        let id = ctx.request.body.id;
        if (!id) {
            ctx.body = {
                message: "id参数没有携带",
                status: 404
            }
            return;
        }
        let result = await mongoose.findTweetById(id);
        ctx.body = {
            message: "获取成功",
            status: 200,
            data: result ? result : null
        }
    },
    createTweet: async ctx => {
        // 验证token
        verifyToken(ctx);
        let obj = ctx.request.body;
        // token获取用户名
        obj.author = ctx.state.user.username;
        let result = await mongoose.createTweet(obj);
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
    updateTweet: async ctx => {
        // 验证token
        verifyToken(ctx);
        let {
            id,
            title,
            type,
            content,
        } = ctx.request.body;
        if (!id || !title || !type) {
            ctx.body = {
                message: "参数传递错误",
                status: 404
            }
            return;
        }
        await mongoose.updateTweet(id, {
            title,
            type,
            content,
        }).catch(err => {
            console.log(err);
        })
        ctx.body = {
            message: "推文信息更新成功",
            status: 200
        }
    },
}