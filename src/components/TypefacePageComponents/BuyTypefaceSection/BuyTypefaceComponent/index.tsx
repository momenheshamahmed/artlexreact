import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const BuyTypefaceComponent: React.FC = () => {
  const BuyFontContainer = styled(Container)`
    background: #f7f7f7;
    padding: 2rem;
  `;
  const TextAndButton = styled(Row)`
    align-items: center;
  `;
  const WeightPreview = styled(Col)`
    height: 100%;
  `;
  const CustomButton = styled(Button)`
    background: #00ff00 !important;
    border-radius: 100px !important;
    color: black !important;
    & span svg {
      margin-left: 1.5rem !important;
    }
  `;
  return useObserver(() => (
    <BuyFontContainer fluid>
      {/* <Row>
        <Col>
          <Typography variant="subtitle1" component="subtitle1">
            PAIR FONTS
          </Typography>
        </Col>
      </Row> */}
      <TextAndButton>
        <WeightPreview>
          <Typography variant="subtitle1" component="subtitle1">
            PAIR FONTS
          </Typography>
        </WeightPreview>
        <Col className="text-right align-middle">
          <CustomButton
            variant="contained"
            color="primary"
            endIcon={<AddIcon />}
          >
            Add to Cart
          </CustomButton>
        </Col>
      </TextAndButton>
    </BuyFontContainer>
  ));
};
export default BuyTypefaceComponent;
