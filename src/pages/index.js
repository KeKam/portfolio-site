import React from "react"
import About from '../components/About/About';
import Navigation from '../components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.css';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <About />
    </div>
  );
}

export default HomePage;
