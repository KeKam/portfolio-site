import React from 'react';
import Img from 'gatsby-image';
import Scrollschor from 'react-scrollchor';
import './Banner.css';

const Banner = ({ bannerImg }) =>
<div className='banner'>
  <Img
    title='Banner image'
    alt='Image of a laptop'
    fluid={bannerImg.childImageSharp.fluid}
    className='banner-img'
  />
  <div className='overlay' />
  <div className='center'>
    <h1 className='banner-header'>KENTA KAMIMURA</h1>
    <hr className='hr-line'/>
    <p className='banner-text'>WEB DEVELOPER</p>
  </div>
  <div className='arrow-container'>
    <Scrollschor to='#about' animate={{ duration: 600 }} className='arrow-button'>
      <i className='fa fa-angle-double-down'/>
    </Scrollschor>
  </div>
</div>

export default Banner; 