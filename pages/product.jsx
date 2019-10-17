import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import productsConfig from '../config/productsConfig';
import LazyLoad from 'react-lazyload';
import Head from 'next/head'
class Case extends React.Component {
    static async getInitialProps({ query }) {
        //获取 query type战绩，0--工装类 1--私宅类
        const { id } = query;
        return { id };
    }
    
    render() {
        const {id} = this.props;
        return (
            <div className="wrap">
                <Head>
                    <title>产品 | 蒂珀希设计</title>
                </Head>
                <style jsx>{`
                    .wrap{
                        background:#fff;
                        width:1200px;
                        margin:0 auto;
                    }
                    .item{
                        display:flex;
                        flex-wrap: wrap;
                    }
                    .item img{
                        width:50%;
                        padding:10px;
                    }
                `}</style>
                <style global='true'>{`
                    .ant-tabs-nav-scroll{
                        display:flex;
                        justify-content: center;
                    }
                `}</style>
                <Tabs defaultActiveKey={id}>
                    {
                        productsConfig.map(tab => {
                            const { id, txt,imgList } = tab;
                            console.log('imgList',imgList);
                            return <TabPane tab={txt} key={id}>
                                <div className="item">
                                    {imgList.map(item=>{
                                        return <LazyLoad height={800}><img src={item} alt='' key={item}/></LazyLoad>
                                    })}
                                </div>
                        </TabPane>
                        })
                    }
                </Tabs>
            </div>
        )
    }
}

export default Case;