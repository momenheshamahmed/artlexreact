import React, { useRef, useState } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import CustomizedMenus from "../Menu";

import {
  Slider,
  Tooltip,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import GetAppIcon from "@material-ui/icons/GetApp";
import TypfaceGalleryComponent from "../../TypefaceGalleryComponent";

const TypefaceControlsComponent: React.FC = () => {
  const [myFontSize, setFontSize] = useState(90);
  const [myLineHeight, setLineHeight] = useState(90);
  const [myletterSpacing, setLetterSpacing] = useState(1);
  const [open, setOpen] = useState(true);

  const CustomSlider = withStyles({
    root: {
      color: "#171717",
      height: 2,
      padding: "15px 0"
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: "#00FF00",
      marginTop: -10,
      marginLeft: -8
    },
    track: {
      height: 2
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: "#CACACA"
    }
  })(Slider);

  const ValueLabelComponent = props => {
    // tslint:disable-next-line: no-shadowed-variable
    const { children, open, value } = props;
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  };
  const CustomButton = styled(Button)`
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    & span svg {
      margin-left: 0.5rem !important;
    }
  `;
  return useObserver(() => (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <Row>
              <Col>
                <Typography>Font Size</Typography>
              </Col>
              <Col>
                <Typography className="text-right font-weight-bold">
                  {myFontSize}
                </Typography>
              </Col>
            </Row>
            <CustomSlider
              aria-label="Font Size"
              defaultValue={60}
              ValueLabelComponent={ValueLabelComponent}
            />
          </Col>

          <Col md={3}>
            <Row>
              <Col>
                <Typography>Line Height</Typography>
              </Col>
              <Col>
                <Typography className="text-right font-weight-bold">
                  {myLineHeight}
                </Typography>
              </Col>
            </Row>
            <CustomSlider
              aria-label="Font Size"
              defaultValue={60}
              ValueLabelComponent={ValueLabelComponent}
            />
          </Col>
          <Col md={3}>
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
          </Col>

          <Col md={1}>
            <CustomizedMenus customText={<FormatAlignCenterIcon />} />
          </Col>
          <Col md={1}>
            <CustomizedMenus
              customText={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.653717 18.7143L6.03543 5.65833H7.53143L12.9131 18.7143H11.2811L9.84343 15.1395H3.72343L2.28572 18.7143H0.653717ZM6.77372 7.48461L4.17029 13.9155H9.37715L6.77372 7.48461ZM14.1566 16.1109C14.1566 14.1292 15.7886 12.9829 18.4697 12.9829C19.1303 12.9829 19.8491 13.0606 20.5874 13.2549V12.2835C20.5874 11.0789 19.6549 10.224 18.2754 10.224C17.2651 10.224 16.2354 10.4572 15.1474 10.9235L14.72 9.79661C16.0411 9.29147 17.2457 9.0389 18.4503 9.0389C20.5874 9.0389 22.064 10.36 22.064 12.3223V16.888C22.064 17.4126 22.3749 17.7429 22.9189 17.7429C23.0743 17.7429 23.3074 17.704 23.424 17.6846L23.5406 18.8503C23.2075 18.9134 22.8693 18.9459 22.5303 18.9475C21.5006 18.9475 20.84 18.3452 20.7234 17.3738C19.9657 18.3646 18.7417 18.9475 17.44 18.9475C15.5749 18.9475 14.1566 17.7235 14.1566 16.1109ZM15.672 16.0138C15.672 17.0435 16.5851 17.8206 17.8091 17.8206C19.4411 17.8206 20.5874 16.6549 20.5874 14.984V14.1875C19.9511 14.0345 19.2991 13.9563 18.6446 13.9543C16.7794 13.9543 15.672 14.7315 15.672 16.0138Z"
                    fill="black"
                  />
                </svg>
              }
            />
          </Col>
          <Col md={1}>
            <CustomizedMenus customText={<GetAppIcon />} />
          </Col>

          <Col md={12} className="text-center">
            <CustomButton
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              variant="contained"
              className="mt-3"
              endIcon={open ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
            >
              FONT GALLERY
            </CustomButton>
          </Col>
        </Row>
        <Collapse in={open}>
          <div id="example-collapse-text" className="mt-3">
            <TypfaceGalleryComponent />
          </div>
        </Collapse>
      </Container>
    </>
  ));
};
export default TypefaceControlsComponent;
