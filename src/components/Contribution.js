import React from 'react';
import './static/css/basic.css';

class Contribution extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
      return(
          <div className="contribute-content">
              <h1>ESRC英雄榜及感谢名单</h1>
              <img src={require("./static/images/team.png")}/>
          </div>
      )
    }
}

export default Contribution;