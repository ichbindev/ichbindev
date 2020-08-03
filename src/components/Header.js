import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import TitleAndDescription from "./TitleAndDescription";
const Header = ({description}) => {
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
      render={(data) => <TitleAndDescription data={data} description={description} />}
    />
  );
};

export default Header;