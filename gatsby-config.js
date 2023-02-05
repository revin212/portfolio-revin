/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Revin's Portfolio`,
    description: `Revin Dennis Ramadhan's Front End Portfolio`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/revin-logo.png',
      }
    },
    'gatsby-plugin-react-helmet'
  ],
}
