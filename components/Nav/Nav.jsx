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
    <React.Fragment>
        <Menu.Item key="gz">
            <Link href="/case?type=0" >
                工装类
            </Link>
        </Menu.Item>
        <Menu.Item key="sz">
            <Link href="/case?type=1">
                私宅类
            </Link>
        </Menu.Item>
    </React.Fragment>
)
function rendermenu() {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="mail">
                <Icon type="mail" />
                Navigation One
        </Menu.Item>
            <Menu.Item key="app" disabled>
                <Icon type="appstore" />
                Navigation Two
        </Menu.Item>
            <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                        <Icon type="setting" />
                        Navigation Three - Submenu
            </span>
                }
            >
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
          </a>
            </Menu.Item>
        </Menu>
    )
}
class Nav extends React.Component {
    render() {
        // return rendermenu();
        return (
            <div className="auto top1">
                <style jsx>{`
                .top1 {
                    height: 108px;
                }
                .auto {
                   
                    overflow: hidden;
                    border-bottom: 2px solid #eee;
                }
                .nav{
                    width: 1200px;
                    margin: 0 auto;
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
                    <Menu mode="horizontal">
                        <Menu.Item key="index">
                            <Link href="/">
                                <a className="">首页</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link href="/#md_about">
                                <a className="">关于</a>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="mail" title="案例">
                            <Menu.Item key="setting:1">
                                <Link href="/case?type=0" >
                                    工装类
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="setting:2">
                                <Link href="/case?type=0" >
                                私宅类
                                </Link>
                            </Menu.Item>
                        </SubMenu>

                        {/* <Dropdown overlay={CASE_DROP_DOWN}>
                            <a className="">案例</a>
                        </Dropdown> */}
                        <Menu.Item key="log">
                            <Link href="/">
                                <a className="logo">
                                    <img src="../../static/img/logo.jpg" alt='' />
                                </a>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="product" title="产品">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </SubMenu>

                        {/* <Dropdown overlay={PRODUCT_MENU}>
                            <a className="">产品</a>
                        </Dropdown> */}
                        <Menu.Item key="team">
                            <Link href="/#md_team">
                                <a className="">团队</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="connect">
                            <Link href="/#md_connect">
                                <a className="">联系</a>
                            </Link>
                        </Menu.Item>


                    </Menu>
                </div>
            </div>
        )
    }
}

export default Nav;