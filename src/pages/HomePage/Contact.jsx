import React from "react";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  CreditCardOutlined,
  IdcardOutlined,
  InstagramOutlined,
  FacebookOutlined,
  QqOutlined,
  TwitterOutlined,
  SkypeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import "../../sass/pages/HomePage/Contact.scss";
import { Col, Row, Form, Input, Button } from "antd";

const style = {
  background: "#0092ff",
  padding: "8px 0",
};

Contact.propTypes = {};

function Contact(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="contact">
      <Row gutter={16}>
        <Col className="gutter-row contact__col" span={8}>
          <h4>Contact</h4>
          <p>Questions? Go ahead.</p>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            wrapperCol={{
              span: 24,
            }}
            style={{ width: "95%" }}
          >
            <Form.Item
              className="contact__col__input"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                  max: 128,
                },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              className="contact__col__input"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your email!",
                  max: 128,
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="contact__col__input"
              name="subject"
              rules={[
                {
                  required: true,
                  message: "Please input your subject!",
                  max: 128,
                },
              ]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item className="contact__col__input" name="message">
              <Input placeholder="Message" />
            </Form.Item>
            <Form.Item className="contact__col__input" name="message">
              <Button htmlType="submit">Send</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col className="gutter-row contact__col" span={8}>
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">We're hiring</a>
          <a href="#">Support</a>
          <a href="#">Find store</a>
          <a href="#">Shipment</a>
          <a href="#">Payment</a>
          <a href="#">Gift card</a>
          <a href="#">Return</a>
          <a href="#">Help</a>
        </Col>
        <Col className="gutter-row contact__col--style" span={8}>
          <h4>Store</h4>
          <p>
            <EnvironmentOutlined />
            Company Name
          </p>
          <p>
            <PhoneOutlined />
            0044123123
          </p>
          <p>
            <MailOutlined />
            ex@mail.com
          </p>
          <h5>We accept</h5>
          <p>
            <IdcardOutlined />
            Amex
          </p>
          <p>
            <CreditCardOutlined />
            Credit Card
          </p>
          <h5>
            <FacebookOutlined />
            <InstagramOutlined />
            <QqOutlined />
            <SkypeOutlined />
            <TwitterOutlined />
            <LinkedinOutlined />
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
