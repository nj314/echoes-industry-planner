import { css } from "@emotion/core";
import React from "react";
import { Divider, Nav, Sidenav } from "rsuite";

const classes = {
  root: css({ padding: "1em", width: 250 }),
};

const NavMain = () => {
  return (
    <Sidenav css={classes.root}>
      <Sidenav.Header>
        <h4>Industry Planner</h4>
      </Sidenav.Header>
      <Sidenav.Body>
        <Nav>
          <Nav.Item>Estimator</Nav.Item>
          <Nav.Item>Skills</Nav.Item>
          <Divider />
          <Nav.Item>About</Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  );
};

export default NavMain;
