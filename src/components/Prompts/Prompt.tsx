import { css } from "@emotion/core";
import React from "react";
import { Panel } from "rsuite";
import FancyDivider, { rainbow } from "../FancyDivider";

const classes = {
  heading: css({
    textAlign: "center",
  }),
};

type Props = {
  children: React.ReactNode;
  label?: string;
  header?: React.ReactNode;
};

const Prompt = ({ children, header, label = "" }: Props) => (
  <Panel bordered shaded>
    {header || <h4 css={classes.heading}>{label}</h4>}
    <FancyDivider />
    {children}
  </Panel>
);

export default Prompt;
