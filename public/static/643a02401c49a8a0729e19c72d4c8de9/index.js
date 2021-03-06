import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import { graphql, Link } from "gatsby";

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div style={{width: "600px", margin: "0 auto"}}>
      <About />
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
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </div>
          );
        })}
      </div>

      <div className="tags">{/* <Link to="/tags">Browse Tags</Link> */}</div>
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
