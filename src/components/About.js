import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import WebLinks from "./WebLinks";

const About = ({ width = 123 }) => {
  const data = useStaticQuery(graphql`
    query q {
      file(relativePath: { eq: "avatar/avatar.jpg" }) {
        id
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <div
      className="about-me-container"
      style={{ width: `${width}px`, marginTop: "60px" }}
    >
      <div className="about-me-section">
        <Link to="/">
          <Img
            className="avatar-image"
            style={{ width: "100%", borderRadius: "10px" }}
            fluid={data.file.childImageSharp.fluid}
            alt="avatar - king of the hill characters upset about a football game"
          />
        </Link>
        <div
          className="about-me-text"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "3px 5px",
            width: `${width - 10}px`,
            marginTop: "2px",
            backgroundColor: "lightgray",
          }}
        >
          <h2 style={{ margin: "0px 2px", fontFamily: "avenir" }}>ichbindev</h2>
          <WebLinks />
        </div>
      </div>
    </div>
  );
};

// export const query = graphql`
//   query q {
//     file(relativePath: { eq: "avatar/avatar.jpg" }) {
//       id
//       childImageSharp {
//         fluid {
//           aspectRatio
//           base64
//           sizes
//           src
//           srcSet
//         }
//       }
//     }
//   }
// `;

export default About;
