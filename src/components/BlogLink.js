import React from "react";
import { Link } from "gatsby";

const BlogLink = ({ path, title, excerpt }) => {
  return (
    <div
      className="blog-link"
      style={{
        borderRadius: "20px",
        padding: "32px 20px",
        margin: "3px 0",
        backgroundColor: "lightgray",
        height: "100%",
        width: "300px",
      }}
    >
      <Link to={path}>
        <strong>{title}</strong>
      </Link>
    </div>
  );
};

export default BlogLink;
