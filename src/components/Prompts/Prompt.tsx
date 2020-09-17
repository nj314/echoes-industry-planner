import { css } from "@emotion/core";
import React from "react";
import { Panel } from "rsuite";
import FancyDivider, { rainbow } from "../FancyDivider";

const classes = {
  heading: css({
    textAlign: "center",
  }),
  content: css({
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
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
    <div css={classes.content}>{children}</div>
  </Panel>
);

export default Prompt;
