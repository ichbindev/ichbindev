import React, { useState } from "react";

const NavDropdown = ({ width }) => {
  const [open, setOpen] = useState(false);

  const bubble = {
    border: "1px solid black",
    borderRadius: "10px",
  };

  const liStyle = {
    width: width,
    ...bubble,
  };

  const aStyle = {
    textDecoration: "none",
  };

  const handleKeyPress = event => {
    console.log(event);
    const key = event.charCode || event.keyCode || 0;
    if (key === 13 || key === 32) {
      setOpen(!open);
    }
  }

  return (
    <div
      style={{
        margin: "2px 2px 0 2px",
        fontFamily: "avenir",
        padding: "0",
        width,
        textAlign: "center",
      }}
      // role="navigation"
      tabIndex="0"
    >
      <h3
        className="nav-toggle bg-gray-300"
        style={{ margin: "0", ...bubble }}
        onClick={() => setOpen(!open)}
        onKeyPress={handleKeyPress}
      >
        <strong>{open ? "Hide Topics" : "Show Topics"}</strong>
      </h3>
      <ul
        className="navigation-list"
        style={{ paddingInlineStart: "0px", margin: "0" }}
      >
        <li
          className={`bg-gray-300 nav-li nav-li-${open ? "visible" : "hidden"}`}
          style={liStyle}
        >
          <a style={aStyle} href="/blog">
            Blog Posts
          </a>
        </li>
        <li
          className={`bg-gray-300 nav-li nav-li-${open ? "visible" : "hidden"}`}
          style={liStyle}
        >
          <a style={aStyle} href="/100doc">
            100 Days of Code
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavDropdown;
