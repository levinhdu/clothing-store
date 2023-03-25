import React from "react";
import PropTypes from "prop-types";
import "../../sass/pages/HomePage/Subscribe.scss";
import { Button, Input, Form } from "antd";

Subscribe.propTypes = {};

function Subscribe(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="subscribe">
      <h1>Subscribe</h1>
      <p>To get special offers and VIP treatment:</p>
      <div className="subscribe__input">
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
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
            <Input placeholder="Enter e-mail" />
          </Form.Item>
          <Form.Item>
            <Button className="subscribe__button" htmlType="submit">
              Subscribe
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Subscribe;
