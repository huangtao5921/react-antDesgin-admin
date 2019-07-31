import React from 'react';
import {Layout} from "antd";
import SiderBar from "../siderBar/SiderBar";
import HeaderBar from "../header/HeaderBar";
import './main.css';
const { Content, Footer } = Layout;

class Main extends React.Component{
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderBar></SiderBar>
        <Layout>
          <HeaderBar></HeaderBar>
          <Content>
            <div className="main-content">
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by Nicholas H.Tao</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
