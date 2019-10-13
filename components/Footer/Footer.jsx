import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <style jsx>{`
                .footer{
                    background-color: #E7E7E7;
                    height: auto;
                    position: relative;
                    padding:40px 15px 65px;
                    display:flex;
                    align-items:center;
                }
                .item{
                    flex:1;
                }
                .left{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .left .qrcode{
                    background: url(../static/img/img.jpg) -283px -165px no-repeat;
                    width: 165px;
                    height: 165px;
                }
                .left .desc{
                    padding-top:20px;
                }
                .title{
                    color: #333;
                    font-size: 24px;
                    margin-bottom:15px;
                }
                .addr{
                    font-size: 14px;
                    color:#333;
                }
                .tel{
                    font-size: 14px;
                    color:#333;
                }
            `}</style>
            <div className="left item">
                <span className="qrcode" />
                <div className="desc">关注获取更多设计资讯</div>
            </div>
            <div className="right item">
                <h6 className="title">联系我们</h6>
                <div className="addr">地址：渝北-北环-龙湖MOCO1栋-21-22</div>
                <div className="addr">邮箱：99959703@qq.com</div>
                <div className="addr">手机：13436092281</div>
                <div className="tel">电话：023-63018362</div>
                <div className="tel">www.diboxi.com All RightsReserved. 重庆蒂珀希工程设计咨询有限公司 渝ICP备19013693号</div>
            </div>
        </div>
    )
}

export default Footer;