import React from "react"
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Navigation from '../components/Navigation/Navigation';
import Skillset from '../components/Skillset/Skillset';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <Skillset />
    </div>
  );
}

export default HomePage;
