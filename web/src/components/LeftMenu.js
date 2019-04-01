import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
       <Menu.Item key="hoome">
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item key="tips">
          <a href="/tips">Tips</a>
        </Menu.Item>
        <Menu.Item key="contact">
          <a href="/contact">Contact Us</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;