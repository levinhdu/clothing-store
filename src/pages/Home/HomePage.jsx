import { Layout } from "antd";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import "../../sass/pages/Home/HomePage.scss";
import Contact from "./Contact";
import Display from "./Display";
import Items from "./Items";
import Subscribe from "./Subscribe";
const { Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout className="main">
        <Header />
        <Content className="content">
          <Display />
          <div id="items">
            <Items />
          </div>
          <Subscribe />
          <Contact />
        </Content>
        <Footer className="footer">Powered by w3.css</Footer>
      </Layout>
    </Layout>
  );
};
export default HomePage;
