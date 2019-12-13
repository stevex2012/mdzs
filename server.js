const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
var nodemailer = require('nodemailer');
// 创建一个SMTP客户端配置
var config = {
    host: 'smtp.qq.com',//网易163邮箱 smtp.163.com
    port: 465,//网易邮箱端口 25
    auth: {
        user: '1161869746@qq.com', //邮箱账号
        pass: 'fyqlfnxvtiskihgc'  //邮箱的授权码 这个授权码是自己的qq邮箱你需要申请一个qq
    }
};
// 创建一个SMTP客户端对象
var transporter = nodemailer.createTransport(config);
// 发送邮件
function send(mail) {
    transporter.sendMail(mail, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('mail sent:', info.response);
    });
};

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()
    router.post('/sendmail', async (ctx, next) => {
        ctx.body = '200';
        // 创建一个邮件对象
        var mail = {
            // 发件人
            from: 'steve<1161869746@qq.com>',
            // 主题
            subject: 'sqceshi',
            // 收件人
            to: '18725873459@163.com',
            // 邮件内容，HTML格式
            text: '<div style="color:orange">test html</div>', //可以是链接，也可以是验证码
            html:'',
        };
        send(mail);

    })
    router.all('*', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })

    server.use(router.routes())
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})