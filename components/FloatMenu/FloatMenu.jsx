

import React, { useState } from 'react';
function handleGotop(){
    window.scrollTo(0,0);
}
const FloatMenu = function () {
    return (
        <div className="md_fr_menu">
            <style jsx>{`
                .md_fr_menu{
                    position:fixed;
                    right:0;
                    top:50%;
                    z-index:99;
                }
                .md_fr_menu .item{
                    position: relative;
                    width: 80px;
                    height: 80px;
                    background-color: #646577;
                    border-bottom: solid 1px #555666;
                    text-align: center;
                    background-repeat: no-repeat;
                    background-position: center 20%;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .md_fr_menu .item:hover{
                    background-color: #e40231;
                    border-bottom: solid 1px #a40324;
                }
                .md_fr_menu .item:hover .sub_child{
                    display:block;
                }
                .item .txt{
                    color: #fff;
                    display: block;
                    font-size: 15px;
                }
                .sub_child{
                    display:none;
                    position:absolute;
                    height: 100%;
                    right: 100%;
                    width: 160px;
                    line-height: 0.5;
                    background-color: #e40231;
                    line-height: 80px;
                    font-size: 16px;
                    color: #fff;
                    box-sizing:border-box;
                }
                .qrcod{
                    height: auto;
                    padding: 5px;
                    bottom:40px;
                }
                .t_1{
                    line-height:20px;
                    font-size:14px;
                }
                .t_2{
                    line-height:20px;
                    font-size:16px;
                }
            `}</style>
            <div>
                <div className="item">
                    <img src="../../static/img/icon_call.png" alt="" />
                    <span className="txt">电话联系</span>
                    <div className="sub_child">023-63018362</div>
                </div>
                <div className="item">
                    <img src="../../static/img/erweima.png" alt="" />
                    <span className="txt">微信公众号</span>
                    <div className="sub_child qrcod">
                        <img src='../../static/img/qrcode.jpg' width='145'/>
                        <div className="t_1">扫一扫</div>
                        <div className="t_2">获取装修设计资讯</div>
                    </div>
                </div>
                <div className="item" onClick={handleGotop}>
                    <img src="../../static/img/fanhui.png" alt="" />
                    <span className="txt">返回顶部</span>
                </div>
            </div>
        </div>
    )
}

export default FloatMenu;