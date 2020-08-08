import React from "react";

const NavDropdown = ({ width }) => {
  const bubble = {
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "lightgray",
  };

  const liStyle = {
    width: width,
    ...bubble,
  };

  const aStyle = {
    textDecoration: "none",
  };

  const displayNone = { display: "none" };

  return (
    <div
      style={{
        margin: "2px 2px 0 2px",
        fontFamily: "avenir",
        padding: "0",
        width,
        textAlign: "center",
        // ...displayNone,
      }}
    >
      <h3 style={{ margin: "0", ...bubble }}>Navigation</h3>
      <ul
        className="navigation-list"
        style={{ paddingInlineStart: "0px", margin: "0" }}
      >
        <li className="nav-li nav-li-hidden" style={liStyle}>
          <a style={aStyle} href="/blog">
            Blog Posts
          </a>
        </li>
        <li className="nav-li nav-li-hidden" style={liStyle}>
          <a style={aStyle} href="/100doc">
            100 Days of Code
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavDropdown;
