module.exports = {
  siteMetadata: {
    title: "esistblog",
    titleTemplate: "%s · esistblog",
    description: "Blog posts about coding and things",
    url: "https://www.ichbin.dev", // No trailing slash allowed!
    image: "/img/avatar/avatar.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ichbindev",
  },
  plugins: [
    `gatsby-transformer-remark`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
