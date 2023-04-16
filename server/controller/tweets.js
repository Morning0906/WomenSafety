const mongoose = require('../dao/tweets')
// token验证中间件
const verifyToken = require('../middleware/verifyToken')

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
        // // 处理picList参数
        // obj.picList = JSON.parse(obj.picList);
        // if (!Array.isArray(obj.picList)) {
        //     obj.picList = [];
        // }
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
        if (!id || !title || !type || !content) {
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
    updateTweetLikes: async ctx => {
        // 验证token
        verifyToken(ctx);
        let {
            id,
            numOfLikes,
        } = ctx.request.body;
        if (!id || !numOfLikes) {
            ctx.body = {
                message: "参数传递错误",
                status: 404
            }
            return;
        }
        await mongoose.updateTweetLikes(id, parseInt(numOfLikes)).catch(err => {
            console.log(err);
        })
        ctx.body = {
            message: "推文点赞更新成功",
            status: 200
        }
    },
    updateTweetComments: async (ctx, tweet_id) => {
        if (!tweet_id) {
            return "请携带上对应的推文id";
        }
        let tweet = await mongoose.findTweetById(tweet_id).catch(err => {
            console.log(err);
        })
        let updateNum = parseInt(tweet.numOfComments) + 1;
        await mongoose.updateTweetComments(id, updateNum).catch(err => {
            console.log(err);
        })
        ctx.body = {
            message: "推文点赞更新成功",
            status: 200
        }
    },
}