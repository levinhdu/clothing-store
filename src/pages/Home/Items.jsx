import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";
import "../../sass/pages/Home/Items.scss";

const { Meta } = Card;

const style = {
  background: "#0092ff",
  padding: "8px 0",
};

const dataFix = [
  {
    urlImg: "https://www.w3schools.com/w3images/jeans1.jpg",
    title: "Ripped Skinny Jean",
    cost: "$24.99",
    new: true,
  },
  {
    urlImg: "https://www.w3schools.com/w3images/jeans2.jpg",
    title: "Mega Ripped Jeans",
    cost: "$19.99",
    new: false,
  },
  {
    urlImg: "https://www.w3schools.com/w3images/jeans3.jpg",
    title: "Washed Skinny Jeans",
    cost: "$20.50",
    new: false,
  },
  {
    urlImg: "https://www.w3schools.com/w3images/jeans4.jpg",
    title: "Vintage Skinny Jeans",
    cost: "$14.99",
    new: false,
  },
  {
    urlImg: "https://www.w3schools.com/w3images/jeans1.jpg",
    title: "Ripped Skinny Jean",
    cost: "$24.99",
    new: true,
  },
  {
    urlImg: "https://www.w3schools.com/w3images/jeans2.jpg",
    title: "Mega Ripped Jeans",
    cost: "$19.99",
    new: false,
  },
  {
    urlImg: "https://www.w3schools.com/w3images/jeans3.jpg",
    title: "Washed Skinny Jeans",
    cost: "$20.50",
    new: false,
  },
  {
    urlImg: "https://www.w3schools.com/w3images/jeans4.jpg",
    title: "Vintage Skinny Jeans",
    cost: "$14.99",
    new: true,
  },
];

Items.propTypes = {};

function Items(props) {
  return (
    <div className="items">
      <div className="items__title">
        <p>8 items</p>
      </div>
      <div className="items__card">
        <Row gutter={16}>
          {dataFix.map((data, index) => {
            return (
              <Col className="gutter-row items__card__col" sm={24} md={12} lg={8} xl={6} key={index}>
                <Card
                  hoverable
                  cover={<img alt="example" src={data.urlImg} />}
                >
                  <Meta title={data.title} />
                  <p>{data.cost}</p>
                  <div className="items__card__col__buy">
                    <span>
                      Buy now
                      <ShoppingCartOutlined />
                    </span>
                  </div>
                </Card>
                {data.new && (
                  <div className="items__card__col__new">
                    <span>New</span>
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
