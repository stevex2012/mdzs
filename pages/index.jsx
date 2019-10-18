import React from 'react';
import { Banner, H1 } from '../components';
import CaseShow from '../components/indexComponents/CaseShow';
import About from '../components/indexComponents/About';
import Team from '../components/indexComponents/Team';
import Connect from '../components/indexComponents/Connect';
import { Carousel } from 'antd';
import LazyLoad from 'react-lazyload';
import Head from 'next/head'
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
        const packageData = this.state.package[packageIdx];
        return (
            <React.Fragment>
                <Head>
                    <title>蒂珀希设计</title>
                </Head>
                <style>{`
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
                    height:100%;
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
                    height:100%;
                }
                .pic_r h3 {
                    margin:0;
                    font-size: 20px;
                    font-weight: normal;
                    padding-top:28px;
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
                .item_s{
                }
                .item_s img{
                    width:100%;
                }
                `}</style>
                {/* <Banner bgImg={'../static/img/index_banner1.jpg'} /> */}
                <div style={{overflow:'hidden'}}>
                    <Carousel
                        // arrows={true}
                        dots
                        draggable
                        autoplay>
                        <div className="item_s">
                            <img src="../static/img/ban1.jpg" />
                        </div>
                        <div className="item_s">
                            <img src="../static/img/ban2.jpg" />
                        </div>
                        <div className="item_s">
                            <img src="../static/img/ban3.jpg" />
                        </div>
                    </Carousel>
                </div>
                <ul className="auto pic">
                    <li>
                        <i className="left tb"></i>
                        <div className="left pic_r">
                            <h3>设计为核心竞争力</h3>
                            <p>一画、一物、一色彩、都会被时间严格地审阅和检 验。所以对于设计我们不敢不敬畏，不能不尽心</p>
                        </div>
                    </li>
                    <li>
                        <i className="left tb tb1"></i>
                        <div className="left pic_r">
                            <h3>严格供应链品质</h3>
                            <p>把握好每一个空间对产品的寄托，是我们安身立命 之本，也是社会和美之源</p>
                        </div>
                    </li>
                    <li>
                        <i className="left tb tb3"></i>
                        <div className="left pic_r">
                            <h3>打造创新意识团队</h3>
                            <p>我们拒绝平庸和重复，颠覆自我和传统</p>
                        </div>
                    </li>
                    <li>
                        <i className="left tb tb2"></i>
                        <div className="left pic_r">
                            <h3>优质高效服务体系</h3>
                            <p>点石成金是因为心中先有黄金，化腐朽为神奇是因 为相信传奇</p>
                        </div>
                    </li>
                </ul>
                <CaseShow />
                {/* 关于 */}
                <div className="" id="md_about">
                    <About />
                </div>
                {/* 团队 */}
                <div className="" id="md_team">
                    <Team />
                </div>
                {/* 联系 */}
                <div className="" id="md_connect">
                    <Connect />
                </div>
            </React.Fragment>
        )
    }
}

export default Index;