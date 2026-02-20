import React from "react";

const NotFound = () => {
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
        <a href="/ichbindev">Want to go back home? Click me!</a>
      </p>
    </div>
  );
};

export default NotFound;
