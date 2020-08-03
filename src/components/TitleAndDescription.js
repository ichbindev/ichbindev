import React from "react";

const TitleAndDescription = ({ data, description }) => {
  const title = data.site.siteMetadata.title;
  const setDescription = description || data.site.siteMetadata.description;

  return (
    <div
      className="title-and-description"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "avenir",
        width: "100%",
      }}
    >
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <p
        style={{
          marginTop: 0,
          opacity: 0.5,
        }}
      >
        {setDescription}
      </p>
    </div>
  );
};

export default TitleAndDescription;
