import React from 'react';

const Skillset = () => {
  return (
    <section id='skillset' className='section'>
      <h2 className='text-center'>SKILLSET</h2>
      <div className='section-content'>
        <div className='row'>
          <div className="col-lg-3 col-md-6 col-12 ">
            <h5>FRONT-END</h5>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>HTML5</li>
              <li>CSS3/Sass</li>
              <li>AJAX</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <h5>BACK-END</h5>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <h5>OTHER</h5>
            <ul>
              <li>Git</li>
              <li>Webpack</li>
              <li>JSON</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <h5>ON THE RADAR</h5>
            <ul>
              <li>TypeScript</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skillset;