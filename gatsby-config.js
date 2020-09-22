const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
console.log(`Environment: ${activeEnv}`);
require('dotenv').config({ path: `.env.${activeEnv}` });

const siteUrl = process.env.URL || process.env.DEPLOY_URL || ``;

module.exports = {
  siteMetadata: {
    title: `[WEBSITE TITLE]`,
    description: `[WEBSITE DESCRIPTION]`,
    author: `@kevaladesign`,
    siteUrl,
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
      //   description: ``,
      //   lang: `en`,
      //   start_url: `/`,
      //   background_color: `[WEBSITE BACKGROUND COLOR]`,
      //   theme_color: `[WEBSITE THEME COLOR]`,
      //   display: `standalone`,
      //   icon: `src/images/[WEBSITE ICON]`,
      //   cache_busting_mode: `none`,
      //   crossOrigin: `use-credentials`,
      // },
    },
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     workboxConfig: {
    //       globPatterns: [`**/icon-path*`],
    //     },
    //   },
    // },
  ],
};
