import React from 'react';

function H1({ title, subTitle }) {
    return (
        <React.Fragment>
            <style>{`
                .h1_title{
                    height: 60px;
                    position: relative;
                    overflow: hidden;

                                }
                                .h1_title h3{
                                    width: 600px;
                    height: 60px;
                    background: #fff;
                    position: absolute;
                    left: 50%;
                    top: 0px;
                    margin-left: -300px;
                    text-align: center;
                    font-weight: normal;
                                }
                                .h1_title h3 span {
                    display: block;
                    font-size: 32px;
                    line-height: 32px;
                    color: rgb(51, 51, 51);
                    font-family: 微软雅黑;
                }
                .h1_title h3 div {
                    color: #999;
                    letter-spacing: 1px;
                    padding-top: 3px;
                    font-size: 12px;
                }
                .h1_title .line {
                    height: 1px;
                    background: #d4d3d3;
                    overflow: hidden;
                    margin-top: 18px;
                }
                .h1_title .c_red{
                    color:#ff3333
                }
                .h1_pad{
                    height:70px;
                }
            `}</style>

            <div className="h1_pad" />
            <div className="h1_title">

                <h3>
                    <span>{title}</span>

                    <div>{subTitle}</div>
                </h3>
                <div className="line"></div>
            </div>
        </React.Fragment>
    )
}

export default H1;