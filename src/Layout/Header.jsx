import React from "react";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import "../sass/layout/Header.scss";
import { Dropdown, Input, Avatar, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { Col, Row } from "antd";
Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "",
};
const { Meta } = Card;

function Header(props) {
  const { title } = props;
  const count = useSelector((state) => state.counter);
  return (
    <Row className="header">
      <Col className="header__col" span={8}>
        {title}
      </Col>
      <Col className="header__col header__col--position" span={8} offset={8}>
        {/* <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow={{
            pointAtCenter: true,
          }}
          dropdownRender={() => (
            <Card style={{ width: 400, marginTop: 16 }}>
              <Row>
                <Col></Col>
                <img src={items.items.urlImg} alt="a" width={50} />
                <Col span={12}>
                  <Meta title={items.items.title} style={{fontSize: '10px'}}/>
                </Col>
                <Col offset={4}>
                  <Meta
                    title={`$${(
                      items.items.cost *
                      ((100 - items.items.sale) / 100)
                    ).toFixed(2)}`}
                  />
                </Col>
              </Row>
            </Card>
          )}
        > */}
          <div className="header__col__cart">
            <ShoppingCartOutlined className="header__col__cart__icon" />
            <span className="header__col__cart__count">{count.value}</span>
          </div>
        {/* </Dropdown> */}
        <Dropdown
          dropdownRender={(menu) => <Input style={{ width: 400}}  placeholder="Search"></Input>}
          placement="bottomRight"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <SearchOutlined />
        </Dropdown>
      </Col>
    </Row>
  );
}

export default Header;
