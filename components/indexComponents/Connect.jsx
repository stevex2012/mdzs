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
            `}</style>
            <H1
                title={<span>联系我们</span>}
            // subTitle={"Decoration package"}
            />
            <div>地址：渝北-北环-龙湖MOCO1栋-21-22</div>
            <div>电话：023-63018362</div>
            <div>手机：13436092281</div>
            <div>邮箱：99959703@qq.com</div>
        </div>
    )
}

export default Connect;