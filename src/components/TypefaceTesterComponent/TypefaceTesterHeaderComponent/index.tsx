import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

const TypefaceTesterHeaderComponent: React.FC = props => {
  return useObserver(() => (
    <>
      <Col>
        <Typography variant="body1">IBM</Typography>
      </Col>

      <Col className="text-right">
        <Typography variant="body1">
          <Link
            to={{
              pathname: props.goto ? `/typefaces/${props.goto}` : "/",
              state: { documentId: props.documentId ? props.documentId : "nofont!"}
            }}
          >
            Go To Font <ArrowForwardIcon />
          </Link>
        </Typography>
      </Col>
    </>
  ));
};
export default TypefaceTesterHeaderComponent;
