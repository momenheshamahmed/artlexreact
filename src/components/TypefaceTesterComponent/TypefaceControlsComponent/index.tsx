import React, { useRef, useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";
import MenuOpenTypeFeatures from "./MenuOpenTypeFeatures";
import MenuAlign from "./MenuAlign";

import { Typography } from "@material-ui/core";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import GetAppIcon from "@material-ui/icons/GetApp";
import TypfaceGalleryComponent from "../../TypefaceGalleryComponent";

import CustomSliderTypefaces from "./CustomSliderTypefaces";

const TypefaceControlsComponent: React.FC = props => {
  const [controls, setControls] = useState({});

  function handleFontSizeChange(event) {
    setControls({ ...controls, fontSize: event });
    console.log("event font size here", event != null ? event : "no event yet");

    // props.onControlsChange({
    //   ...controls,
    //   [event.target.name]: event.target.value
    // });
  }
  function handleLeadingeChange(event) {
    // leading = newLeading;
    setControls({ ...controls, leading: event });

    console.log("event leadning here", event != null ? event : "no event yet");
  }
  function handleLineHeighteChange(event) {
    setControls({ ...controls, lineHeight: event });

    console.log(
      "event line-height here",
      event != null ? event : "no event yet"
    );
  }

  const onChangeopenTypeFeatures = openTypeFeatures => {
    setControls({ ...controls, openTypeFeatures });
    console.log("open type features", openTypeFeatures);
  };

  const onControlsChange = event => {
    // setControls({ ...controls, [event.target.name]: event.target.value });
    console.log("onControls Changeeed");
  };
  useEffect(() => {
    props.onControlsChange(controls);
  }, [controls]);
  return useObserver(() => (
    <>
      <Container fluid={true} onChange={onControlsChange}>
        <Row>
          <Col md={3}>
            <CustomSliderTypefaces
              onChange={handleFontSizeChange}
              key="fontSize"
              name="Font Size"
            />
          </Col>
          <Col md={3}>
            <CustomSliderTypefaces
              onChange={handleLeadingeChange}
              key="leading"
              name="Leading"
            />
          </Col>
          <Col md={3}>
            <CustomSliderTypefaces
              onChange={handleLineHeighteChange}
              key="lineHeight"
              name="Line-Height"
            />
          </Col>
          <Col md={1}>
            <MenuAlign customText={<FormatAlignCenterIcon />} />
          </Col>
          <Col md={1}>
            <MenuOpenTypeFeatures
              onChange={onChangeopenTypeFeatures}
              openTypeFeatures={props.controls ? props.controls : null}
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
            <Typography>D</Typography>
          </Col>
        </Row>
        <Row>
          <TypfaceGalleryComponent images={props.images} />
        </Row>
      </Container>
    </>
  ));
};
export default TypefaceControlsComponent;
