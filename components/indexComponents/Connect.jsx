import React from 'react';
import H1 from '../H1/H1';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch'
class Connect extends React.Component {
    handlePost = () => {
        fetch('/sendmail',{method:'POST'})
            .then(r => {
                console.log(r);
                return r.json()
            })
            .then(data => {
                console.log(data);
            });
    }
    render() {
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
                            <input placeholder="您的名字" maxLength={20} />
                        </div>
                        <div className="input_i">
                            <input placeholder="联系手机" maxLength={11} />
                        </div>
                        <div className="input_i">
                            <input placeholder="邮件联系" maxLength={20} />
                        </div>
                        <div className="input_i">
                            <input placeholder="所在城市" maxLength={20} />
                        </div>
                        <div className="input_i">
                            <select name="trade" className="form-control">
                                <option value="">行业分类</option>
                                <option value="开发商代表">开发商代表</option>
                                <option value="私人业主">私人业主</option>
                                <option value="媒体从业者">媒体从业者</option>
                                <option value="供应商">供应商</option>
                                <option value="设计师">设计师</option>
                            </select>
                        </div>
                        <div className="input_i">
                            <select name="from" className="form-control">
                                <option value="">您从那里知道我们</option>
                                <option value="蒂珀希官网">蒂珀希官网</option>
                                <option value="网络媒体">网络媒体</option>
                                <option value="朋友推荐">朋友推荐</option>
                                <option value="微信">微信</option>
                            </select>
                        </div>
                        <div className="input_i input_ttt">
                            <textarea placeholder="写下你的需求" />
                        </div>
                        <div className="btn_w">
                            <button onClick={this.handlePost}>{'提交'}</button>
                        </div>
                    </div>

                </div>
            </LazyLoad>
        )
    }
}
export default Connect;