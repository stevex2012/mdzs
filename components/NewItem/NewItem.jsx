//
import React from 'react';
import Link from 'next/link';
function NewItem({data}) {
    const { img, title, desc, time,href,id } = data;
    return <div className="item_w" key={title}>
        <style jsx>{`
            .item_w{
                display:flex;
                align-items: center;
            }
            .txt_b{
                padding:0 20px;
                flex:1;
            }
            .t_t{
                    line-height: 50px;
                    font-size: 20px;
            }
            .t_d{
                line-height: 20px;
                font-size: 16px;
            }
            .detail_b{
                color:#999;
                padding: 5px;
                border: 1px solid;
                
            }
            .time{
                color:#999;
                font-size:14px;
                margin-top: 20px;
            }

        `}</style>
        <div>
            <img src={img} alt="" />
        </div>
        <div className="txt_b">
            <div className="t_t">{title}</div>
            <div className="t_d">{desc}</div>
            <div className="time">{time}</div>
        </div>
        <Link href={`${href}?id=${id}`}>
            <a target="_blank" className="detail_b">{'详细信息'}</a>
        </Link>
        {/* <div className="detail_b"></div> */}
    </div>
}

export default NewItem;