import React from 'react';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
class Nav extends React.Component {
    render() {
        return (
            <div className="auto top1">
                <style jsx>{`
                .top1 {
                    height: 108px;
                }
                .auto {
                    width: 1200px;
                    margin: 0 auto;
                    overflow: hidden;
                }
                .nav{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    height: 100%;
                }
                .logo{
                    background: url(../../static/img/img.jpg) no-repeat;
                    width: 224px;
                    height: 50px;
                }
                a:hover{
                    border-bottom:3px solid red;
                }
                `}</style>
                <div className="right nav">
                    <a href="/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=11" target="_blank" class="">首页</a>
                    <a href="/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=64" target="_blank" class="">关于</a>
                    <a href="/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=65" target="_blank" class="">案例</a>
                    <a href="/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=66" target="_blank" className="logo"></a>
                    <a href="/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=60" target="_blank" class="">产品</a>
                    <a href="/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=61" target="_blank" class="">团队</a>
                </div>
            </div>
        )
    }
}

export default Nav;