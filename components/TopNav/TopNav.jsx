import React from 'react';

function TopNav() {
    return (
        <div className="top">
            <style jsx>{`
                .top{
                    height: 37px;
                    background: #ededed;
                    line-height: 37px;
                    overflow: hidden;
                }
                .auto {
                max-width: 1200px;
                margin: 0 auto;
                overflow: hidden;
                }
                .hy {
                    color: #565656;
                    padding-left: 18px;
}
                .f14 {
                    font-size: 14px;
                }
                .left {
                    float: left;
                }
                .top_r {
                    background: url(../../static/img/dh.jpg) left center no-repeat;
                    padding-left: 26px;
                    color: #666;
                }

                .mr18 {
                    margin-right: 18px;
                }
                .f12 {
                    font-size: 12px;
                }
                .right {
                    float: right;
                }
                .f14 {
                    font-size: 14px;
                }
                .top_r .c_red {
                    font-weight: bold;
                    margin-left: 10px;
                    color: #ff3333;
                    font-size: 18px;
                }
            `}</style>
            <div className="auto">
                <p className="left f14 hy">您好，欢迎来到达迈装饰！</p>
                <div className="right mr18 f12 top_r">
                    <span className="f14">VIP</span>/重庆客服专线<span className="f18 c_red ml10">023-81305901</span>
                </div>
            </div>
        </div>
    )
}

export default TopNav;