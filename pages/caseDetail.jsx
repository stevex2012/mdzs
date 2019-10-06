import React from 'react';
class caseDetail extends React.Component{
    static async getInitialProps({ query }) {
        //获取 query type战绩，0--工装类 1--私宅类
        const { id } = query;
        return { id };
    }
    //根据id获取数据
    getData(id){

    }
    render(){
        return(
                <div className="wrap">
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
                    <div className="title">现代简约-大观天下</div>
                    <div className="time">2017-04-23 19:00:15</div>
                    <div className="img_wrap">
                        <img src="http://www.cqdmjz.com/uploadfile/2017/0427/20170427112918811.jpg" />
                    </div>
                </div>
        )
    }
}

export default caseDetail;