import React from 'react';

function Banner(props) {
    const { bgImg, children } = props;
    return (
        <div className="banner">
            <style jsx>{`
                .banner{
                    height: 508px;
                }
            `}</style>
            <img src={bgImg} alt=""/>
        </div>
    )
}

export default Banner;