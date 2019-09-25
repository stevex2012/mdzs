import React from 'react';
import {  Banner,H1 } from '../components';
class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
                <style jsx>{`
                .pic {
                    height:151px;
                    display:flex;
                    align-items:center;
                    border: 1px #eee solid;
                }
                .auto {
                    width: 1200px;
                    margin: 0 auto;
                    overflow: hidden;
                }
                .pic li {
                    display:flex;
                    width: 274px;
                    padding-left: 25px;
                    overflow: hidden;
                    border-left: 1px #eee solid;
                    list-style: none;
                    flex-grow:1;
                    align-items:center;
                }
                .pic li:nth-child(1){
                    border-left:none;
                }
                .tb {
                    background: url(../../static/img/img.jpg) no-repeat;
                    background-position: 0px -50px;
                    width: 64px;
                    height: 64px;
                }
                .pic_r {
                    flex-grow:1;
                    width: 170px;
                    padding-left: 20px;
                    box-sizing:border-box;
                }
                .pic_r h3 {
                    margin:0;
                    font-size: 20px;
                    font-weight: normal;
                }
                .pic_r p {
                    
                    color: #666;
                    margin-top: 3px;
                }
                .tb1 {
                    background-position: -64px -50px;
                }
                .tb2 {
                    background-position: -128px -50px;
                }
                .tb3 {
                    background-position: -192px -50px;
                }
                `}</style>
                <Banner bgImg={'../static/img/index_banner.jpg'} />
                <ul className="auto pic">
                    <li>
                        <i className="left tb"></i>
                        <div className="left pic_r">
                            <h3>高标准入驻条件</h3>
                            <p>装修公司参加培训，经过严格考核达标后，才可入驻合作</p>
                        </div>
                    </li>
                    <li>
                        <i className="left tb tb1"></i>
                        <div className="left pic_r">
                            <h3>统一辅材标准</h3>
                            <p>装修公司使用平台认证辅料，保证材料质量和材料品质</p>
                        </div>
                    </li>
                    <li>
                        <i className="left tb tb2"></i>
                        <div className="left pic_r">
                            <h3>统一施工验收标准</h3>
                            <p>有效提升工地的施工品质，使施工质量更有保障</p>
                        </div>
                    </li>
                    <li>
                        <i className="left tb tb3"></i>
                        <div className="left pic_r">
                            <h3>统一工地形象</h3>
                            <p>规范工人的施工标准，让施工现场不再脏、乱、差</p>
                        </div>
                    </li>
                </ul>
                <H1 />
            </React.Fragment>
        )
    }
}

export default Index;