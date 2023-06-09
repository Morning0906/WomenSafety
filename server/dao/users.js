var mongoose = require('mongoose')
const { conn } = require('../utils/mongoConnect')

let UsersSchema = new mongoose.Schema({
    username: String,    // 用户名不可重复, 唯一标识
    password: String,
    age: Number,   
    sex: Number,     // 0-女性  1-男性
    hobbies: Array,
    level: {
        type: Number,
        default: 1,   // 1-普通用户  2-vip用户  3-管理员
    }, 
    avatar: {     // 头像地址
        type: String,
        default: "",
    },  
    createAt: {
        type: Date,
        default: Date.now
    },
})
let UsersList = conn.model('Users', UsersSchema)

function checkUser(username) {
    return UsersList.find({
        username: username,
    })
}
function createUser(obj) {
    return UsersList.create({
        username: obj.username,
        password: obj.password,
        age: obj.age,
        sex: obj.sex,
        hobbies: obj.hobbies,
        avatar: obj.avatar,
    })
}
function loginUser(username, password) {
    return UsersList.findOne({
        username: username,
        password: password,
    })
}
function queryUsers() {
    return UsersList.find()
}
function findUserById(user_id) {
    return UsersList.findById({
        _id: user_id
    })
}
function updUserInfo(name, obj) {
    return UsersList.updateOne({
        name: name
    }, {
        password: obj.password,
        age: obj.age,
        hobbies: obj.hobbies,
        avatar: obj.avatar,
    })
}
function queryUserByUsername(username) {
    return UsersList.find({
        username: username
    })
}

module.exports = {
    checkUser,
    createUser,
    loginUser,
    queryUsers,
    findUserById,
    updUserInfo,
    queryUserByUsername,
}