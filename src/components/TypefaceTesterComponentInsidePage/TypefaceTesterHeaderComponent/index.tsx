import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;
const TypefaceTesterHeaderComponent: React.FC = props => {
  return useObserver(() => (
    <Container fluid={true}>
      <Row>
        <Col className="text-left">
          <Typography variant="h4" className="font-weight-bold">
            {props.typefaceName ? props.typefaceName : "NO FONT NAME!"}
          </Typography>
        </Col>

        <Col className="text-right">
          <Typography variant="body1">
            <StyledLink
              to={{
                pathname: props.goto ? `/typefaces/${props.goto}` : "/",
                state: {
                  documentId: props.documentId ? props.documentId : "nofont!"
                }
              }}
            >
              <Typography variant="h6 font-weight-bold">
                Go To Font {"   "} <ArrowForwardIcon />
              </Typography>
            </StyledLink>
          </Typography>
        </Col>
      </Row>
    </Container>
  ));
};
export default TypefaceTesterHeaderComponent;
