import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const NotFound = (props) => {
  return (
    <div
      className="404-container"
      style={{
        fontFamily: "avenir",
        backgroundColor: "lightgray",
        padding: "10px 20px",
        borderRadius: "20px",
        textAlign: "center",
        width: "40%",
        margin: "10% auto",
      }}
    >
      <h1>404</h1>
      <h2>Page not found.</h2>
      <p>
        <a href="/">Want to go back home?</a>
      </p>
    </div>
  );
};

export default NotFound;
