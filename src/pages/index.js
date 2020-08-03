import React from "react";
import Layout from "../components/Layout";

const Home = (props) => {
  return (
    <>
      <Layout data={props.data} description={"Welcome to my blog!"} />
    </>
  );
};

export const query = graphql`
  query HomepageQuery {
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

export default Home;
