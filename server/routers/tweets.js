const route = require('koa-route')
const TweetsController = require('../controller/tweets');

module.exports = (app) => {
    // 推文
    app
        // 查询单篇推文
        .use(route.post('/findTweetById', TweetsController.findTweetById))
        // 查询所有推文
        .use(route.get('/queryTweets', TweetsController.queryTweets))
        // 创建推文
        .use(route.post('/createTweet', TweetsController.createTweet))
        // 修改推文
        .use(route.post('/updateTweet', TweetsController.updateTweet))
        // 修改推文点赞数量
        .use(route.post('/updateTweetLikes', TweetsController.updateTweetLikes))
}