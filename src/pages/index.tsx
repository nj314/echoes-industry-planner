import React, { useCallback, useReducer, useState } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { Button, Col, Grid, Row } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
// import "rsuite/dist/styles/rsuite-dark.css";
import Prompt from "../components/Prompts/Prompt";
import SkillPrompt from "../components/Prompts/SkillPrompt";
import BlueprintPicker from "../components/BlueprintPicker";
import { BlueprintDef, ProductSubtype } from "../game-model/types";

const IndexPage = () => {
  const [selectedBp, setSelectedBp] = useState<{
    bp: BlueprintDef;
    subType: ProductSubtype;
  }>();

  return (
    <Layout>
      <SEO title="Home" />
      <Button>Hello world</Button>
      <Grid fluid>
        <Row>
          <Col md={16} mdOffset={4} lg={12} lgOffset={6}>
            <Prompt label="What would you like to produce?">
              <BlueprintPicker onChange={setSelectedBp} value={selectedBp} />
              {/* <pre>{JSON.stringify(bp, undefined, 2)}</pre> */}
            </Prompt>
          </Col>
        </Row>
        <Row>
          <Col md={16} mdOffset={4} lg={12} lgOffset={6}>
            {selectedBp && (
              <SkillPrompt skills={selectedBp.subType.relevantSkills} />
            )}
          </Col>
        </Row>
      </Grid>
      {/* <Prompt label="How much isk is available for materials & blueprints?">
      <IskSlider value= />
    </Prompt> */}
    </Layout>
  );
};

export default IndexPage;
