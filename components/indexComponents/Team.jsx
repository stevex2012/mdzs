import React from 'react';
import H1 from '../H1/H1';
const L_DATA = {
    img: 'http://www.cqdmjz.com/statics/images/images/sjs00.jpg',
    name: '周勋岗',
    job: '设计总监',
    years: '从业年限：15年',
    goodAt: '擅长风格：现代简约、美式、田园风'
}
const R_DATA = [
    {
        img: '../../static/img/cgr.jpg',
        name: '陈国荣',
        job: '私宅设计组组长',
        motto: '艺术是生活的升华，设计是艺术的呈现。'
    },
    {
        img: '../../static/img/mw.jpg',
        name: '毛伟',
        job: '首席创意总监',
        motto: '创意源于对生活的细细品味！'

    },
    {
        img: '../../static/img/wh.png',
        name: '文豪',
        job: '工装设计组组长',
        motto: '对建筑本原——空间、光线、界面的研究以及意境塑造是室内陈设的主要方向。'
    },
    {
        img: '../../static/img/zw.jpg',
        name: '曾维',
        job: '设计运营总监',
        motto: '设计是对生活品质的一种倡导、一种提升、一种对社会审美情趣的影响.'
    },
    {
        img: '../../static/img/zxg.jpg',
        name: '周勋岗',
        job: '设计总监',
        motto: '设计当以自然为师，以万物为友，以苍生为念。上善若水，静水流深。'
    },
    {
        img: 'http://www.cqdmjz.com/statics/images/images/sjs03.jpg',
        name: '乔乔',
        job: '首席设计师',
        motto: 'xxxxxx'
    },
]
const Team = () => {
    const { img, name, job, years, goodAt } = L_DATA;
    return (
        <div className="team">
            <style jsx>{`
                .team{
                    width:1200px;
                    margin:0 auto;
                }
                .team img{
                    width:100%;
                }
                .box{
                    display:flex;
                    
                }
                .left{
                    width:300px;
                    padding:10px;
                    background: #ff3333;
                    color:#fff;
                    height:540px;
                    flex-shrink: 0;
                    border-bottom: 10px solid #fff;
                }
                .right{
                    flex:1;
                    display: flex;
                    flex-wrap: wrap;
                }
                .desc{
                    display:flex;
                    font-size:30px;
                    align-items: center;
                    padding: 20px 0;
                    border-bottom: 1px #de8f8b solid;
                }
                .job{
                    font-size:16px;
                    margin-left:20px;
                }
                .year{
                    line-height:20px;
                    font-size:12px;
                    padding:10px 0;
                }
                .item{
                    width:33.3333%;
                    // height: 270px;
                    border:10px solid transparent;
                    overflow: hidden;
                    position:relative;
                    border-top:none;
                    border-right: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .dddd{
                    position:absolute;
                    left:0;
                    bottom:0;
                    width:100%;
                    line-height:38px;
                    background:rgba(0,0,0,0.3);
                    color:#fff;
                    padding:0 10px;
                    font-size:12px;
                }
                .txt_box{
                    font-size:16px;
                    line-height:30px;
                    color:#333;
                }
                .motto{
                    font-size:12px;
                    line-height:20px;
                }
                .img_box{
                    height:350px;
                    overflow:hidden;
                }
            `}</style>
            <H1
                title={<span>团队</span>}
            // subTitle={"Decoration package"}
            />
            <div className="box">
                {/* <div className="left">
                    <img src={img}/>
                    <div className="desc">
                        <span>{name}</span>
                        <span className="job">{job}</span>
                    </div>
                    <div className="year">{years}</div>
                    <div className="year">{goodAt}</div>
                </div> */}
                <div className="right">
                    {R_DATA.map(item => {
                        const { img, name, job, motto } = item;
                        return <div className="item">
                            <div className="img_box"><img src={img} /></div>
                            <div className="txt_box">
                                <div>{job}</div>
                                <div>{name}</div>
                                <div className="motto">{motto}</div>
                            </div>

                            {/* <div className="dddd">{name}--{job}</div> */}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team;