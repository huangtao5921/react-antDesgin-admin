import React from 'react';
import { Layout, Menu, Dropdown, Icon, Breadcrumb } from 'antd';
import customUrl from '../../images/custom.jpeg';
import { connect } from 'react-redux';
const { Header } = Layout;

class UserInfo extends React.Component {
  state = {
    visible: false,   // 菜单是否显示
  };

  handleMenuClick = e => {
    if (e.key === 'outLogin') {
      this.setState({
        visible: false
      });
      window.localStorage.removeItem('loggedIn');
      this.props.history.push('/login');
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={ this.handleMenuClick }>
        <Menu.Item key="outLogin">退出登录</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={ menu } onVisibleChange={ this.handleVisibleChange } visible={ this.state.visible }>
        <div className="ant-dropdown-link">
          <img className="custom-img" src={ customUrl } alt=""/>
          <Icon type="caret-down" />
        </div>
      </Dropdown>
    );
  }
}

const HeaderBar = (props) => {
  return (
    <Header>
      <Breadcrumb>
        {
          props.menuName.map((item) => {
            return (
              <Breadcrumb.Item key={ item }>{ item }</Breadcrumb.Item>
            );
          })
        }
      </Breadcrumb>
      <UserInfo history={ props.history }/>
    </Header>
  );
};

const mapStateToProps = (state) => {
  return {
    menuName: state.menuName
  }
};

export default connect(mapStateToProps)(HeaderBar);
