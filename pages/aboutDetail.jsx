import React from 'react';
import { Banner, H1 } from '../components';
import Link from 'next/link';
import caseConfig from '../config/caseconfig.js';
// import LazyLoad from 'react-lazyload';
import Head from 'next/head';
import AboutDetail from '../components/AboutDetail';
// 0  工装  1，私装
class Case extends React.Component {
    static async getInitialProps({ query }) { 
        //获取 query type战绩，0--关于蒂珀希 1--公司动态 2----服务领域 3---家具百科
        const { type } = query;
        return { type };
    }
    render() {
        const { type } = this.props;
        const list = caseConfig[type]
        return (
            <React.Fragment>
                <Head>
                    <title>装修案例 | 蒂珀希设计</title>
                </Head>
                <AboutDetail type={type}/>
            </React.Fragment>
        )
    }
}

export default Case;