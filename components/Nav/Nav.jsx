import React from 'react';
import Link from 'next/link'
import productsConfig from '../../config/productsConfig';
import { Menu, Dropdown, Icon } from 'antd';
import { relative } from 'upath';
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
    </Menu >
)

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            left: 0,
            orginW: 0,
            orginL: 0,
        }
        this.ref = React.createRef();
        this.refal = React.createRef();
        this.refcp = React.createRef();
    }
    componentDidMount() {
        console.log('xxxxxx')
        const path = window.location.href;
        this.ref.current.offsetWidth;
        this.setState({
            orginW: this.ref.current.offsetWidth,
            orginL: this.ref.current.offsetLeft
        })
    }
    handleEnter = (e) => {
        const width = e.target.offsetWidth;
        this.setState({
            width,
            left: e.target.offsetLeft,
        })
    }
    handleLeave = (e) => {
        const oW = this.state.orginW;
        const oL = this.state.orginL;
        this.setState({
            width: 0,
            left: 0,
            orginW: oW,
            orginL: oL,
        })
    }
    handleClick = (e) => {
        const w = e.offsetWidth || e.target.offsetWidth
        const l = e.offsetLeft || e.target.offsetLeft
        this.setState({
            width: w,
            left: l,
            orginW: w,
            orginL: l,
        })
    }
    subItemClick = (e) => {
        const w = e.offsetWidth;
        const l = e.offsetLeft;
        this.setState({
            width: w,
            left: l,
            orginW: w,
            orginL: l,
        })
    }
    render() {
        // return rendermenu();
        const { left, width, orginW, orginL } = this.state;
        const l = left || orginL;
        const w = width || orginW;
        return (
            <div className="auto top1">
                <style jsx>{`
                .top1 {
                }
                .auto {
                   
                    overflow: hidden;
                    border-bottom: 2px solid #eee;
                }
                .nav{
                    width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    height: 100%;
                    position:relative;
                }
                .nav  a{
                    font-size:16px;
                }
                .logo{
                    width: 224px;
                    height: 50px;
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                }
                .logo img{
                    width:100%;
                }
                .nan_item{
                    padding:25px;
                    color:#333;
                }
                .nan_item:hover{
                    color:#1890ff
                }
                .slider{
                    position: absolute;
                    height: 3px;
                    background: #1890ff;
                    width:82px;
                    left:0;
                    bottom:0;
                    transition:all 0.5s;
                }
                {/* a:hover{
                    border-bottom:3px solid red;
                } */}
                
                `}</style>
                <div className="right nav">
                    <div style={{ position: 'relative', display: 'flex' }} onMouseLeave={this.handleLeave}>
                        <div className="slider" style={{ width: `${w}px`, left: `${l}px` }} />
                        <Link href="/">
                            <a className="nan_item" ref={this.ref} onMouseEnter={this.handleEnter} onClick={this.handleClick}>首页</a>
                        </Link>
                        <Link href="/#md_about">
                            <a className="nan_item" onMouseEnter={this.handleEnter} onClick={this.handleClick}>关于</a>
                        </Link>
                        <Dropdown overlay={<Menu>
                            <Menu.Item key="gz">
                                <Link href="/case?type=0" >
                                    <a onClick={() => this.subItemClick(this.refal.current)}>工装类</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="sz" >
                                <Link href="/case?type=1" >
                                    <a onClick={() => this.subItemClick(this.refal.current)}>私宅类</a>
                                </Link>
                            </Menu.Item>
                        </Menu >}>
                            <a className="nan_item" onMouseEnter={this.handleEnter} ref={this.refal}>案例</a>
                        </Dropdown>
                        <Link href="/">
                            <a className="logo nan_item" onMouseEnter={this.handleEnter}>
                                <img src="../../static/img/logo.jpg" alt='' />
                            </a>
                        </Link>

                        <Dropdown overlay={PRODUCT_MENU}>
                            <a className="nan_item" onMouseEnter={this.handleEnter}>产品</a>
                        </Dropdown>
                        <Link href="/#md_team">
                            <a className="nan_item" onMouseEnter={this.handleEnter} onClick={this.handleClick}>团队</a>
                        </Link>
                        <Link href="/#md_connect">
                            <a className="nan_item" onMouseEnter={this.handleEnter} onClick={this.handleClick}>联系</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;