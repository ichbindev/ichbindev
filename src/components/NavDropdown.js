import React from "react";

const NavDropdown = ({ width }) => {
  return (
    <div
      style={{
        margin: "2px 2px 0 2px",
        fontFamily: "avenir",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "3px 5px",
        width: `${width - 10}px`,
        backgroundColor: "lightgray",
      }}
    >
      <h3 style={{margin: "0 0 0 7px"}}>Navigation</h3>
      <ul className="navigation-links">
        <li style={{width: width}}>
          <a href="/blog">Blog Posts</a>
        </li>
        <li style={{width: width}}>
          <a href="/100doc">100 Days of Code</a>
        </li>
      </ul>
    </div>
  );
};

export default NavDropdown;
