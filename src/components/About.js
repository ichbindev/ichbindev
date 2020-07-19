import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const About = () => {
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
  console.log(data);
  return (
    <div>
      <Img
        className="avatar-image"
        style={{ width: "150px", margin: "0 auto" }}
        fluid={data.file.childImageSharp.fluid}
        alt="avatar - king of the hill characters upset about a football game"
      />
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
