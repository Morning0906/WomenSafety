const route = require('koa-route')
const NewsController = require('../controller/news');

module.exports = (app) => {
    // 新闻
    app
        .use(route.get('/queryNews', NewsController.queryNews))
        .use(route.post('/createNews', NewsController.createNews))
}