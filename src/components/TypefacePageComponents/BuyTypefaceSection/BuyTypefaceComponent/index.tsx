import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

const BuyTypefaceComponent: React.FC = () => {
  const CustomButton = styled(Button)`
    background: #00ff00 !important;
    border-radius: 100px !important;
    color: black !important;
    & span svg {
      margin-left: 1.5rem !important;
    }
  `;
  return useObserver(() => (
    <>
      <Container>
        <Row>
          <Typography variant="subtitle1" component="subtitle1" className="mb-3 mt-3">
            PAIR FONTS
          </Typography>
        </Row>
        <Row>
          <Col>Name</Col>
          <Col className="text-right align-middle">
            <CustomButton
              variant="contained"
              color="primary"
              className="mt-3"
              endIcon={<AddIcon />}
            >
              Add to Cart
            </CustomButton>
          </Col>
        </Row>
      </Container>
    </>
  ));
};
export default BuyTypefaceComponent;
