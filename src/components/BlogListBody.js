import React, { useState } from "react";
import BlogLink from "./BlogLink";

const reorderList = (oldList, start, end) => {
  const reorderedList = Array.from(oldList);
  // take the element out of the list
  const [target] = reorderedList.splice(start, 1);
  // and put it at its new position
  reorderedList.splice(end, 0, target);
};

const BlogListBody = ({ data }) => {
  const [edges, setEdges] = useState(data.allMarkdownRemark.edges);

  console.log(edges);
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
        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
              <BlogLink
                path={frontmatter.path}
                title={frontmatter.title}
                date={frontmatter.date}
                excerpt={frontmatter.excerpt}
                day={frontmatter.day}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogListBody;
