import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

const TypefaceTesterHeaderComponent: React.FC = props => {
  console.log(props.goto)
  return useObserver(() => (
    <>
      <Col>
        <Typography variant="body1">IBM</Typography>
      </Col>

      <Col className="text-right">
        <Typography variant="body1">
          <Link to={`/typefaces/${props.goto}`}>
            SEE SPECIMEN <ArrowForwardIcon />
          </Link>
        </Typography>
      </Col>
    </>
  ));
};
export default TypefaceTesterHeaderComponent;
