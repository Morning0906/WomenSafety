const koaBody = require('koa-body');
const Koa = require('koa');
const app = new Koa();

var cors = require('koa2-cors');
app.use(cors());

// 处理post请求中body请求体
app.use(koaBody({
    multipart: true, // 开启文件上传
    formidable: {
        maxFileSize: 200 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
        keepExtensions: true // 保留文件拓展名
    }
}));

// 路由分层
const newsRouter = require('./routers/news');
const adviseRouter = require('./routers/advise');
const usersRouter = require('./routers/users');
const tweetsRouter = require('./routers/tweets');
const commodityRouter = require('./routers/commodity');
const comentsyRouter = require('./routers/comments');
newsRouter(app);
adviseRouter(app);
usersRouter(app);
tweetsRouter(app);
commodityRouter(app);
comentsyRouter(app);

app.listen(5200);