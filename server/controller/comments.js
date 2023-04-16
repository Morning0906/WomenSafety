const mongoose = require('../dao/comments')
// token验证中间件
const verifyToken = require('../middleware/verifyToken')
const TweetsController = require('../controller/tweets');

module.exports = {
    createComments: async ctx => {
        // 验证token
        verifyToken(ctx);
        let obj = ctx.request.body;
        let result = await mongoose.createComments(obj);
        if (!result) {
            ctx.body = {
                message: '保存失败',
                status: 500
            }
            return
        }
        // 给对应的推文添加评论数量
        // TweetsController.updateTweetComments(ctx, obj.tweet_id)
        ctx.body = {
            message: '保存成功',
            status: 200
        }
    },
    // 查询关于某tweet_id的评论
    queryCommentsByTweetId: async ctx => {
        let {
            tweet_id
        } = ctx.request.body;
        let result = await mongoose.queryCommentsByTweetId(tweet_id);
        ctx.body = {
            message: "获取成功",
            status: 200,
            data: result ? result : null
        }
    },
    queryComments: async ctx => {
        let result = await mongoose.queryComments();
        ctx.body = {
            message: "获取成功",
            status: 200,
            data: result ? result : null
        }
    },
}