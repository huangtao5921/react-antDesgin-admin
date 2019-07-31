import React from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout } from 'antd';
import menuConfig from '../../../config/menuConfig';
import logoURL from '../../../images/logo.jpeg';
import { connect } from 'react-redux';
import { switchMenu } from '../../../redux/action';
import './siderBar.css';
const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderBar extends React.Component {
  state = {
    collapsed: false,
    menuList: [],
  };

  componentWillMount() {
    const menuList = this.setMenu(menuConfig);
    this.setState({
      menuList
    })
  }

  // 处理菜单列表
  setMenu = (menu) => {
    return menu.map((item) => {
      if (item.children) {
        return <SubMenu key={ item.key } title={ <span><Icon type={ item.icon }/><span>{ item.title }</span></span> }>
                 { this.setMenu(item.children) }
               </SubMenu>
      }
      return <Menu.Item title={ item.title } key={ item.key } >
              <NavLink to={ item.key } >
                { item.icon && <Icon type={ item.icon }/> }
                <span>{ item.title }</span>
              </NavLink>
            </Menu.Item>
    });
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    let name;
    if (!this.state.collapsed) {
      name = <span className="name">React管理后台</span>;
    }
    return (
      <Sider collapsible collapsed={ this.state.collapsed } onCollapse={ this.onCollapse }>
        <div className="logo">
          <img className="logo-img" src={ logoURL } alt=""/>
          { name }
        </div>
        <Menu onClick={ this.props.handleClick } theme="dark" defaultSelectedKeys={['/']} mode="inline">
          { this.state.menuList }
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick({ item }) {
      dispatch(switchMenu(item.props.title));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SiderBar);
