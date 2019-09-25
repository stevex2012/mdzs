import React from 'react';

function Banner(props) {
    const { bgImg, children } = props;
    return (
        <div className="banner">
            <style jsx>{`
                .banner{
                    height: 508px;
                    background: url(${bgImg}) center top no-repeat;
                }
            `}</style>
            {children}
        </div>
    )
}

export default Banner;