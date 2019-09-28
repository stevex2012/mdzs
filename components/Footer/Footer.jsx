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
            `}</style>
            <div className="left item"></div>
            <div className="right item"></div>
        </div>
    )
}

export default Footer;