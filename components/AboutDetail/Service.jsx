import React from 'react';
const DATA = [
    {
        title: '私装 ● 精装房',
        desc: '介绍',
        img: 'http://a3.att.hudong.com/35/34/19300001295750130986345801104.jpg',
    },
    {
        title: '售楼部 ● 样板房',
        desc: '介绍',
        img: 'http://a3.att.hudong.com/35/34/19300001295750130986345801104.jpg',
    },
    {
        title: '酒店 ● 民宿',
        desc: '介绍',
        img: 'http://a3.att.hudong.com/35/34/19300001295750130986345801104.jpg',
    },
    {
        title: '餐饮 ● 办公',
        desc: '介绍',
        img: 'http://a3.att.hudong.com/35/34/19300001295750130986345801104.jpg',
    }
]

function Service() {
    return <div>
        <style>{`
            .img{
                width:100%;
            }
            .main_s{
                width:1200px;
                margin:0 auto;
                display: flex;
                flex-wrap: wrap;
            }
            .item{
                position: relative;
                width: 50%;
                width: 600px;
                height: 600px;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                border: 10px solid transparent;
            }
            .w_s{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                line-height: 55px;
                color: #333;
                font-size: 34px;
                text-align: center;
            }
        `}</style>
        <div>
            <img className="img" src="../../static/servicebanner.png" />
        </div>
        <div className="main_s">
            {
                DATA.map(item => {
                    const { title, desc, img } = item;
                    return <div key={title} className="item">
                        <img src={img} alt="" />
                        <div className="w_s">
                            <div className="t">{title}</div>
                            <div className="s_t">{desc}</div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Service;