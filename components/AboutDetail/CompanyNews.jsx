import React from 'react';
const DATA = [
    {
        img:'',
        title:'',
        id:'0'
    },
    {
        img:'',
        title:'',
        id:'1'
    },
    {
        img:'',
        title:'',
        id:'2'
    },
    {
        img:'',
        title:'',
        id:'3'
    },
]
function CompanyNews(){
    return (
        <div className="gs_w">
            <style>{`
                .gs_w{
                    max-width:1200px;
                    margin:0 auto;
                    color:#333;
                }
                .t{
                    text-align: center;
                    font-size: 30px;
                    padding: 20px 0;
                }
                .gs_w .item_W{
                    display:flex;
                }
            `}</style>
            <div className="t">公司动态</div>
            {DATA.map(item=>{
                const {img,title,id} = item;
                return <div className="item_W" key={id}>
                    <div>
                        <img src={img} alt=""/>
                    </div>
                    <div>{title}</div>
                    <div>{'详细信息'}</div>
                </div>
            })}
        </div>
    );
}

export default CompanyNews;