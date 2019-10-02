import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas} from '@fortawesome/free-solid-svg-icons'
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';
import NavBar from '../components/NavBar/NavBar';
import Projects from '../components/Projects/Projects';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import 'normalize.css';
import favicon from '../../static/favicon.ico';
import './index.css';

const HomePage = ({ data }) => {
  const { edges: projectImageData } = data.projectImages;
  const siteTitle = data.site.siteMetadata.title;
  const metaDescription = data.site.siteMetadata.description;
  return (
    <div id='home'>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name='description' content={metaDescription} />
        <link rel='icon' href={favicon} />
      </Helmet>
      <NavBar />
      <Banner bannerImg={data.bannerImg} />
      <About />
      <hr className='hr-divider' />
      <Projects projectImages={projectImageData} />
      <hr className='hr-divider' />
      <Contact />
    </div>
  );
}

library.add(fab, fas);

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
