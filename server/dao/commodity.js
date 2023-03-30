var mongoose = require('mongoose')
const { conn } = require('../utils/mongoConnect')

let CommoditySchema = new mongoose.Schema({
    name: String,
    type: Number,   // 1-食品  2-衣服  3-鞋子 4-电子产品
    picture: String,
    link: String,
    count: Number, // 商品数量
    prices: Float64Array,  // 商品价格
    createAt: {
        type: Date,
        default: Date.now
    },
})
let CommodityList = conn.model('Commodity', CommoditySchema)

function createCommodity(obj) {
    return CommodityList.create({
        name: obj.name,
        type: obj.type,
        picture: obj.picture,
        link: obj.link,
        count: obj.count,
        prices: obj.prices,
    })
}
function queryCommodities() {
    return CommodityList.find()
}

module.exports = {
    createCommodity,
    queryCommodities,
}