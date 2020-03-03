import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";

const TypfaceGalleryComponent: React.FC = () => {
  return useObserver(() => (
    <>
      <Row>
        <Col>
          <Typography>Leading</Typography>
        </Col>
        <Col>
          <Typography className="text-right font-weight-bold">
            {myletterSpacing}
          </Typography>
        </Col>
      </Row>
      <CustomSlider
        aria-label="Font Size"
        defaultValue={60}
        ValueLabelComponent={ValueLabelComponent}
      />
    </>
  ));
};
export default TypfaceGalleryComponent;
