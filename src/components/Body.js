import React from "react";
import BlogLink from "../components/BlogLink";
import Header from "../components/Header";

const Body = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <div
      className="blog-post-container"
      style={{
        //   width: "600px",
        margin: "0 auto",
        //   backgroundColor: "lightgray",
        //   borderRadius: "20px",
        textAlign: "center",
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
                <BlogLink
                  path={frontmatter.path}
                  title={frontmatter.title}
                  excerpt={frontmatter.excerpt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
