import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

const HDOC = (props) => {
  return (
    <>
      <SEO />
      <Layout data={props.data} description={"100 Days of Code"} tiled/>
    </>
  );
};

export const query = graphql`
  query HDOCQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/100doc/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            excerpt
            path
            day
          }
        }
      }
    }
  }
`;

export default HDOC;
