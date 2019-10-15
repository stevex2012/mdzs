import React, { useState } from 'react';
// import { Button } from 'antd';
import H1 from '../H1/H1';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
//工装数据
const G_Z_DATA = {
    bg: {
        img: '../../static/img/caseshow/gong/1.png',
        href: '/caseDetail?id=1&type=0'
    },
    bottom: [
        {
            img: '../../static/img/caseshow/gong/2.jpg',
            href: '/caseDetail?id=0&type=0'
        },
        {
            img: '../../static/img/caseshow/gong/3.jpg',
            href: '/caseDetail?id=0&type=0'
        }
    ],
    right: [
        {
            img: '../../static/img/caseshow/gong/4.png',
            href: '/caseDetail?id=1&type=0'
        },
        {
            img: '../../static/img/caseshow/gong/5.png',
            href: '/caseDetail?id=1&type=0'
        },
        {
            img: '../../static/img/caseshow/gong/6.jpg',
            href: '/caseDetail?id=0&type=0'
        }
    ]
}
//私装数据
const S_Z_DATA = {
    bg: {
        img: '../../static/img/caseshow/si/1.jpg',
        href: '/caseDetail?id=14&type=1'
    },
    bottom: [
        {
            img: '../../static/img/caseshow/si/2.jpg',
            href: '/caseDetail?id=0&type=1'
        },
        {
            img: '../../static/img/caseshow/si/3.jpg',
            href: '/caseDetail?id=6&type=1'
        }
    ],
    right: [
        {
            img: '../../static/img/caseshow/si/4.jpg',
            href: '/caseDetail?id=16&type=1'
        },
        {
            img: '../../static/img/caseshow/si/5.jpg',
            href: '/caseDetail?id=5&type=1'
        },
        {
            img: '../../static/img/caseshow/si/6.jpg',
            href: '/caseDetail?id=10&type=1'
        }
    ]
}
//所有数据
const ALL_DATA = [
    S_Z_DATA,
    G_Z_DATA
]

const CaseShow = () => {
    const [key, setKey] = useState(0);
    const imgData = ALL_DATA[key];
    const { bg, bottom, right } = imgData;
    return (
        <div className="caseshow_box">
            <style jsx>{`
                .caseshow_box{
                    width:1200px;
                    margin:0 auto;
                }
                .switch{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .switch .btn{
                    border: none;
                    padding: 5px 20px;
                    font-size: 16px;
                    margin: 0 10px;
                    cursor:pointer;
                    background: #efefef;
                }
                .switch .btn.ac{
                    background-color: #1890ff;
                    color:#fff;
                }
                .wrap{
                    display:flex;
                    justify-content: center;
                }
                .wrap img{
                    width:100%;
                }
                .left{
                    width:800px;
                }
                .right{
                    width:400px;
                }
                .top{
                    height:450px;
                }
                .item{
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    margin:0;
                    border: 10px solid transparent;
                    overflow:hidden;
                    flex:1;
                }
                .bottom{
                    display: flex;
                    height: 225px;
                }
                .right{
                    display: flex;
                    height: 675px;
                    flex-direction: column;
                }
                .right .item{
                    flex:1;
                }
            `}</style>
            <H1
                title={<span>经典案例</span>}
            // subTitle={"Decoration package"}
            />
            <div className="switch">
                <div className={`btn ${key === 0 ? 'ac' : ''}`} onClick={() => setKey(0)}>私装类</div>
                <div className={`btn ${key === 1 ? 'ac' : ''}`} onClick={() => setKey(1)}>工装类</div>
            </div>
            <div className="wrap">
                <div className="left">
                    <LazyLoad height={450}>
                        <div className="top item">
                            <Link href={bg.href}>
                                <a>

                                    <img src={bg.img} />

                                </a>
                            </Link>
                        </div>
                    </LazyLoad>
                    <div className="bottom">
                        {bottom.map((item, idx) => {
                            const { img, href } = item;
                            return <LazyLoad height={225} key={idx}>
                                <div className="item" key={idx}>
                                    <Link href={href}>
                                        <a>
                                            <img src={img} />
                                        </a>
                                    </Link>
                                </div>
                            </LazyLoad>
                        })}
                    </div>
                </div>
                <div className="right">
                    {right.map((item, idx) => {
                        const { img, href } = item;
                        return <LazyLoad height={225} key={idx}>
                            <div className="item" key={idx}>
                                <Link href={href}>
                                    <a>
                                        <img src={img} />
                                    </a>
                                </Link>
                            </div>
                        </LazyLoad>
                    })}
                </div>
            </div>
        </div>
    )
}

export default CaseShow;