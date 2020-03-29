import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, IconButton } from "@material-ui/core";
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
        <Col className="text-left" style={{marginTop: 5}}>
          <Typography variant="h5">
            {props.typefaceName ? props.typefaceName : "NO FONT NAME!"}
          </Typography>
        </Col>

        <Col className="text-right">
          <IconButton>
            <Typography variant="body1">
              <StyledLink
                to={{
                  pathname: props.goto ? `/typefaces/${props.goto}` : "/",
                  state: {
                    documentId: props.documentId ? props.documentId : "nofont!"
                  }
                }}
              >
                Go To Font {"   "} <ArrowForwardIcon />
              </StyledLink>
            </Typography>
          </IconButton>
        </Col>
      </Row>
    </Container>
  ));
};
export default TypefaceTesterHeaderComponent;
