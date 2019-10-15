import React from 'react';
import Link from 'next/link'
import productsConfig from '../../config/productsConfig';
import { Menu, Dropdown, Icon } from 'antd';
const { SubMenu } = Menu;



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
        const path = window.location.pathname;
        this.ref.current.offsetWidth;
        let ref = '';
        switch (path) {
            case '/case':
                ref = this.refal;
                break;
            case '/product':
                ref = this.refcp;
                break;
            default:
                ref = this.ref
        }
        this.setState({
            orginW: ref.current.offsetWidth,
            orginL: ref.current.offsetLeft
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
    handleBaseClick=()=>{
        this.setState({
            width: 82,
            left: 0,
            orginW: 82,
            orginL: 0,
        })
    }
    render() {
        // return rendermenu();
        const { left, width, orginW, orginL } = this.state;
        const l = left || orginL;
        const w = width || orginW;
        return (
            <div className="auto top1">
                <style>{`
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
                    font-size:20px;
                }
                .logo{
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                    padding:0 !important;
                    margin:0 20px;
                }
                .logo img{
                    width: 320px;
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
                            <a className="nan_item" onMouseEnter={this.handleEnter} onClick={this.handleBaseClick}>关于</a>
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
                            <a className="logo nan_item" onMouseEnter={this.handleEnter} onClick={this.handleBaseClick}>
                                <img src="../../static/img/logo.jpg" alt='' width="224"/>
                            </a>
                        </Link>

                        <Dropdown overlay={<Menu>
                            {
                                productsConfig.map(item => {
                                    const { id, txt } = item;
                                    return <Menu.Item key={id}>
                                        <Link href={`/product?id=${id}`}>
                                            <a onClick={() => this.subItemClick(this.refcp.current)} >
                                                {txt}
                                            </a>
                                        </Link>
                                    </Menu.Item>
                                })
                            }
                        </Menu>}>
                            <a className="nan_item" onMouseEnter={this.handleEnter} ref={this.refcp}>产品</a>
                        </Dropdown>
                        <Link href="/#md_team">
                            <a className="nan_item" onMouseEnter={this.handleEnter} onClick={this.handleBaseClick}>团队</a>
                        </Link>
                        <Link href="/#md_connect">
                            <a className="nan_item" onMouseEnter={this.handleEnter} onClick={this.handleBaseClick}>联系</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;