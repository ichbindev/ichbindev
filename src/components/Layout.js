import React from "react";
import About from "../components/About";
import BlogListBody from "./BlogListBody";
import Header from "../components/Header";

const Layout = (props) => {
  return (
    <>
      <div
        className="blog-container"
        style={{
          display: "flex",
          flexFlow: "row-wrap",
        }}
      >
        <About />
        <div
          className="blog-post-container"
          style={{
            //   width: "600px",
            margin: "0 auto",
            //   backgroundColor: "lightgray",
            //   borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <Header description={props.description} />
          <BlogListBody data={props.data} />
        </div>
        <div className="tags">{/* <Link to="/tags">Browse Tags</Link> */}</div>
      </div>
    </>
  );
};

export default Layout;
