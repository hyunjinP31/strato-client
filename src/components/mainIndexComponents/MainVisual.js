import React from 'react';
import { Carousel } from 'antd';
import "antd/dist/antd.css";

const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '100vh',
    textAlign: 'center',
  };

const MainVisual = () => {
    return (
        <div id="mainVisual" className='height'>
            <Carousel effect="fade" autoplay>
                <div>
                <h3 style={contentStyle} className='mainVisualImg mainImg1'>
                </h3>
                </div>
                <div>
                <h3 style={contentStyle} className='mainVisualImg mainImg2'>
                </h3>
                </div>
                <div>
                <h3 style={contentStyle} className='mainVisualImg mainImg3'>
                </h3>
                </div>
                <div>
                <h3 style={contentStyle} className='mainVisualImg mainImg4'>
                </h3>
                </div>
            </Carousel>
        </div>
    );
};

export default MainVisual;