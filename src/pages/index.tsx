import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { Button, Col, Grid, Row } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
// import "rsuite/dist/styles/rsuite-dark.css";
import IskSlider from "../components/IskSlider";
import Prompt from "../components/Prompts/Prompt";
import BlueprintPrompt from "../components/Prompts/BlueprintPrompt";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Button>Hello world</Button>
    <Grid fluid>
      <Row>
        <Col md={16} mdOffset={4} lg={12} lgOffset={6}>
          <BlueprintPrompt />
        </Col>
      </Row>
    </Grid>
    {/* <Prompt label="How much isk is available for materials & blueprints?">
      <IskSlider value= />
    </Prompt> */}
  </Layout>
);

export default IndexPage;
