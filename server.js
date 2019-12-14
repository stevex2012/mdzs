const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

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
    return new Promise(function (res, rej) {
        transporter.sendMail(mail, function (error, info) {
            if (error) {
                console.log(error);
                return rej({ result: 1, data: error })
            }
            console.log('mail sent:', info.response);
            // res(info.response)
            res({ result: 0, data: info.response });
        });
    })
    // transporter.sendMail(mail, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //         return errorFn && errorFn(error) 
    //     }
    //     console.log('mail sent:', info.response);
    //     successFn && successFn(info.response);
    // });
};
//创建邮件模板
function getEmailHtml(data = {}) {
    const { name, telphone, emailAddr, city, industry, msgFrom, leaveMsg } = data;
    return `
        <ul>
            <li>姓名: ${name}</li>
            <li>电话: ${telphone}</li>
            <li>邮箱: ${emailAddr}</li>
            <li>城市: ${city}</li>
            <li>行业: ${industry}</li>
            <li>信息来源: ${msgFrom}</li>
            <li>具体需求: ${leaveMsg}</li>
        </ul>
    `
}
app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()
    server.use(bodyParser());
    server.use(router.routes())
    router.post('/sendmail', async (ctx, next) => {
        const { request } = ctx;
        // console.log(request.body);
        // ctx.body = {
        //     statusCode:200,
        //     result:0,
        // };
        // 创建一个邮件对象
        var mail = {
            // 发件人
            from: 'steve<1161869746@qq.com>',
            // 主题
            subject: '客户留资',
            // 收件人
            to: '99959703@qq.com',
            // 邮件内容，HTML格式
            text: '客户留资', //可以是链接，也可以是验证码
            html: getEmailHtml(request.body),
        };
        let responseData = await send(mail);
        ctx.body = {
            statusCode: 200,
            result: responseData.result,
        };

    })
    router.all('*', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})