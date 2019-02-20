import React from "react"
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Navigation from '../components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.css';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
    </div>
  );
}

export default HomePage;
