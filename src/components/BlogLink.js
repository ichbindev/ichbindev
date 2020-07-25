import React from "react";
import { Link } from "gatsby";

const BlogLink = ({ path, title, excerpt }) => {
  return (
    <div
      className="blog-link"
      style={{
        borderRadius: "20px",
        padding: "25px 20px",
        backgroundColor: "lightgray",
        height: "100%",
        width: "350px",
      }}
    >
      <Link to={path}>
        <strong>{title}</strong>
      </Link>
    </div>
  );
};

export default BlogLink;
