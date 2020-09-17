/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";

import NavMain from "./NavMain";
import { Container, Content, Footer } from "rsuite";

const classes = {
  root: css({ display: "flex", flexDirection: "row", height: "100vh" }),
  main: css({ padding: "1em 0 0 1em", overflowY: "auto" }),
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container css={classes.root}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <NavMain />
      <Container css={classes.main}>
        <Content>{children}</Content>
        <Footer></Footer>
      </Container>
    </Container>
  );
};

export default Layout;
