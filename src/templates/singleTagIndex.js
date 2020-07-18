import React from "react";
import { Link } from "gatsby";

const SingleTagsTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext;
  return (
    <div style={{fontFamily: 'avenir'}}>
      <div>Posts About {`${tagName}`}</div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SingleTagsTemplate;
