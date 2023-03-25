import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { axiosClient } from "../../libraries/axios";
import React, { useEffect, useState } from "react";
import "../../sass/pages/HomePage/Items.scss";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";

const { Meta } = Card;

Items.propTypes = {
  id: PropTypes.string,
};
Items.defaultProps = {
  id: "",
};

function Items(props) {
  const { id } = props;
  const [items, setItem] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axiosClient.get(id).then((response) => {
      setItem(response.data);
    });
  }, [id]);
  return (
    <div className="items">
      <div className="items__title">
        <p>8 items</p>
      </div>
      <div className="items__card">
        <Row gutter={16}>
          {items.map((item, index) => {
            return (
              <Col
                className="gutter-row items__card__col"
                sm={24}
                md={12}
                lg={8}
                xl={6}
                key={index}
              >
                <Card hoverable cover={<img alt="example" src={item.urlImg} />}>
                  <Meta title={item.title} />
                  {item.sale && (
                    <span>
                      ${(item.cost * ((100 - item.sale) / 100)).toFixed(2)}
                    </span>
                  )}

                  <span style={item.sale && { textDecoration: "line-through" }}>
                    ${item.cost}
                  </span>

                  <div
                    className="items__card__col__buy"
                    onClick={() => dispatch(increment())}
                  >
                    <span>
                      Buy now
                      <ShoppingCartOutlined />
                    </span>
                  </div>
                </Card>
                {item.new && (
                  <div className="items__card__col__new">
                    <span>New</span>
                  </div>
                )}
                {item.sale && (
                  <div className="items__card__col__sale">
                    <span>{`Sale ${item.sale}%`}</span>
                  </div>
                )}
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Items;
