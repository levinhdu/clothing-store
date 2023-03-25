import { Layout } from "antd";
import Header from "../Header";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar";
import "../../sass/layout/DefaultLayout/DefaultLayout.scss";
import Contact from "../../pages/HomePage/Contact";
import Display from "../../pages/HomePage/Display";
import Items from "../../pages/HomePage/Items";
import Subscribe from "../../pages/HomePage/Subscribe";
import { useEffect } from "react";
const { Content, Footer } = Layout;

DefaultLayout.propTypes = {
  children: PropTypes.element,
  titleHeader: PropTypes.string,
};
DefaultLayout.defaultProps = {
  children: null,
  titleHeader: ''
};

function DefaultLayout(props){
  const {children, titleHeader} = props
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout className="main">
        <Header title={titleHeader}/>
        <Content className="content">
          {children}
        </Content>
        <Footer className="footer">Powered by w3.css</Footer>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
