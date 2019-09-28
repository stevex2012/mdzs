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
                家具
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                灯具
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                工艺
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                饰品
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                画艺
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                地毯
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                华艺
      </a>
        </Menu.Item>
    </Menu>
)
const CASE_DROP_DOWN = (
    <Menu>
        <Menu.Item>
            工装类
        </Menu.Item>
        <Menu.Item>
            私宅类
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
                    <Link href="/">
                        <a className="">关于</a>
                    </Link>
                    <Dropdown overlay={CASE_DROP_DOWN}>
                        <a className="">案例</a>
                    </Dropdown>
                    <Link href="/">
                        <a  className="logo"></a>
                    </Link>
                    <Dropdown overlay={PRODUCT_MENU}>
                        <a className="">产品</a>
                    </Dropdown>
                    <Link href="/teamView">
                        <a className="">团队</a>
                    </Link>
                    <Link href="/teamView">
                        <a className="">联系</a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Nav;