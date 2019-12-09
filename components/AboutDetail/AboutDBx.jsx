import React from 'react';
function AboutDBx(){
    return (
        <div className="dbx_jj_warp">
            <style>{`
                .dbx_jj_warp{
                    text-align: center;
                    color: #333;
                }
                .dbx_jj_warp .title{
                    font-size:40px;
                    padding-top:50px;
                }
                .dbx_jj_warp .sub_t{
                    font-size:40px;
                    padding-bottom: 50px;
                    border-bottom: 1px solid #ddd;
                }
                .desc{
                    max-width:1200px;
                    margin:0 auto;
                    text-align:left;
                }
                .h_w{
                    padding:10px 0;
                }
                .header{
                    font-size:20px;
                    line-height: 40px;
                }
                .sub_h{
                    font-size:16px;
                    line-height: 30px;
                }
            `}
            </style>
            <div className="title">蒂珀希简介</div>
            <div className="sub_t">About us</div>
            <div className="desc">
                <div className="h_w">
                    <div className="header">公司简介：</div>
                    <div className="sub_h">专业，是我们的色彩；</div>
                    <div className="sub_h">创造，是色彩的性格；</div>
                    <div className="sub_h">执着，是性格的灵魂。</div>
                    <div className="sub_h">为了每一簇空间的寄托，我们用专业执着于创造经典。</div>
                    <div className="sub_h">一画、一物、一色彩都能让时间来品味。</div>
                    <div className="sub_h">砥砺前行，</div>
                    <div className="sub_h">蒂珀希，将把国际流行趋势与经典，带到您的身边。</div>
                </div>
                <div className="h_w">
                    <div className="header">价值观：</div>
                    <div className="sub_h">成就他人之美；是对自己最大肯定。</div>
                </div>
                <div className="h_w">
                    <div className="header">愿景：</div>
                    <div className="sub_h">喧嚣中，您能走进的这一屡平静。</div>
                </div>
            </div>
        </div>
    )
}

export default AboutDBx;