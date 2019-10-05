import React from 'react';
import H1 from '../H1/H1';
import { Carousel } from 'antd';
//轮播数据
const SWIPER_DATA = [
    {
        img:''
    }
]
const About = () => {
    return (
        <div className="about">
            <style jsx>{`
                .about{
                    width:1200px;
                    margin:0 auto;
                }
                .item{
                    height:350px;
                    background:#ccc;
                }
                .desc{
                    line-height: 28px;
                    font-size: 16px;
                    text-indent: 2em;
                    padding:20px 0;
                }
            `}</style>
            <H1
                title={<span>关于我们</span>}
            // subTitle={"Decoration package"}
            />
            <div className="swiper_wrap">
                <Carousel 
                arrows
                dots
                draggable
                autoplay>
                    <div className="item">
                        <h3>1</h3>
                    </div>
                    <div className="item">
                        <h3>2</h3>
                    </div>
                    <div className="item"> 
                        <h3>3</h3>
                    </div>
                    <div className="item">
                        <h3>4</h3>
                    </div>
                </Carousel>
                <div className="desc">达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！达迈装饰！</div>
            </div>

        </div>
    )
}

export default About;