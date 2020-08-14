import React, { useState } from "react";
import BlogLink from "./BlogLink";

const BlogListBody = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <div className="blog-link-container" style={{ margin: "20px" }}>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          fontFamily: "avenir",
        }}
      >
        {edges.map((edge, index) => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
              <BlogLink frontmatter={frontmatter} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogListBody;
