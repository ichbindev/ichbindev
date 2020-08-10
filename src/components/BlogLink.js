import React from "react";
import { Link } from "gatsby";

const BlogLink = ({ path, title, excerpt, date }) => {
  return (
    <Link to={path}>
    <div
      className="blog-link bg-gray-300 hover:text-blue-900 shadow-xl rounded-lg px-6 py-1 m-2"
      style={{
        border: "1px solid black",
      }}
    >
      
        <h3 className="link-to-post text-xl text-gray-900">{title}</h3>
      {excerpt}
    </div>
    </Link>
  );
};

export default BlogLink;
