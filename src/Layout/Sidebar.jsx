import { Layout, Menu } from "antd";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/layout/Sidebar.scss";
const { Sider } = Layout;

Sidebar.propTypes = {};

const SubMenu = Menu.SubMenu;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to='/shirts'>Shirts</Link>, "1"),
  getItem(<Link to='/dresses'>Dresses</Link>, "2"),
  getItem(<Link to='/'>Jeans</Link>, "sub1", "", [
    getItem(<Link to='/skinny'>Skinny</Link>, "3"),
    getItem(<Link to='/relaxed'>Relaxed</Link>, "4"),
    getItem(<Link to='/bootcut'>Bootcut</Link>, "5"),
    getItem(<Link to='/straight'>Straight</Link>, "6"),
  ]),
  getItem(<Link to='/jackets'>Jackets</Link>, "9"),
  getItem(<Link to='/gymwear'>Gymwear</Link>, "10"),
  getItem(<Link to='/blazers'>Blazers</Link>, "11"),
  getItem(<Link to='/shoes'>Shoes</Link>, "12"),
];
const items2 = [
  getItem("Contact", "1"),
  getItem("Newsletter", "2"),
  getItem("Subscribe", "3"),
];

function Sidebar(props) {
  return (
    <Sider className="sidebar" theme="light">
      <div className="sidebar__logo">
        <Link to='/'><h3>LOGO</h3></Link>
      </div>
      <Menu
        className="sidebar__menu"
        theme="light"
        mode="inline"
        items={items}
      />
      <Menu
        className="sidebar__menu sidebar__menu--style"
        theme="light"
        mode="inline"
        items={items2}
      />
    </Sider>
  );
}

export default Sidebar;
