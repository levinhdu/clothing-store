import React from "react";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import "../sass/layout/Header.scss";
import { Col, Row } from "antd";
Header.propTypes = {};

function Header(props) {
  return (
    <Row className="header">
      <Col className="header__col" span={8}>
        Jeans
      </Col>
      <Col className="header__col header__col--position" span={8} offset={8}>
        <ShoppingCartOutlined className="header__col__icon"/>
        <SearchOutlined />
      </Col>
    </Row>
  );
}

export default Header;
