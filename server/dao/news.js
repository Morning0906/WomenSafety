var mongoose = require('mongoose')
const { conn } = require('../utils/mongoConnect')

let NewsSchema = new mongoose.Schema({
    title: String,
    type: Number,   // 1-娱乐类  2-生活类  3-科技类  4-音乐类 
    author: String,
    content: String,
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
    })
}
function queryNews() {
    return NewsList.find()
}


function getPageOne(page_id) {
    return NewsList.findById({
        _id: page_id
    })
}
function updatePageInfo(page_id, obj) {
    return NewsList.updateOne({
        _id: page_id
    }, {
        title: obj.title,
        type: obj.type,
        remarks: obj.remarks,
    })
}
function updatePageContent(page_id, obj) {
    return NewsList.updateOne({
        _id: page_id
    }, {
        content: obj.content,
    })
}
function deleteOnePage(id) {
    return NewsList.deleteOne({
        _id: id
    })
}

module.exports = {
    createNews,
    queryNews,


    getPageOne,
    updatePageInfo,
    updatePageContent,
    deleteOnePage,
}