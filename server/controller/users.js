const mongoose = require('../dao/users')
const jwt = require('jsonwebtoken')
// token验证中间件
const verifyToken = require('../middleware/verifyToken')
// token密钥
const {
    secret
} = require('../utils/config')

module.exports = {
    // 判断用户登录状态
    checkStatus: async ctx => {
        // 验证token
        verifyToken(ctx);
        let user = await mongoose.checkUser(ctx.state.user.username).catch(err => {
            console.log(err);
        });
        if (!user) {
            ctx.body = {
                message: '服务器错误',
                status: 500,
            }
            return
        }
        ctx.body = {
            message: '用户已经是登录状态',
            status: 200,
            data: user
        }
    },
    createUser: async ctx => {
        let obj = ctx.request.body;
        // 处理hobbies参数
        obj.hobbies = obj.hobbies ? JSON.parse(obj.hobbies) : [];
        if (!Array.isArray(obj.hobbies)) {
            obj.hobbies = [];
        }
        // 判断用户名是否存在
        let queryUser = await mongoose.queryUserByUsername(obj.username);
        if (queryUser.length != 0) {
            ctx.body = {
                message: '用户名已存在',
                status: 500
            }
            return
        }
        let result = await mongoose.createUser(obj);
        if (!result) {
            ctx.body = {
                message: '保存失败',
                status: 500
            }
            return
        }
        ctx.body = {
            message: '保存成功',
            status: 200
        }
    },
    loginUser: async ctx => {
        let {
            username,
            password,
        } = ctx.request.body;
        if (!username || !password) {
            ctx.body = {
                message: "参数没有携带",
                status: 404
            }
            return;
        }
        let result = await mongoose.loginUser(username, password);
        // 登陆失败
        if (!result) {
            ctx.body = {
                message: "用户名或密码错误",
                status: 401,
            }
            return;
        }
        // 验证通过，生成 JWT token
        const token = jwt.sign({
            username
        }, secret, {
            expiresIn: '10h'
        });
        const newResult = {
            ...result._doc,
            token,
        }
        ctx.body = {
            message: "登陆成功",
            status: 200,
            data: newResult,
        }
    },
    queryUsers: async ctx => {
        // 验证token
        verifyToken(ctx);
        let result = await mongoose.queryUsers();
        ctx.body = {
            message: "获取成功",
            status: 200,
            data: result ? result : null
        }
    },
    findUserById: async ctx => {
        // 验证token
        verifyToken(ctx);
        let id = ctx.request.body.id;
        if (!id) {
            ctx.body = {
                message: "id参数没有携带",
                status: 404
            }
            return;
        }
        let result = await mongoose.findUserById(id);
        ctx.body = {
            message: "获取成功",
            status: 200,
            data: result ? result : null
        }
    },
    updUserInfo: async ctx => {
        // 验证token
        verifyToken(ctx);
        let {
            password,
            age,
            hobbies,
            avatar,
        } = ctx.request.body;
        if (password == "") {
            ctx.body = {
                message: "密码不能为空",
                status: 404
            }
            return;
        }
        // 处理hobbies参数
        hobbies = hobbies ? JSON.parse(hobbies) : [];
        if (typeof hobbies != "object") {
            hobbies = [];
        }
        // token中获取用户名
        let username = ctx.state.user.username;
        await mongoose.updUserInfo(username, {
            password,
            age,
            avatar,
            hobbies,
        }).catch(err => {
            console.log(err);
        })
        ctx.body = {
            message: "用户信息更新成功",
            status: 200,
        }
    },
}