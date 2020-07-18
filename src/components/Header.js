import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import TitleAndDescription from "./TitleAndDescription";
const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data) => <TitleAndDescription data={data} />}
    />
  );
};

export default Header;