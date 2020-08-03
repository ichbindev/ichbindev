import React from "react";
import { Helmet } from "react-helmet";
import About from "../components/About";
import Body from "../components/Body";
import Header from "../components/Header";

const Layout = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>esistblog</title>
        <link rel="canonical" href="https://www.ichbin.dev/" />
      </Helmet>
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
          <Body data={props.data} />
        </div>
        <div className="tags">{/* <Link to="/tags">Browse Tags</Link> */}</div>
      </div>
    </>
  );
};

export default Layout;
