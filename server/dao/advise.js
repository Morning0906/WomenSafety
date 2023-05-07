var mongoose = require('mongoose')
const { conn } = require('../utils/mongoConnect')

let AdviseSchema = new mongoose.Schema({
    title: String,
    type: Number,   // 1-独居类  2-出行类  3-日常类 4-其他
    author: String,
    content: String,
    picture: String,  
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
        picture: obj.picture,
    })
}
function queryAdvise() {
    return AdviseList.find()
}
function findAdviseById(id) {
    return AdviseList.findById({
        _id: id
    })
}

module.exports = {
    createAdvise,
    queryAdvise,
    findAdviseById,
}