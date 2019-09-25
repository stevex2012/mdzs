import React from 'react';
import { Menu, Icon } from 'antd';
import Link from 'next/link'
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
                    <Link href="/">
                        <a className="">首页</a>
                    </Link>
                    <Link href="/about">
                        <a className="">关于</a>
                    </Link>
                    <a href="/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=65" target="_blank" className="">案例</a>
                    <a href="/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=66" target="_blank" className="logo"></a>
                    <a href="/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=60" target="_blank" className="">产品</a>
                    <a href="/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=61" target="_blank" className="">团队</a>
                </div>
            </div>
        )
    }
}

export default Nav;