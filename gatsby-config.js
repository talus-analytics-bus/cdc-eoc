module.exports = {
  siteMetadata: {
    title: `CDC EOC Resource Portal`,
    description: `CDC EOC Resource Portal`,
    author: `Talus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/src/assets/`,
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-171813219-1',
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `epidemic-em.org`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `appnl2vE0dDc6adYa`,
            tableName: `Case Studies`,
            mapping: {
              Additional_Images: `fileNode`,
              Cover_Image: `fileNode`,
            },
            // defaultValues: {
            //   Additional_Images: [{ filename: '', url: '' }],
            // },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
