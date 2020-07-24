import React from "react";
import About from "../components/About";
import Body from "../components/Body";

const Layout = (props) => {
  return (
    <div
      className="blog-container"
      style={{
        display: "flex",
        flexFlow: "row-wrap",
      }}
    >
      <About />
      <Body data={props.data}/>
      <div className="tags">{/* <Link to="/tags">Browse Tags</Link> */}</div>
    </div>
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

export default Layout;
