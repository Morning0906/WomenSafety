const route = require('koa-route')
const CommentsController = require('../controller/comments');

module.exports = (app) => {
    // 商品
    app
        .use(route.get('/queryComments', CommentsController.queryComments))
        .use(route.post('/queryCommentsByTweetId', CommentsController.queryCommentsByTweetId))
        .use(route.post('/createComments', CommentsController.createComments))
}