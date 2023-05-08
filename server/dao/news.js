var mongoose = require('mongoose')
const { conn } = require('../utils/mongoConnect')

let NewsSchema = new mongoose.Schema({
    title: String,
    type: Number,   // 1-娱乐类  2-生活类  3-科技类  4-音乐类 
    author: String,
    content: String,
    picture: String,  
    createAt: {
        type: Date,
        default: Date.now
    },
})
let NewsList = conn.model('News', NewsSchema)

function createNews(obj) {
    return NewsList.create({
        title: obj.title,
        type: obj.type,
        author: obj.author,
        content: obj.content,
        picture: obj.picture,
    })
}
function queryNews() {
    return NewsList.find()
}
function findNewsById(id) {
    return NewsList.findById({
        _id: id
    })
}

module.exports = {
    createNews,
    queryNews,
    findNewsById
}