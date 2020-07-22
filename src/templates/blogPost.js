import React from "react";
import About from "../components/About";
import { graphql, Link } from "gatsby";

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext;

  const { markdownRemark } = data;
  const {
    html,
    frontmatter: { title },
  } = markdownRemark;
  return (
    <div
      className="blog-container"
      style={{ display: "flex", flexFlow: "row-wrap" }}
    >
      <About />
      <div
        className="blog-post-text"
        style={{ width: "600px", margin: "0 auto", padding: "0 15px" }}
      >
        <h1 style={{ fontFamily: "avenir", textAlign: "center" }}>{title}</h1>
        <div
          className="blogpost"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{
            fontFamily: "avenir",
          }}
        />

        <div style={{ marginBottom: "1rem", fontFamily: "avenir" }}>
          {next && (
            <Link to={next.frontmatter.path}>
              Next: {`${next.frontmatter.title}`}
            </Link>
          )}
        </div>
        <div style={{ fontFamily: "avenir" }}>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Prev: {`${prev.frontmatter.title}`}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
