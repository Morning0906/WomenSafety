const route = require('koa-route')
const UsersController = require('../controller/users');

module.exports = (app) => {
    // 用户
    app
        // 注册
        .use(route.post('/registerUser', UsersController.createUser))
        // 登陆
        .use(route.post('/loginUser', UsersController.loginUser))
        // 查询所有用户
        .use(route.get('/queryUsers', UsersController.queryUsers))
        // 通过id查询用户
        .use(route.post('/findUserById', UsersController.findUserById))
        // 更新用户信息
        .use(route.post('/updUserInfo', UsersController.updUserInfo))
}