import React from "react";
import About from "../components/About";
import BlogLink from "../components/BlogLink";
import Header from "../components/Header";
import { graphql } from "gatsby";

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div
      className="blog-container"
      style={{ display: "flex", flexFlow: "row-wrap" }}
    >
      <About />
      <div
        className="blog-post-container"
        style={{
          width: "600px",
          margin: "0 auto",
        }}
      >
        <div className="blog-link-container" style={{ margin: "20px" }}>
          <Header />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "avenir",
            }}
          >
            {edges.map((edge) => {
              const { frontmatter } = edge.node;
              return (
                <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
                  <BlogLink path={frontmatter.path} title={frontmatter.title} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="tags">{/* <Link to="/tags">Browse Tags</Link> */}</div>
      </div>
    </div>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default Layout;
