import React from 'react';
import connectUrl from '../../../images/connect.jpg';
import './connect.css';
class Connect extends React.Component {

  render() {
    return (
      <div className="content-wrap">
        <div className="connect-content">
          <img className="connect-url" src={ connectUrl } alt=""/>
          <div>加入QQ群讨论群</div>
          <div>QQ群号：531947619</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("Connect渲染完毕")
  }

}

export default Connect
