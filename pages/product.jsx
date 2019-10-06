import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const TABS = [
    {
        txt: '窗帘',
        id: 0
    },
    {
        txt: '灯具',
        id: 1
    },
    {
        txt: '地毯',
        id: 2
    },
    {
        txt: '花艺',
        id: 3
    },
    {
        txt: '画品',
        id: 4
    },
    {
        txt: '家具',
        id: 5
    },
    {
        txt: '家具',
        id: 6
    },
]
class Case extends React.Component {
    render() {
        return (
            <div className="wrap">
                <style jsx>{`
                    .wrap{
                        background:#fff;
                        width:1200px;
                        margin:0 auto;
                    }
                `}</style>
                <Tabs defaultActiveKey="1">
                    {
                        TABS.map(tab => {
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