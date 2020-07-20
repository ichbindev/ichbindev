import React from "react";
import Twitter from "../img/icon/Twitter.png";
import Github from "../img/icon/Github.png";

const WebLinks = () => {
  return (
    <div
      className="web-links"
      style={{ display: "flex", flexFlow: "row-wrap", margin: "0px 2px" }}
    >
      <a href="https://www.github.com/ichbindev/">
        <img
          src={Github}
          alt="Github icon"
          style={{
            width: "32px",
            height: "32px",
            paddingTop: "6px",
          }}
        />
      </a>
      <a href="https://www.twitter.com/ichbindev/">
        <img
          src={Twitter}
          alt="Twitter icon"
          style={{
            width: "45px",
            height: "45px",
          }}
        />
      </a>
    </div>
  );
};

export default WebLinks;
