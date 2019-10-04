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
                    margin-top:15px;
                }
            `}</style>
            <div className="left item">
                <span className="qrcode" />
                <div className="desc">关注获取更多设计资讯</div>
            </div>
            <div className="right item">
                <h6 className="title">联系我们</h6>
                <div className="addr">重庆市江北区五里店五江路13号（重庆总公司）</div>
                <div className="addr">重庆市渝中区万科景程3幢（渝中分公司）</div>
                <div className="addr">重庆市巴南区界石东城大道（巴南分公司）</div>
                <div className="tel">电话：023-81305901</div>
            </div>
        </div>
    )
}

export default Footer;