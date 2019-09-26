import React from 'react';
import { Banner, H1 } from '../components';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            package: [
                {
                    title: '整装·极致装',
                    o_price: '1398',
                    price: '699',
                    desc: '创造白领阶层梦想生活',
                    img: '../static/img/tc_jzz2.jpg'
                }
            ],
            packageIdx: 0,
        }
    }
    render() {
        const { packageIdx } = this.state;
        const packageData =  this.state.package[packageIdx];
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
                .main_con{
                    width:1200px;
                    margin:0 auto;
                }
                .floor_1{
                    height: 400px;
                    margin-top: 42px;
                    display:flex;
                }
                .floor_1 .left{
                    width: 520px;
                    height:100%;
                    background: #ff3333;
                    overflow: hidden;
                }
                .floor_1 .right{
                    width: 680px;
                    height:100%;
                }
                .inner_box{
                    border: 2px #fff8f8 solid; 
                    width: 480px;
                    height: 300px;
                    margin: 50px auto 0px auto;
                    position: relative;
                    color: #fff;
                    text-align: center;
                    z-index: 1;
                }
                .inner_box h1{
                    width: 315px;
                    text-align: center;
                    font-size: 36px;
                    position: absolute;
                    left: 90px;
                    top: -26px;
                    font-family: 黑体;
                    font-weight: bold;
                    background: rgb(255, 51, 51);
                    color:#fff;
                }
                .inner_box p{
                    color: #ffdada;
                    padding-top: 30px;
                }
                .inner_box p span{
                    margin: 0px 15px;
                }
                .inner_box h3{
                    font-size: 48px;
                    margin-top: 46px;
                    font-weight: normal;
                    color: #fff;
                }
                .yuanjia{
                    font-size: 24px;
                    color: #ffd0d0;
                    text-decoration: line-through;
                }
                .package_tab{
                    background: #ff3333;
                    width: 420px;
                    height: 37px;
                    position: absolute;
                    left: 50%;
                    margin-left:-210px;
                    bottom: -19px;
                    z-index: 2;
                }
                .package_tab .tab_item{
                    width: 104px;
                    height: 37px;
                    background: #fff;
                    float: left;
                    text-align: center;
                    color: #3a3a3a;
                    text-align: center;
                    line-height: 37px;
                    margin-left: 29px;
                    overflow: hidden;
                    font-size: 18px;
                    cursor: pointer;
                }
                .package_tab .ac{
                    background: #3a3a3a;
                    color: #fff;
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
                <div className="main_con">
                    <H1
                        title={<span>环保整装<font style={{ color: '#ff3333' }}>套餐</font></span>}
                        subTitle={"Decoration package"} />
                </div>
                <div className="floor_1 main_con">
                    <div className="left">
                        <div className="inner_box">
                            <h1>{packageData.title}</h1>
                            <p>包设计<span> · </span>包材料<span> · </span>包施工<span> · </span>包监理<span> · </span>包售后<span> · </span>包保洁</p>
                            <h3>半价{packageData.price}元/㎡</h3>
                            <div className="yuanjia">原{packageData.o_price}元/㎡</div>
                            <div className="package_tab">
                                <span className={`tab_item ${packageIdx === 0 ? 'ac' : ''}`}>精致装</span>
                                <span className={`tab_item ${packageIdx === 1 ? 'ac' : ''}`}>雅致装</span>
                                <span className={`tab_item ${packageIdx === 2 ? 'ac' : ''}`}>极致装</span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={packageData.img} alt='' />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Index;