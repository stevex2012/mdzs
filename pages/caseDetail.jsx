import React from 'react';
import caseConfig from '../config/caseconfig.js';
import LazyLoad from 'react-lazyload';
import Head from 'next/head'
class caseDetail extends React.Component {
    static async getInitialProps({ query }) {
        //获取 query type战绩，0--工装类 1--私宅类
        const { id, type } = query;
        return { id, type };
    }
    //根据id获取数据
    getData(id, type) {
        return caseConfig[type].find(item => item.id == id);
    }
    render() {
        const { id, type } = this.props;
        const data = this.getData(id, type);
        const { name, time, imgList } = data;
        return (
            <div className="wrap">
                <Head>
                    <title>{name} | 蒂珀希设计</title>
                </Head>
                <style jsx>{`
                        .wrap{
                            width: 1000px;
                            background: #fff;
                            margin: 22px auto 0;
                            margin-bottom: 30px;
                            padding: 40px 50px;

                        }
                        .title{
                            font-size: 24px;
                            font-weight: normal;
                            color: #333;
                        }
                        .time{
                            border-bottom: 1px #ccc solid;
                            height: 36px;
                            padding-top: 5px;
                            color: #999;
                        }
                        .img_wrap{
                            font-size:0;
                            padding-top:30px;
                            text-align:center;
                        }
                        .img_wrap img{
                            width:800px;
                        }
                    `}</style>
                <div className="title">{name}</div>
                <div className="time">{time}</div>
                <div className="img_wrap">
                    {imgList.map(item => {
                        return <LazyLoad heigt={500} key={item}><img src={item} key={item} /></LazyLoad>
                    })}
                </div>
            </div>
        )
    }
}

export default caseDetail;