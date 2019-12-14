import React from 'react';
import NewItem from '../NewItem/NewItem';
const DATA = [
    {
        img: '../../static/img/about/furniture/ency_pic_1.jpg',
        title: '家居软饰保养手册',
        time: '2019.12.7  10:00',
        desc: '我们所提到的软饰家居主要以汽绵、织物、皮制为主的沙发、窗帘、床上用品等，也是人们在生活中最常用到，但也是最容易忽略的物件。今天我们就为大家详细的说一说这此用品的使用及保养方法。',
        id: '0'
    },
]
const bannderImg = '../../static/img/about/furniture/Encyclopedia_pic.jpg'
function FamilyTool(){
    return (
        <React.Fragment>
            <style>{`
                .banner_w img{
                    width:100%;
                }
                .gs_w{
                    max-width:1200px;
                    margin:0 auto;
                    color:#333;
                    padding: 50px 0;
                }
            `}</style>
            <div className="banner_w">
                <img src={bannderImg} />
            </div>
            <div className="gs_w">
                {DATA.map(item => <NewItem data={item} key={item.id}/>)}
            </div>
        </React.Fragment>
    )
}

export default FamilyTool;