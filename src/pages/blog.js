import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const Blog = (props) => {
  // const blogData = Object.values(
  //   props.data.allMarkdownRemark.edges
  // ).filter((d) => d.node.frontmatter.tags.includes("blog"));
  // const newData = { data: { allMarkdownRemark: { edges: { ...blogData } } } };
  
  return (
    <>
      <SEO />
      <Layout data={props.data} description={"Blog posts"} />
    </>
  );
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            tags
            path
            date
            excerpt
          }
        }
      }
    }
  }
`;

export default Blog;
