import React, { Component } from 'react';

import './components/static/css/basic.css';

import { Button , Carousel,Modal,BackTop } from 'antd';


//引入react-router  link模块

//路由里面加载的组件通过这句话显示到这里 {this.props.children}  
import { Link } from 'react-router';

class App extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div className="App">

            <div className="header">

              <ul>
                <li><img src={require("./components/static/images/logo.png")}/></li>
                <li><Link to="/home"  activeClassName="active"  onlyActiveOnIndex={true}>首页</Link></li>
                <li><a onClick={this.showModal}>漏洞/情报上报</a></li>
                <li><Link to="/news"  activeClassName="active"  onlyActiveOnIndex={true}>通知公告</Link></li>
                <li><Link to="/contribution"  activeClassName="active"  onlyActiveOnIndex={true}>贡献榜</Link></li>
                <li><Link to="/gift"  activeClassName="active"  onlyActiveOnIndex={true}>礼品兑换</Link></li>
                <li><Button type="primary"onClick={this.showModal}>登录</Button></li>
              </ul>
              
            </div>

          <div className="content">
          
        <Modal
          className="modal"
          title="微信登录"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        > 
           <div className="modal-title">微信登录</div>
           <img src={require("./components/static/images/code.jpg")} />
           <p>请使用微信扫描二维码登录</p>
           <p>“饿了么安全应急响应中心”</p>
        </Modal>

             {this.props.children}
                 
          </div>
      
      </div>
    );
  }
}

export default App;
