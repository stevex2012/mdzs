import React from 'react';
import H1 from '../H1/H1';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { Modal,Icon } from 'antd';
//去掉前后空格

function removeFirstEndSpace(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}
//提示信息
function AlertMsg({ title = '提示', content }) {
    Modal.warning({
        title,
        content
    })
}
class Connect extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: '',//名字  ===必填
            telphone: '',//手机号 ===必填
            emailAddr: '', //邮箱
            city: '',//城市
            industry: '',// 行业分类
            msgFrom: '', //信息来源
            leaveMsg: '', //留言 ==必填
            loading:false,
        }
    }
    //input name
    handleInputName = (e) => {
        const val = e.target.value;
        this.setState({
            name: val
        })
    }
    //input telphone
    handleInputTel = (e) => {
        const tel = e.target.value;
        this.setState({
            telphone: tel
        })
    }
    // input email
    handleInputEmail = (e) => {
        const email = e.target.value;
        this.setState({
            emailAddr: email
        })
    }
    //input city
    handleInputCity = (e) => {
        const city = e.target.value;
        this.setState({
            city: city
        })
    }
    //select industry
    handleSlctIndustry = (e) => {
        const industry = e.target.value;
        this.setState({
            industry: industry
        })
    }
    //select msg from 
    handleSlctMsgFrom = (e) => {
        const msgFrom = e.target.value;
        this.setState({
            msgFrom: msgFrom
        })
    }
    //input your msg
    handleInputMsg = (e) => {
        const leaveMsg = e.target.value;
        this.setState({
            leaveMsg: leaveMsg
        })
    }
    //send msg
    handlePost = () => {
        const { name, telphone, emailAddr, city, industry, msgFrom, leaveMsg,loading } = this.state;
        if (!removeFirstEndSpace(name)) {
            return AlertMsg({ content: '请输入您的名字' })
        }
        if (!removeFirstEndSpace(telphone) || removeFirstEndSpace(telphone).length < 11) {
            return AlertMsg({ content: '请输入正确的联系电话' })
        }
        if (!removeFirstEndSpace(leaveMsg)) {
            return AlertMsg({ content: '请输入您的的需求' })
        }
        if (loading) return;
        this.setState({
            loading:true
        })
        const sendData = {
            name: removeFirstEndSpace(name),
            telphone: removeFirstEndSpace(name),
            emailAddr: removeFirstEndSpace(emailAddr),
            city: removeFirstEndSpace(city),
            industry: removeFirstEndSpace(industry),
            msgFrom: removeFirstEndSpace(msgFrom),
            leaveMsg: removeFirstEndSpace(leaveMsg)
        }
        fetch('/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        })
            .then(r => {
                console.log(r);
                return r.json()
            })
            .then(data => {
                const { result } = data;
                console.log(data);
                if (result == 0) {
                    Modal.success({
                        title: '提示',
                        content: '提交成功'
                    });
                    this.setState({
                        name: '',
                        telphone: '',
                        emailAddr: '',
                        city: '',
                        industry: '',
                        msgFrom: '',
                        leaveMsg: ''
                    })
                } else {
                    Modal.error({
                        title: '提示',
                        content: '提交失败,请稍后重试'
                    });
                }
                this.setState({
                    loading:false
                })
            })
            .catch(e => {
                Modal.error({
                    title: '提示',
                    content: '提交失败'
                });
                this.setState({
                    loading:false
                })
            })
    }
    render() {
        const { name, telphone, emailAddr, city, industry, msgFrom, leaveMsg,loading } = this.state;
        return (
            <LazyLoad height={634}>
                <div className="connect">
                    <style jsx>{`
                    .connect{
                        width:1200px;
                        margin:0 auto;
                    }
                    .form_w{
                        background: rgba(0,0,0,0.3);
                        display: flex;
                        flex-wrap: wrap;
                        padding: 60px 0;
                    }
                    .input_i{
                        width: 33.33%;
                        padding: 10px;
                    }  
                    .input_i input, .form-control{
                        width:100%;
                        height: 40px;
                        border-radius: 5px;
                        border: none;
                        padding: 0 10px;
                    }              
                    .input_ttt{
                        width:50%;
                    }
                    .input_ttt textarea{
                        width:100%;
                        height:100px;
                        border-radius:5px;
                        padding: 10px;
                    }
                    .btn_w{
                        width:100%;
                    }
                    .btn_w button{
                        padding: 6px 12px;
                        display: inline-block;
                        padding: 6px 12px;
                        margin-bottom: 0;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 1.42857143;
                        text-align: center;
                        white-space: nowrap;
                        vertical-align: middle;
                        -ms-touch-action: manipulation;
                        touch-action: manipulation;
                        cursor: pointer;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        background-image: none;
                        border: 1px solid transparent;
                        border-radius: 4px;
                        color: #fff;
                        background-color: #f0ad4e;
                        border-color: #eea236;
                        margin-left: 10px;
                    }
                    .btn_w button:hover{
                        background-color: #ec971f;
                        border-color: #d58512;
                    }
                `}</style>
                    <Head>
                        <script src="https://smtpjs.com/v2/smtp.js">
                        </script>
                    </Head>
                    <H1
                        title={<span>联系我们</span>}
                    // subTitle={"Decoration package"}
                    />
                    <div className="form_w">
                        <div className="input_i">
                            <input placeholder="您的名字" maxLength={20} onChange={this.handleInputName} value={name} />
                        </div>
                        <div className="input_i">
                            <input placeholder="联系手机" maxLength={11} onChange={this.handleInputTel} value={telphone} />
                        </div>
                        <div className="input_i">
                            <input placeholder="邮件联系" maxLength={50} type="email" onChange={this.handleInputEmail} value={emailAddr} />
                        </div>
                        <div className="input_i">
                            <input placeholder="所在城市" maxLength={20} onChange={this.handleInputCity} value={city} />
                        </div>
                        <div className="input_i">
                            <select name="trade" className="form-control" onChange={this.handleSlctIndustry} value={industry}>
                                <option value="">行业分类</option>
                                <option value="开发商代表">开发商代表</option>
                                <option value="私人业主">私人业主</option>
                                <option value="媒体从业者">媒体从业者</option>
                                <option value="供应商">供应商</option>
                                <option value="设计师">设计师</option>
                            </select>
                        </div>
                        <div className="input_i">
                            <select name="from" className="form-control" onChange={this.handleSlctMsgFrom} value={msgFrom}>
                                <option value="">您从那里知道我们</option>
                                <option value="蒂珀希官网">蒂珀希官网</option>
                                <option value="网络媒体">网络媒体</option>
                                <option value="朋友推荐">朋友推荐</option>
                                <option value="微信">微信</option>
                            </select>
                        </div>
                        <div className="input_i input_ttt">
                            <textarea placeholder="写下你的需求" onChange={this.handleInputMsg} value={leaveMsg} />
                        </div>
                        <div className="btn_w">
                            <button onClick={this.handlePost}>
                                {loading && <Icon type="loading" />}{'提交'}
                            </button>
                        </div>
                    </div>

                </div>
            </LazyLoad>
        )
    }
}
export default Connect;