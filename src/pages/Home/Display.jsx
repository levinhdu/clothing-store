import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/pages/Home/Display.scss'
import { Button } from 'antd';


Display.propTypes = {
    
};

function Display(props) {
    return (
        <div className='display'>
            <div className="display__image">
                <img src="https://www.w3schools.com/w3images/jeans.jpg" alt="Jeans" />
            </div>
            <div className="display__title">
                <h1>New arrivals</h1>
                <h2>COLLECTION 2016</h2>
                <a href="#items"><Button className='display__title__button' type='' value="large">SHOP NOW</Button></a>
            </div>
        </div>
    );
}

export default Display;