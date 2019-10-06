import React from 'react';
import Link from 'next/link'
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
        <Menu.Item>

            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                窗帘
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                灯具
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                地毯
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                花艺
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                画品
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                家具
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                饰品
      </a>
        </Menu.Item>
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
                    background: url(../../static/img/img.jpg) no-repeat;
                    width: 224px;
                    height: 50px;
                }
                {/* a:hover{
                    border-bottom:3px solid red;
                } */}
                
                `}</style>
                <div className="right nav">
                    <Link href="/">
                        <a className="">首页</a>
                    </Link>
                    <a className="" href="#md_about">关于</a>
                    <Dropdown overlay={CASE_DROP_DOWN}>
                        <a className="">案例</a>
                    </Dropdown>
                    <Link href="/">
                        <a className="logo"></a>
                    </Link>
                    <Dropdown overlay={PRODUCT_MENU}>
                        <a className="">产品</a>
                    </Dropdown>
                    <a className="" href="#md_team">团队</a>
                    <a className="" href="#md_connect">联系</a>
                </div>
            </div>
        )
    }
}

export default Nav;