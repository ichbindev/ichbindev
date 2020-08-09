import React from "react";
import { Link } from "gatsby";

const BlogLink = ({ path, title, excerpt, date }) => {
  return (
    <div
      className="blog-link bg-gray-200 shadow-xl rounded-lg px-6 py-1"
      style={{
        border: "1px solid black",
      }}
    >
      <Link to={path}>
        <strong className="link-to-post">{title}</strong>
      </Link>
      <br />
      {excerpt}
    </div>
  );
};

export default BlogLink;
