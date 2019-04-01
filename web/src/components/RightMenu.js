import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="signin">
          <a href="login">Signin</a>
        </Menu.Item>
        <Menu.Item key="register">
          <a href="/create">Signup</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;