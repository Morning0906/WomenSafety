var mongoose = require('mongoose')
const { conn } = require('../utils/mongoConnect')

let TweetsSchema = new mongoose.Schema({
    title: String,    
    author: String,
    content: String,
    type: Number,  // 0-其他  1-娱乐类  2-生活类  3-科技类  4-音乐类  5-美食类 
    createAt: {
        type: Date,
        default: Date.now
    },
})
let TweetsList = conn.model('Tweets', TweetsSchema)

function createTweet(obj) {
    return TweetsList.create({
        title: obj.title,
        author: obj.author,
        content: obj.content,
        type: obj.type,
    })
}
function queryTweets() {
    return TweetsList.find()
}
function findTweetById(tweet_id) {
    return TweetsList.findById({
        _id: tweet_id
    })
}

function updateTweet(tweet_id, obj) {
    return TweetsList.updateOne({
        _id: tweet_id
    }, {
        title: obj.title,
        content: obj.content,
        type: obj.type,
    })
}

module.exports = {
    createTweet,
    queryTweets,
    findTweetById,
    updateTweet,
}