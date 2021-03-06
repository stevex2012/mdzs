import React from 'react';
import NewItem from '../NewItem/NewItem';
const DATA = [
    {
        img: '../../static/img/about/company/news_pic_1.jpg',
        title: '[蒂珀希] 与迪鑫•阳光天宸完成年终握手',
        time: '2019.12.7  10:00',
        desc: '经过数月积极沟通与争取，成功与江津迪鑫房地产有限公司年终握手',
        id: '0',
        href:'/NewsDetailPage'
    },
]
const bannderImg = '../../static/img/about/company/news_pic.jpg'
function CompanyNews() {
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
    );
}

export default CompanyNews;