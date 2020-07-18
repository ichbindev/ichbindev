import React from "react";
import { Link } from "gatsby";

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext;
  return (
    <div style={{fontFamily: 'avenir'}}>
      <div>
        <ul>
          {tags.map((tagName, index) => {
            return (
              <li key={index}>
                <Link to={`${tagName}`}>{`${tagName}`}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllTagsTemplate;
