import React from "react";
import Layout from "../components/Layout";

const HDOC = (props) => {
  return (
    <>
      <Layout data={props.data} description={"100 Days of Code"} />
    </>
  );
};

export const query = graphql`
  query HDOCQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`;

export default HDOC;
