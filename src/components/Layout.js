import React from "react";
import { Helmet } from "react-helmet";
import About from "../components/About";
import BlogListBody from "./BlogListBody";
import Header from "../components/Header";
import SEO from "../components/SEO";

const Layout = (props) => {
  return (
    <>
      <SEO />
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
