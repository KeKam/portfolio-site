import React from 'react';
import Img from 'gatsby-image';
import './Banner.css';

const Banner = ({ bannerImg }) =>
<div className='banner'>
  <Img
    title='Banner image'
    alt='Two shades of grey'
    fluid={bannerImg.childImageSharp.fluid}
    className='banner-img'
  />
  <div className='center'>
    <h1 className='banner-header'>
      <b>Placeholder</b>
    </h1>
    <p className='banner-text'>This is a placeholder</p>
  </div>
</div>

export default Banner; 