import React from "react";
import { Link } from "gatsby";

const BlogLink = ({ path, title, excerpt }) => {
  return (
    <div
      className="blog-link"
      // style={{ border: "1px solid black", padding: "20px" }}
    >
      <Link to={path}>{title}</Link>
    </div>
  );
};

export default BlogLink;
