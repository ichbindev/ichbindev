import React from "react";
import About from "../components/About";
import SEO from "../components/SEO";
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
      <SEO />
      <About />
      <div
        className="blog-post-text"
        style={{ width: "600px", margin: "0 auto", padding: "0 15px" }}
      >
        <h1 style={{ fontFamily: "avenir", textAlign: "center" }}>{title}</h1>
        <div
          className="blog-post bg-gray-300"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{
            fontFamily: "avenir",
            padding: "10px 20px",
            borderRadius: "20px",
          }}
        />
        <div
          className="blog-post-navigation-links"
          style={{
            display: "flex",
            flexDirection: "row wrap",
            justifyContent: "space-between",
            margin: "0 auto",
          }}
        >
          {prev && (
            <div
              className="blog-post-navigation-links blog-post-navigation-link-previous bg-gray-300"
              style={{
                marginBottom: "1rem",
                fontFamily: "avenir",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px 10px 10px 0",
              }}
            >
              <Link to={prev.frontmatter.path}>
                ⬅ {`${prev.frontmatter.title}`}
              </Link>
            </div>
          )}
          {next && (
            <div
              className="blog-post-navigation-links blog-post-navigation-link-next bg-gray-300"
              style={{
                marginBottom: "1rem",
                fontFamily: "avenir",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px 0 10px 10px",
              }}
            >
              <Link to={next.frontmatter.path}>
                {`${next.frontmatter.title}`} ➡
              </Link>
            </div>
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
