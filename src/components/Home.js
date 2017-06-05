import React  from 'react';
import { Carousel,Modal } from 'antd';
import { Link } from 'react-router';
import './static/css/basic.css';

class Home extends React.Component{

    constructor(props){

        super(props);

    }
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

    render(){

        return(
 <div>
  <Carousel autoplay className="carousel">
    <div><img src={require("./static/images/banner1.png")}/></div>
    <div><img src={require("./static/images/banner1.png")}/></div>
    <div><img src={require("./static/images/banner1.png")}/></div>
    <div><img src={require("./static/images/banner1.png")}/></div>
  </Carousel>
  <div className="link">
      <Link to="/notice" className="link-content">
          <img src={require("./static/images/link1.png")} />
          <p>通知公告</p>
      </Link>
      <Link to="/contribution" className="link-content">
          <img src={require("./static/images/link2.png")} />
          <p>贡献榜</p>
      </Link>
      <Link to="gift" className="link-content">
          <img src={require("./static/images/link3.png")} />
          <p>礼物兑换</p>
      </Link>
  </div>
  <div className="border">
      <div className="contribute">
         <h1>致谢</h1>
         <p>截至目前，贡献最多的前 3 位白帽子是:</p>
         <p>x、Graves、4ck1k@Shadow7。</p>
         <p>感谢他们对饿了么安全作出的贡献！</p>
          <img src={require("./static/images/thanks.png")} />
      </div>
      <div  className="shangbao">
          <img className="img1" src={require("./static/images/weixin.png")} />
          <div className="img2">
              <img src={require("./static/images/report1.png")} onClick={this.showModal}/>
              <img src={require("./static/images/report2.png")} onClick={this.showModal}/>   
          </div> 
          <p>欢迎关注 ESRC 微信公众号</p>
      </div>
  </div>
    <Modal
          className="modal"
          title="微信登录"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        > 
           <div className="modal-title">微信登录</div>
           <img src={require("./static/images/code.jpg")} />
           <p>请使用微信扫描二维码登录</p>
           <p>“饿了么安全应急响应中心”</p>
        </Modal>
  </div>
     )
    }
}

export default Home;
