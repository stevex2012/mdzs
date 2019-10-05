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
        </div>
    )
}

export default Connect;