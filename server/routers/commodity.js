const route = require('koa-route')
const CommodityController = require('../controller/commodity');

module.exports = (app) => {
    // 商品
    app
        .use(route.get('/queryCommodities', CommodityController.queryCommodities))
        .use(route.post('/createCommodity', CommodityController.createCommodity))
}