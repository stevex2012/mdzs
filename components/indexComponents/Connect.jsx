import React from 'react';
import H1 from '../H1/H1';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';

const Connect = () => {
    return (
        <LazyLoad height={634}>
            <div className="connect">
                <style jsx>{`
                .connect{
                    width:1200px;
                    margin:0 auto;
                }
                {/* .wrap{
                    line-height:30px;
                    font-size:18px;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 50px;
                }
                
                .img_b{
                    flex-grow: 1;
                    margin-bottom:60px;
                }
                .img_b img{
                    width:100%;
                }
                .adr_b{
                    padding-left:50px;
                } */}
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
                .input_i input{
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
                        <input placeholder="行业分类" maxLength={20} />
                    </div>
                    <div className="input_i">
                        <input placeholder="你从哪里知道我们" maxLength={20} />
                    </div>
                    <div className="input_i input_ttt">
                        <textarea placeholder="写下你的需求" />
                    </div>
                    <div className="btn_w">
                        <button onClick={() => {
                            Email.send({
                                Host: "http://www.diboxi.com/",
                                Username: "username",
                                Password: "password",
                                To: 'them@website.com',
                                From: "you@isp.com",
                                Subject: "This is the subject",
                                Body: "And this is the body"
                            }).then(
                                message => alert(message)
                            );
                        }}>{'提交'}</button>
                    </div>

                </div>
                {/* <div className="wrap">
                   
                    <div className="adr_b">
                        <div style={{ width: '18em' }}>地址：渝北-北环-龙湖MOCO1栋-21-22</div>
                        <div>电话：023-63018362</div>
                        <div>手机：13436092281</div>
                        <div>邮箱：99959703@qq.com</div>
                    </div>
                </div>
                <div className="img_b"><img src="../../static/img/adress.png" /></div> */}
            </div>
        </LazyLoad>
    )
}

export default Connect;