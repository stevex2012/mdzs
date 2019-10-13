import React from 'react';

function Banner(props) {
    const { bgImg, children } = props;
    return (
        <div className="banner">
            <style jsx>{`
                .banner{
                    height: 700px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }
            `}</style>
            <img src={bgImg} alt=""/>
        </div>
    )
}

export default Banner;