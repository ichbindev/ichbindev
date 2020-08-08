import React from "react";
import { Link } from "gatsby";

const BlogLink = ({ path, title, excerpt, date }) => {
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
      </Link><br/>
      {excerpt}
    </div>
  );
};

export default BlogLink;
