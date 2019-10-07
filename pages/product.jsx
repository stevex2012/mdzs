import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import productsConfig from '../config/productsConfig';

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
                <style jsx>{`
                    .wrap{
                        background:#fff;
                        width:1200px;
                        margin:0 auto;
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
                            const { id, txt } = tab;
                            return <TabPane tab={txt} key={id}>
                                {txt}
                        </TabPane>
                        })
                    }
                </Tabs>
            </div>
        )
    }
}

export default Case;