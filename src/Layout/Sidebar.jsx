import { Layout, Menu } from "antd";
import React from "react";
import { useState } from "react";
import "../sass/layout/Sidebar.scss";
const { Sider } = Layout;

Sidebar.propTypes = {};
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Shirts", "1"),
  getItem("Dresses", "2"),
  getItem("Jeans", "sub1", "", [
    getItem("Skinny", "3"),
    getItem("Relaxed", "4"),
    getItem("Bootcut", "5"),
    getItem("Straight", "6"),
  ]),
  getItem("Jackets", "9"),
  getItem("Gymwear", "10"),
  getItem("Blazers", "11"),
  getItem("Shoes", "12"),
];
const items2 = [
  getItem("Contact", "1"),
  getItem("Newsletter", "2"),
  getItem("Subscribe", "3"),
];

function Sidebar(props) {
  return (
    <Sider
      className="sidebar"
      theme="light"
    //   style={{
    //     overflow: "auto",
    //     height: "100vh",
    //     position: "fixed",
    //     top: 0,
    //     bottom: 0,
    //   }}
    >
      <div className="sidebar__logo">
        <h3>LOGO</h3>
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
