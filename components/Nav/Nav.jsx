import React from 'react';
import Link from 'next/link'
import productsConfig from '../../config/productsConfig';
import { Menu, Dropdown, Icon } from 'antd';
const { SubMenu } = Menu;

const ABOUT_MENU = (
    <Menu>
        <Menu.Item>
            <Link href="/about">
                <a >关于我们</a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                服务领域
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                新闻中心
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                人才引进
      </a>
        </Menu.Item>
    </Menu>
);
const PRODUCT_MENU = (
    <Menu>
        {
            productsConfig.map(item => {
                const { id, txt } = item;
                return <Menu.Item>
                    <Link href={`/product?id=${id}`}>
                        <a>
                            {txt}
                        </a>
                    </Link>
                </Menu.Item>
            })
        }
    </Menu>
)
const CASE_DROP_DOWN = (
    <Menu>
        <Menu.Item>
            <Link href="/case?type=0" >
                工装类
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link href="/case?type=1">
                私宅类
            </Link>
        </Menu.Item>
    </Menu>
)
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
                .nav  a{
                    font-size:16px;
                }
                .logo{
                    width: 224px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .logo img{
                    width:100%;
                }
                {/* a:hover{
                    border-bottom:3px solid red;
                } */}
                
                `}</style>
                <div className="right nav">
                    <Link href="/">
                        <a className="">首页</a>
                    </Link>
                    <Link href="/#md_about">
                        <a className="">关于</a>
                    </Link>
                    <Dropdown overlay={CASE_DROP_DOWN}>
                        <a className="">案例</a>
                    </Dropdown>
                    <Link href="/">
                        <a className="logo">
                            <img src="../../static/img/logo.jpg" alt=''/>
                        </a>
                    </Link>
                    <Dropdown overlay={PRODUCT_MENU}>
                        <a className="">产品</a>
                    </Dropdown>
                    <Link href="/#md_team">
                        <a className="">团队</a>
                    </Link>
                    <Link href="/#md_connect">
                        <a className="">联系</a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Nav;