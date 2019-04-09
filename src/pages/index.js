import React from "react"
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';
import Navigation from '../components/Navigation/Navigation';
import Projects from '../components/Projects/Projects';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.css';
import favicon from '../../static/favicon.ico';
import "font-awesome/css/font-awesome.min.css";
import './index.css';

const HomePage = ({ data }) => {
  const { edges: projectImageData } = data.projectImages;
  const siteTitle = data.site.siteMetadata.title;
  const metaDescription = data.site.siteMetadata.description;
  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name='description' content={metaDescription} />
        <link rel='icon' href={favicon} />
      </Helmet>
      <Navigation />
      <Banner bannerImg={data.bannerImg} />
      <About />
      <hr className='hr-divider' />
      <Projects projectImages={projectImageData} />
      <hr className='hr-divider' />
      <Contact />
    </div>
  );
}

export const query = graphql`
  query allImagesQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

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
