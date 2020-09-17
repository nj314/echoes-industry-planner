import React from "react";
import { css } from "@emotion/core";

const red = "#f44336";
const orange = "#e0b412";
const yellow = "#f2d88f";
const green = "#22a12a";
const blue = "#00a0bd"; // eh, cyan is ok
const indigo = "#59d0ff";
const violet = "#805ac7";

export const rainbow = `linear-gradient(to right, ${red}, ${orange}, ${yellow}, ${green}, ${blue}, ${indigo}, ${violet})`;

const classes = {
  root: css({
    // background: "red", /* For browsers that do not support gradients */
    // background: "-webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet)",/* For Safari 5.1 to 6.0 */
    // background: "-o-linear-gradient(right, orange, yellow, green, cyan, blue, violet)",/* For Opera 11.1 to 12.0 */
    // background: "-moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet)",/* For Firefox 3.6 to 15 */
    background: rainbow /* Standard syntax (must be last) */,
    height: 4,
    borderRadius: 4,
    marginTop: 6,
    marginBottom: 6,
  }),
};

/**
 * Credit: https://stackoverflow.com/a/40557564/2136408
 */
const FancyDivider = () => <div css={classes.root} />;

export default FancyDivider;
