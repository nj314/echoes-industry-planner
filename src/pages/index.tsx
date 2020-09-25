import React, { useCallback } from "react";
import { Form, FormSpy } from "react-final-form";

import { Col, Grid, Row } from "rsuite";
// import "rsuite/dist/styles/rsuite-default.css";
import "rsuite/dist/styles/rsuite-dark.css";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { BlueprintDef, ProductSubtype } from "../game-model/types";
import { SkillModel } from "../game-model/skills";

import SkillPrompt from "../components/Prompts/SkillPrompt";
import SalePricePrompt from "../components/Prompts/SalePricePrompt";
import BlueprintPrompt from "../components/Prompts/BlueprintPrompt";

export type BlueprintOption = {
  name: string;
  definition: BlueprintDef | null;
  subtype: ProductSubtype | null;
};

export type FormValues = {
  bp: BlueprintOption;
  skills?: SkillModel;
  unitSalePrice: number;
};

const initialValues: FormValues = {
  bp: {
    name: "",
    definition: null,
    subtype: null,
  },
  skills: undefined,
  unitSalePrice: 1000000,
};

const IndexPage = () => {
  const handleSubmit = useCallback(
    values => alert(JSON.stringify(values, undefined, 2)),
    []
  );

  return (
    <Layout>
      <SEO title="Home" />
      <Form initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Grid fluid>
            <Row>
              <Col md={16} mdOffset={4} lg={12} lgOffset={6}>
                <BlueprintPrompt />
              </Col>
            </Row>
            <Row>
              <Col md={16} mdOffset={4} lg={12} lgOffset={6}>
                <SkillPrompt />
              </Col>
            </Row>
            <Row>
              <Col md={16} mdOffset={4} lg={12} lgOffset={6}>
                <SalePricePrompt />
              </Col>
            </Row>
            <Row>
              <pre>
                <FormSpy>
                  {props => JSON.stringify(props.values, undefined, 2)}
                </FormSpy>
              </pre>
            </Row>
          </Grid>
        )}
      </Form>
    </Layout>
  );
};

export default IndexPage;
