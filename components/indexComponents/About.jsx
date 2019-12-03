import React from 'react';
import H1 from '../H1/H1';
import { Carousel } from 'antd';
import LazyLoad from 'react-lazyload';
//轮播数据
const SWIPER_DATA = [
    {
        img: ''
    }
]
const About = () => {
    return (
        <div className="about_index">
            <style>{`
                .about_index{
                    width:1200px;
                    margin:0 auto;
                }
                .about_index .item{
                    height:350px;
                    background:#ccc;
                }
                .about_index .desc{
                    line-height: 28px;
                    font-size: 16px;
                    text-indent: 2em;
                    padding:20px 0;
                }
            `}</style>
            <LazyLoad height={130} >
                <H1
                    title={<span>关于我们</span>}
                />
            </LazyLoad>
            <div className="swiper_wrap">
                <LazyLoad height={350} >
                    <Carousel
                        arrows
                        dots
                        draggable
                        autoplay>
                        <div className="item">
                            <img src="../../static/about/about1.jpg" />
                        </div>
                        <div className="item">
                            <img src="../../static/about/about2.jpg" />
                        </div>
                        <div className="item">
                            <img src="../../static/about/about3.jpg" />
                        </div>
                        <div className="item">
                            <img src="../../static/about/about4.jpg" />
                        </div>
                    </Carousel>
                </LazyLoad>
                <LazyLoad height={152} >
                    <div className="desc">设计，以自然为师，以万物为友，以苍生为念。上善若水，静水流深。软装引领着民众的审美生活。一画、一物、一色彩、都会被时间严格地审阅和检验。所以对于设计我们不敢不敬畏，不能不尽心。
    万物皆有其美，闪耀在于挖掘。
    把握好每一束灯光、每一片帘布、每一件几案的走向、乃至每一个空间对产品的寄托，是我们安身立命之本，也是社会和美之源。
    在平淡中创造惊喜，在荒芜处发掘财富，在磨砺中打造美的经典和时尚。我们拒绝平庸和重复，颠覆自我和传统。点石成金是因为心中先有黄金，化腐朽为神奇是因为相信传奇。
                </div>
                </LazyLoad>
            </div>

        </div>
    )
}

export default About;