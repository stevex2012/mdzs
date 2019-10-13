import React from 'react';
import H1 from '../H1/H1';
const Connect = () => {
    return (
        <div className="connect">
            <style jsx>{`
                .connect{
                    width:1200px;
                    margin:0 auto;
                }
                .wrap{
                    line-height:30px;
                    font-size:18px;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 50px;
                }
                
                .img_b{
                    flex-grow: 1
                }
                .img_b img{
                    width:100%;
                }
                .adr_b{
                    padding-left:50px;
                }

            `}</style>
            <H1
                title={<span>联系我们</span>}
            // subTitle={"Decoration package"}
            />
            <div className="wrap">
                <div className="img_b"><img src="../../static/img/adress.png" /></div>
                <div className="adr_b">
                    <div style={{width:'18em'}}>地址：渝北-北环-龙湖MOCO1栋-21-22</div>
                    <div>电话：023-63018362</div>
                    <div>手机：13436092281</div>
                    <div>邮箱：99959703@qq.com</div>
                </div>

            </div>
        </div>
    )
}

export default Connect;