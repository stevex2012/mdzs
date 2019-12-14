import React from 'react';
function renderContent(data) {
    if (Array.isArray(data)) {
        return <div className="xx_cont">
            <style>{`
                .sb_t{
                    font-size:16px;
                }
            `}</style>
            {
                data.map(item => {
                    const { title, p } = item;

                    return <div>
                        {title && <div className="sb_t">{title}</div>}
                        {p && <p className="sb_p" dangerouslySetInnerHTML={{ __html: p }} ></p>}
                    </div>
                })
            }
        </div>;
    }
    return data;
}
function NewDetail({ data }) {
    const {
        title,
        time,
        abstract,
        content,
        floors,
        editor,
        keyWords
    } = data;
    return (
        <div className="n_detail_w">
            <style>{`
                .n_detail_w{
                    max-width: 1200px;
                    margin: 0 auto;
                    color: #333;
                }
                .n_detail_w img{
                    width:100%
                }
                .ttt{
                    font-size: 20px;
                    padding: 20px 0;
                }
                .time{
                    text-align: right;
                }
                .absct{
                    font-size: 16px;
                    padding: 15px 0;
                }
                .desc{
                    font-size: 14px;
                    line-height: 28px;
                }
                .editor_{
                    font-size: 14px;
                    line-height: 28px;
                    text-align:right;
                }
            `}</style>
            <div className="ttt">{title}</div>
            <div className="time">发布时间：{time}</div>
            <div className="absct">摘要：{abstract}</div>
            <div className="desc">{renderContent(content)}</div>
            {floors.map(floor => {
                const { img, text } = floor;
                return (
                    <div className="fl_item">
                        {text && <div className="txt desc">{text}</div>}
                        {img && <div className="txt">
                            <img src={img} alt='' />
                        </div>}
                    </div>
                )
            })}
            {editor && <div className="editor_">责任编辑：{editor}</div>}
            {keyWords && <div className="editor_">关键字：{keyWords}</div>}
        </div>
    )
}

export default NewDetail;