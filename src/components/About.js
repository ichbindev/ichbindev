import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import WebLinks from "./WebLinks";
import NavDropdown from "./NavDropdown";

const About = ({ width = 150 }) => {
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
      className="about-me-containertext-gray-900"
      style={{ width: `${width}px`, margin: "20px" }}
    >
      <div className="about-me-section">
        <Link to="/">
          <Img
            className="avatar-image"
            style={{
              width: "100%",
              borderRadius: "10px",
              border: "1px solid black",
            }}
            fluid={data.file.childImageSharp.fluid}
            alt="avatar - king of the hill characters upset about a football game"
          />
        </Link>
        <div
          className="about-me-text bg-gray-300"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "3px 5px",
            width: `${width}px`,
            marginTop: "2px",
          }}
        >
          <h2
            className="text-3xl font-semibold"
            style={{
              margin: "0px 2px",
              fontFamily: "avenir",
              textAlign: "center",
            }}
          >
            ichbindev
          </h2>
          <WebLinks />
        </div>
        <NavDropdown width={width} />
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
