const route = require('koa-route')
const UsersController = require('../controller/tweets');

module.exports = (app) => {
    // 推文
    app
        // 查询单篇推文
        .use(route.post('/findTweetById', UsersController.findTweetById))
        // 查询所有推文
        .use(route.get('/queryTweets', UsersController.queryTweets))
        // 创建推文
        .use(route.post('/createTweet', UsersController.createTweet))
        // 修改推文
        .use(route.post('/updateTweet', UsersController.updateTweet))
}