module.exports = {
  siteMetadata: {
    title: `[WEBSITE TITLE]`,
    description: `[WEBSITE DESCRIPTION]`,
    author: `@kevaladesign`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      // options: {
      //   name: `[WEBSITE NAME]`,
      //   short_name: `[WEBSITE SHORT NAME]`,
      //   start_url: `/`,
      //   background_color: `[WEBSITE BACKGROUND COLOR]`,
      //   theme_color: `[WEBSITE THEME COLOR]`,
      //   display: `minimal-ui`,
      //   icon: `src/images/[WEBSITE ICON]`,
      // },
    },
    // `gatsby-plugin-offline`,
  ],
}
