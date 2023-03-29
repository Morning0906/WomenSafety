var mongoose = require('mongoose')
const { conn } = require('../utils/mongoConnect')

let CommentsSchema = new mongoose.Schema({
    tweet_id: String,
    author: String,
    content: String,
    createAt: {
        type: Date,
        default: Date.now
    },
})
let CommentsList = conn.model('Comments', CommentsSchema)

function createComments(obj) {
    return CommentsList.create({
        tweet_id: obj.tweet_id,
        author: obj.author,
        content: obj.content,
    })
}
function queryCommentsByTweetId(tweet_id) {
    return CommentsList.find({
        tweet_id: tweet_id
    })
}
function queryComments() {
    return CommentsList.find()
}

module.exports = {
    createComments,
    queryCommentsByTweetId,
    queryComments,
}