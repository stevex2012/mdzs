import React from 'react';
import { Banner, H1 } from '../components';
import Link from 'next/link';
const LIST = [
    {
        img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
        name: '清新地中海',
        id:'0',
    },
    {
        img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
        name: '清新地中海',
        id:'0',
    },
    {
        img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
        name: '清新地中海',
        id:'0',
    },
    {
        img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
        name: '清新地中海',
        id:'0',
    }, {
        img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
        name: '清新地中海',
        id:'0',
    }
]
class Case extends React.Component {
    static async getInitialProps({ query }) {
        //获取 query type战绩，0--工装类 1--私宅类
        const { type } = query;
        return { type };
    }
    renderItem(item) {
        const { img, name,id } = item;
        return (
            <div className="item_wrap">
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
                `}</style>
                <Link href={`/caseDetail?id=id`}>
                    <a className="item">
                        <img src={img} />
                        <div className="title">{name}</div>
                    </a>
                </Link>
            </div>
        )
    }
    render() {
        return (
            <React.Fragment>
                <style jsx>{`
                    .wrap{
                        width:1200px;
                        margin:0 auto;
                        padding: 20px 0;
                        display:flex;
                        flex-wrap:wrap;
                    }
                `}</style>
                <Banner bgImg={'../static/img/case_banner.jpg'} />
                <div className="wrap">
                    {LIST.map(this.renderItem)}
                </div>
            </React.Fragment>
        )
    }
}

export default Case;