module.exports = {
  siteMetadata: {
    title: "esistblog",
    defaultTitle: "esistblog",
    titleTemplate: "%s",
    description: "Blog posts about coding and things",
    url: "https://www.ichbin.dev", // No trailing slash allowed!
    siteUrl: "https://www.ichbin.dev", // No trailing slash allowed!
    image: "/img/avatar/avatar.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ichbindev",
  },
  plugins: [
    `gatsby-transformer-remark`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.ichbin.dev",
        sitemap: "https://www.ichbin.dev/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
