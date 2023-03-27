var mongoose = require('mongoose')
const { conn } = require('../utils/mongoConnect')

let AdviseSchema = new mongoose.Schema({
    title: String,
    type: Number,   // 1-娱乐类  2-生活类  3-科技类  4-音乐类 
    author: String,
    content: String,
    createAt: {
        type: Date,
        default: Date.now
    },
})
let AdviseList = conn.model('Adivse', AdviseSchema)

function createAdvise(obj) {
    return AdviseList.create({
        title: obj.title,
        type: obj.type,
        author: obj.author,
        content: obj.content,
    })
}
function queryAdvise() {
    return AdviseList.find()
}

module.exports = {
    createAdvise,
    queryAdvise,
}