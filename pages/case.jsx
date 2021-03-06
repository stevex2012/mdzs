import React from 'react';
import { Banner, H1 } from '../components';
import Link from 'next/link';
import caseConfig from '../config/caseconfig.js';
import LazyLoad from 'react-lazyload';
import Head from 'next/head'
// 0  工装  1，私装
class Case extends React.Component {
    static async getInitialProps({ query }) {
        //获取 query type战绩，0--工装类 1--私宅类
        const { type } = query;
        return { type };
    }
    handleLoad = (e) => {
        const baseH = 310;
        const baseW = 367;
        const rate = baseW/baseH;
        const el = e.target;
        const w = el.width;
        const h = el.height;
        const elRate = w/h;
        if(elRate<rate){
            e.target.style.cssText = 'width:100%;height:auto'
        }else{
            e.target.style.cssText = 'height:100%;width:auto'
        }

    }
    renderItem(item, type) {
        const { img, name, id } = item;
        return (
            <div className="item_wrap" key={id}>
                <style jsx>{`
                    .item_wrap{
                        width:33.33%;
                        padding:15px 5px 0;
                    }
                    .item{
                        display:block;
                        padding: 10px;
                        transition: box-shadow 0.5s linear 0s;
                        border: 1px #eee solid;
                    }
                    .item:hover{
                        color: #ff3333;
                        box-shadow: 0px 0px 15px #999;
                    }
                    .item img{
                        width:100%;
                    }
                    .title{
                        font-size: 14px;
                        padding-top: 20px;
                        padding-bottom: 10px;
                        text-align: center;
                    }
                    .img_wrap{
                        height:310px;
                        display:flex;
                        align-items: center;
                        justify-content: center;
                        overflow:hidden;
                    }
                `}</style>
                <Link href={`/caseDetail?id=${id}&type=${type}`}>
                    <a className="item">
                        <div className="img_wrap">
                            <LazyLoad height={310}>
                                <img src={img} onLoad={e => this.handleLoad(e)} />
                            </LazyLoad>
                        </div>
                        <div className="title">{name}</div>
                    </a>
                </Link>
            </div>
        )
    }
    render() {
        const { type } = this.props;
        const list = caseConfig[type]
        return (
            <React.Fragment>
                <Head>
                    <title>装修案例 | 蒂珀希设计</title>
                </Head>
                <style jsx>{`
                    .wrap{
                        width:1200px;
                        margin:0 auto;
                        padding: 20px 0;
                        display:flex;
                        flex-wrap:wrap;
                    }
                `}</style>
                <Banner bgImg={'../static/img/index_banner1.jpg'} />
                <div className="wrap">
                    {list.map((item) => this.renderItem(item, type))}
                </div>
            </React.Fragment>
        )
    }
}

export default Case;