import React from 'react';
import H1 from '../H1/H1';
const L_DATA = {
    img:'http://www.cqdmjz.com/statics/images/images/sjs00.jpg',
    name:'周勋岗',
    job:'设计总监',
    years:'从业年限：15年',
    goodAt:'擅长风格：现代简约、美式、田园风'
}
const R_DATA = [
    {
        img:'http://www.cqdmjz.com/statics/images/images/sjs03.jpg',
        name:'乔乔',
        job:'首席设计师'
    },
    {
        img:'http://www.cqdmjz.com/statics/images/images/sjs03.jpg',
        name:'乔乔',
        job:'首席设计师'
    },
    {
        img:'http://www.cqdmjz.com/statics/images/images/sjs03.jpg',
        name:'乔乔',
        job:'首席设计师'
    },
    {
        img:'http://www.cqdmjz.com/statics/images/images/sjs03.jpg',
        name:'乔乔',
        job:'首席设计师'
    },
    {
        img:'http://www.cqdmjz.com/statics/images/images/sjs03.jpg',
        name:'乔乔',
        job:'首席设计师'
    },
    {
        img:'http://www.cqdmjz.com/statics/images/images/sjs03.jpg',
        name:'乔乔',
        job:'首席设计师'
    },
]
const Team = () => {
    const { img ,name,job,years,goodAt} = L_DATA;
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
                    border-bottom: 5px solid #fff;
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
                    height: 270px;
                    border:10px solid transparent;
                    overflow: hidden;
                    position:relative;
                    border-top:none;
                    border-right: none;
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
            `}</style>
            <H1
                title={<span>团队</span>}
            // subTitle={"Decoration package"}
            />
            <div className="box">
                <div className="left">
                    <img src={img}/>
                    <div className="desc">
                        <span>{name}</span>
                        <span className="job">{job}</span>
                    </div>
                    <div className="year">{years}</div>
                    <div className="year">{goodAt}</div>
                </div>
                <div className="right">
                    {R_DATA.map(item=>{
                        const { img, name,job } = item;
                        return <div className="item">
                            <img src={img} />
                            <div className="dddd">{name}--{job}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team;