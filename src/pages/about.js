import React from "react";
import AboutNav from "../components/About";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const About = (props) => {
  return (
    <>
      <SEO />
      <AboutNav />
    </>
  );
};

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`;

export default About;
