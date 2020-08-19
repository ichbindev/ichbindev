import React from "react";
import About from "../components/About";
import BlogListBody from "./BlogListBody";
import DOCBlogListBody from "./DOCBlogListBody";
import Header from "../components/Header";

const Layout = (props) => {
  return (
    <div className="blog-container flex flex-row">
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
        {props.tiled ? (
          <DOCBlogListBody data={props.data} />
        ) : (
          <BlogListBody data={props.data} />
        )}
      </div>
      <div className="tags">{/* <Link to="/tags">Browse Tags</Link> */}</div>
    </div>
  );
};

export default Layout;
