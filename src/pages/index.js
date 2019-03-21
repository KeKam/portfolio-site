import React from "react"
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';
import Navigation from '../components/Navigation/Navigation';
import Skillset from '../components/Skillset/Skillset';
import Projects from '../components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.min.css";
import './index.css';

const HomePage = ({ data }) => {
  const { edges: projectImageData } = data.projectImages;
  return (
    <div>
      <Navigation />
      <Banner bannerImg={data.bannerImg} />
      <About />
      <Skillset />
      <Projects projectImages={projectImageData} />
      <Contact />
    </div>
  );
}

export const query = graphql`
  query allImagesQuery {

    bannerImg: file(relativePath: { eq: "workspace.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    projectImages: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default HomePage;
