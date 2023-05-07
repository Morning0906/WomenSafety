const route = require('koa-route')
const adviseController = require('../controller/advise');

module.exports = (app) => {
    // 新闻
    app
        .use(route.get('/queryAdvise', adviseController.queryAdvise))
        .use(route.post('/createAdvise', adviseController.createAdvise))
        .use(route.post('/findAdviseById', adviseController.findAdviseById))
}