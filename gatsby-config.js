module.exports = {
  siteMetadata: {
    title: "ichbindeveloper",
    description: "Welcome to my blog.",
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
  ],
};
