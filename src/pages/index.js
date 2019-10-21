import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';
import NavBar from '../components/NavBar/NavBar';
import Projects from '../components/Projects/Projects';
import Layout from '../components/Layout/Layout';
import favicon from '../../static/favicon.ico';
import 'normalize.css';

const Line = styled.hr`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  border: 0;
  height: 4px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(255, 255, 255), rgba(0, 0, 0, 0));
`;

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
      <Layout>
        <NavBar />
        <Banner bannerImg={data.bannerImg} />
        <About portraitImg={data.portraitImg} />
        <Line />
        <Projects projectImages={projectImageData} />
        <Line />
        <Contact />
      </Layout>
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

    portraitImg: file(relativePath: { eq: "kenta.jpg" }) {
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