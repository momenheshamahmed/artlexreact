import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import Assets from "../../assets";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";

const FooterComponent: React.FC = () => {
  return useObserver(() => (
    <Container className="mt-5 py-5">
      <Row>
        <Col md="3">
          <img src={Assets.Images.logo} />
          <Typography variant="body1"> Text</Typography>
        </Col>
        <Col md="4">
          <Typography variant="h6">Fonts</Typography>
          <Row>
            <Col>
              <Typography variant="body1">Fonts / sadasd</Typography>
              <Typography variant="body1">Fonts / sadasd</Typography>
              <Typography variant="body1">Fonts / sadasd</Typography>
              <Typography variant="body1">Fonts / sadasd</Typography>
            </Col>
            <Col>
              <Typography variant="body1">Fonts / sadasd</Typography>
              <Typography variant="body1">Fonts / sadasd</Typography>
              <Typography variant="body1">Fonts / sadasd</Typography>
              <Typography variant="body1">Fonts / sadasd</Typography>
            </Col>
          </Row>
        </Col>
        <Col md="2">
          <Typography variant="h6">Pages</Typography>
          <Row>
            <Col>
              <Typography variant="body1">Fonts / sadasd</Typography>
              <Typography variant="body1">Fonts / sadasd</Typography>
              <Typography variant="body1">Fonts / sadasd</Typography>
              <Typography variant="body1">Fonts / sadasd</Typography>
            </Col>
          </Row>
        </Col>
        <Col md="3">
          <Typography variant="h6">Pages</Typography>
          <Typography variant="body1">info@protypef.co</Typography>
          <Row>
            <Col>
              <Typography variant="body1">Link</Typography>
            </Col>
            <Col>
              <Typography variant="body1">Link</Typography>
            </Col>
            <Col>
              <Typography variant="body1">Link</Typography>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  ));
};
export default FooterComponent;
