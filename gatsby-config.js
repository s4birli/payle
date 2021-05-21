module.exports = {
  siteMetadata: {
    title: `Omega Gatsby`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-2J0WD2VY5C", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
         // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          //exclude: ["/preview/**", "/do-not-track/me/too/"],
        }
      }
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        // as your choice
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://payle.co.uk/',
        sitemap: 'https://payle.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
  ],
};
