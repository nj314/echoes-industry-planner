import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Button } from "rsuite";
import "rsuite/dist/styles/rsuite-dark.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Button>Hello world</Button>
  </Layout>
);

export default IndexPage;
