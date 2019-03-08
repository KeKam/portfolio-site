import React from "react"
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Navigation from '../components/Navigation/Navigation';
import Skillset from '../components/Skillset/Skillset';
import Projects from '../components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const HomePage = ({ data }) => {
  const { edges: projectImageData } = data.projectImages;
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <Skillset />
      <Projects projectImages={projectImageData} />
    </div>
  );
}

export const query = graphql`
  query allImagesQuery {
    projectImages: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export default HomePage;
