module.exports = {
  siteMetadata: {
    title: 'Kenta Kamimura || Portfolio',
    description: 'Self-taught web developer',
    siteUrl: 'https://www.kentakamimura.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kenta Kamimura`,
        short_name: `KentaKamimura`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },  
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`
  ]
}