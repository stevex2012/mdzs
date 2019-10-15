import React from 'react';

function Footer() {
    return (
        <div className="footer_wrap">
            <style>{`
                .footer_wrap{
                    background-color: #E7E7E7;
                    height: auto;
                    position: relative;
                    padding:40px 15px 65px;
                    display:flex;
                    align-items:center;
                }
                .footer_wrap .item{
                    flex:1;
                }
                .footer_wrap .left{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .footer_wrap .left .qrcode{
                    width: 165px;
                    height: 165px;
                }
                .footer_wrap .left .qrcode img{
                    width:100%;
                }
                .footer_wrap .left .desc{
                    padding-top:20px;
                }
                .footer_wrap .title{
                    color: #333;
                    font-size: 24px;
                    margin-bottom:15px;
                }
                .footer_wrap .addr{
                    font-size: 14px;
                    color:#333;
                }
                .footer_wrap .tel{
                    font-size: 14px;
                    color:#333;
                }
            `}</style>
            <div className="left item">
                <span className="qrcode" >
                <img src='../../static/img/qrcode.jpg' />
                </span>
                <div className="desc">关注获取更多设计资讯</div>
            </div>
            <div className="right item">
                <h6 className="title">联系我们</h6>
                <div className="addr">地址：渝北-北环-龙湖MOCO1栋-21-22</div>
                <div className="addr">邮箱：99959703@qq.com</div>
                <div className="addr">手机：13436092281</div>
                <div className="tel">电话：023-63018362</div>
                <div className="tel">All RightsReserved. by 重庆蒂珀希工程设计咨询有限公司 渝ICP备19013693号</div>
            </div>
        </div>
    )
}

export default Footer;