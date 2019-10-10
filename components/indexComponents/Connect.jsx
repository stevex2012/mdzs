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
                    flex-direction: column;
                    align-items: center;
                    padding-bottom: 50px;
                }
                .wrap div{
                    width:29%;
                }
                
            `}</style>
            <H1
                title={<span>联系我们</span>}
            // subTitle={"Decoration package"}
            />
            <div className="wrap"> 
                <div>地址：渝北-北环-龙湖MOCO1栋-21-22</div>
                <div>电话：023-63018362</div>
                <div>手机：13436092281</div>
                <div>邮箱：99959703@qq.com</div>
            </div>
        </div>
    )
}

export default Connect;