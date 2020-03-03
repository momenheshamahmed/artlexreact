import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const TypefaceTesterHeaderComponent: React.FC = () => {
  return useObserver(() => (
    <>
      <Col>
        <Typography variant="body1">IBM</Typography>
      </Col>

      <Col className="text-right">
        <Typography variant="body1">
          SEE SPECIMEN <ArrowForwardIcon />
        </Typography>
      </Col>
    </>
  ));
};
export default TypefaceTesterHeaderComponent;
