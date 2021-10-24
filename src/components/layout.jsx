/** @jsx jsx */
import * as React from "react";
import { Global } from "@emotion/react";
import { Box, Container, jsx } from "theme-ui";
import Seo from "./seo";
import Header from "./header";
import Footer from "./footer";
import SkipNavLink from "./skip-nav";

const Layout = ({ children, className = `` }) => (
  <>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <Seo />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <Box id="skip-nav" className={className}>
        {children}
      </Box>
      <Footer />
    </Container>
  </>
);

export default Layout;
