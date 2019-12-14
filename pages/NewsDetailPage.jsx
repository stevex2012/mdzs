import React from 'react';
import NewDetail from '../components/NewDetail/NewDetail';
import { render } from 'react-dom';
const DATAMAP = {
    '0':{
        title:'[蒂珀希] 与迪鑫•阳光天宸完成年终握手',
        time:'2019.12.7  10:00',
        publisher:'管理员',
        abstract:'经过数月积极沟通与争取，成功与江津迪鑫房地产有限公司年终握手。',
        content:`年终还是一如既往的忙碌，但心情是愉悦的。
        已经不记得是第几次前往了，
        但，我们依然在路上；
        已经不记得是第几次修改，
        但，我们终会让他们满意；
        ……
        “嗯，配色好看”
        “这架子有点意思”
        `,
        floor:[
            
        ],
        editor:'',
        keyWords:''
    },
    '1':{
        title:'',
        time:'',
        publisher:'',
        abstract:'',
        content:'',
        floor:[
            `努力终于迎来回报，
            迪鑫•阳光天宸握手成功。
            我们相信——
            这只是一个开始。
            `
        ],
        editor:'',
        keyWords:''
    }
}
class NewsDetailPage extends React.Component{
    static async getInitialProps({ query }) { 
        //获取 query type战绩，0--关于蒂珀希 1--公司动态 2----服务领域 3---家具百科
        const { id } = query;
        return { id };
    }
    render(){
        const {id} = this.props;
        const data = DATAMAP[id] || {};
        return <NewDetail data={data}/>
    }
}

export default NewsDetailPage;