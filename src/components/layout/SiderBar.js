import React from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout } from 'antd';
import menuConfig from '../../config/menuConfig';
import logoURL from '../../images/logo.jpeg';
import { connect } from 'react-redux';
import { switchMenu } from '../../redux/action';
const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      menuList: [],
      defaultOpenKeys: [],       // 默认展开
      defaultSelectedKeys: ['/'],   // 默认选中
    };
    SiderBar.that = this;
  }

  componentWillMount() {
    this.handleDefaultSelect();
    const menuList = this.setMenu(menuConfig);
    this.setState({
      menuList
    });
  }

  // 刷新页面，处理默认选中
  handleDefaultSelect = () => {
    let menuConfigKeys = [];
    menuConfig.forEach((item) => {
      menuConfigKeys.push(item.key);
    });
    const pathname = window.location.pathname;
    const currentKey = '/' + pathname.split('/')[1];
    const titleArray = this.selectBreadcrumb(currentKey, pathname);
    if (menuConfigKeys.indexOf(currentKey) === 1) {
      this.setState({
        defaultOpenKeys: [currentKey],
        defaultSelectedKeys: [pathname],
      });
      this.props.handleClick(titleArray);
    }
  };

  // 处理菜单列表
  setMenu = (menu, pItem) => {
    return menu.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={ item.key }
                   title={ <span><Icon type={ item.icon }/><span>{ item.title }</span></span> }>
            { this.setMenu(item.children, item) }
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={ item.title } key={ item.key } pitem={ pItem }>
          <NavLink to={ item.key } >
            { item.icon && <Icon type={ item.icon }/> }
            <span>{ item.title }</span>
          </NavLink>
        </Menu.Item>
      )
    });
  };

  // 导出出面包屑数组
  selectBreadcrumb = (currentKey, pathname) => {
    const titleArray = [];
    menuConfig.forEach((item) => {
      if (item.key === currentKey) {
        titleArray.push(item.title);
      }
      if (item.children) {
        item.children.forEach((sItem) => {
          if (sItem.key === pathname) {
            titleArray.push(sItem.title);
          }
        });
      }
    });
    return titleArray;
  };

  // 点击侧边栏
  handleClick = (item) => {
    const currentKey = '/' + item.key.split('/')[1];
    const pathname = item.key;
    const titleArray = SiderBar.that.selectBreadcrumb(currentKey, pathname);
    this.props.handleClick(titleArray);
  };

  // 收缩侧边栏
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
        <Menu onClick={ this.handleClick } theme="dark"
              defaultOpenKeys={ this.state.defaultOpenKeys }
              defaultSelectedKeys={ this.state.defaultSelectedKeys }
              mode="inline">
          { this.state.menuList }
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(titleArray) {
      dispatch(switchMenu(titleArray));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SiderBar);
