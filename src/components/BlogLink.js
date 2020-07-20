import React from "react";
import { Link } from "gatsby";

const BlogLink = ({ path, title }) => {
  return (
    <div>
      <Link to={path}>{title}</Link>
    </div>
  );
};

export default BlogLink;
