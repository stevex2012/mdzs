

import React, { useState } from 'react';
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
                }
                .md_fr_menu .item:hover{
                    background-color: #e40231;
                    border-bottom: solid 1px #a40324;
                }
            `}</style>
            <div>
                <div className="item">
                    <img src="../../static/img/icon_call.png" alt="" />
                </div>
                <div className="item">
                    <img src="../../static/img/erweima.png" alt="" />
                </div>
                <div className="item">
                    <img src="../../static/img/fanhui.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default FloatMenu;