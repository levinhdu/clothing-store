import "../../sass/pages/HomePage/HomePage.scss";
import Contact from "./Contact";
import Display from "./Display";
import Items from "./Items";
import Subscribe from "./Subscribe";
import PropTypes from "prop-types";
import { useEffect } from "react";

HomePage.propTypes = {
  id: PropTypes.string,
};
HomePage.defaultProps = {
  id: ''
};

function HomePage(props){
  const {id} = props
  return (
    <>
      <Display />
      <div id="items">
        <Items id={id}/>
      </div>
      <Subscribe />
      <Contact />
    </>
  );
};
export default HomePage;
