import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const Blog = (props) => {

  // TODO: filter with GraphQL query!
  // filter out any posts not tagged "blog"
  const blogPosts = props.data.allMarkdownRemark.edges.filter((e) =>
    e.node.frontmatter.tags.includes("blog")
  );
  const blogData = { allMarkdownRemark: { edges: blogPosts } };

  return (
    <>
      <SEO />
      <Layout data={blogData} description={"Blog posts"} />
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
