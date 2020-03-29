import React, { useRef, useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";
import MenuOpenTypeFeatures from "./MenuOpenTypeFeatures";
import MenuAlign from "./MenuAlign";

import { useMediaQuery, IconButton } from "@material-ui/core";
import TypfaceGalleryComponent from "../../TypefaceGalleryComponent";

import CustomSliderTypefaces from "./CustomSliderTypefaces";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;
const TypefaceControlsComponent: React.FC = props => {
  const screenSize = useMediaQuery("(max-width:700px)");

  const [controls, setControls] = useState(props.controls);

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
  }
  function handleLineHeighteChange(event) {
    setControls({ ...controls, lineHeight: event });
  }

  const onChangeopenTypeFeatures = openTypeFeatures => {
    setControls({ ...controls, openTypeFeatures });
  };

  const onChangeAlign = align => {
    setControls({ ...controls, align });
    console.log("align is?", align);
  };
  useEffect(() => {
    props.onControlsChange(controls);
  }, [controls]);

  // fontSizeServer={props.typeface.content.en.fontSize}
  // lineHeightServer={props.typeface.content.en.lineHeight}
  // leadingServer={props.typeface.content.en.leading}
  return useObserver(() => (
    <>
      <Container fluid={true}>
        <Row>
          <Col md={3}>
            <CustomSliderTypefaces
              onChange={handleFontSizeChange}
              key="fontSize"
              name="Font Size"
              initialNumber={90}
            />
          </Col>
          <Col md={3}>
            <CustomSliderTypefaces
              onChange={handleLeadingeChange}
              key="leading"
              name="Leading"
              initialNumber={0}
              max={150}
            />
          </Col>
          <Col md={3}>
            <CustomSliderTypefaces
              onChange={handleLineHeighteChange}
              key="lineHeight"
              name="Line-Height"
              initialNumber={0}
              max={150}
            />
          </Col>
          <Col md={1} xs={4} className="text-center">
            <MenuAlign
              customText={
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.5"
                    cx="26.5"
                    cy="26.5"
                    r="26.5"
                    fill="#171717"
                  />
                  <path
                    d="M17.8125 20.3906H29.4375C29.5406 20.3906 29.625 20.3062 29.625 20.2031V18.8906C29.625 18.7875 29.5406 18.7031 29.4375 18.7031H17.8125C17.7094 18.7031 17.625 18.7875 17.625 18.8906V20.2031C17.625 20.3062 17.7094 20.3906 17.8125 20.3906ZM17.8125 30.3281H29.4375C29.5406 30.3281 29.625 30.2437 29.625 30.1406V28.8281C29.625 28.725 29.5406 28.6406 29.4375 28.6406H17.8125C17.7094 28.6406 17.625 28.725 17.625 28.8281V30.1406C17.625 30.2437 17.7094 30.3281 17.8125 30.3281ZM36.1875 33.6094H17.8125C17.7094 33.6094 17.625 33.6938 17.625 33.7969V35.1094C17.625 35.2125 17.7094 35.2969 17.8125 35.2969H36.1875C36.2906 35.2969 36.375 35.2125 36.375 35.1094V33.7969C36.375 33.6938 36.2906 33.6094 36.1875 33.6094ZM36.1875 23.6719H17.8125C17.7094 23.6719 17.625 23.7562 17.625 23.8594V25.1719C17.625 25.275 17.7094 25.3594 17.8125 25.3594H36.1875C36.2906 25.3594 36.375 25.275 36.375 25.1719V23.8594C36.375 23.7562 36.2906 23.6719 36.1875 23.6719Z"
                    fill="white"
                  />
                </svg>
              }
              onChange={onChangeAlign}
            />
          </Col>
          <Col md={1} xs={4} className="text-center">
            <MenuOpenTypeFeatures
              showstandardLigatures={props.showstandardLigatures}
              showcontextuaLalternates={props.contextuaLalternates}
              showdiscretionLigatures={props.discretionLigatures}
              showswash={props.swash}
              showfractions={props.fractions}
              showstylisticOne={props.stylisticOne}
              showstylisticTwo={props.stylisticTwo}
              showstylisticThree={props.stylisticThree}
              showstylisticFour={props.stylisticFour}
              showstylisticFive={props.stylisticFive}
              showstylisticSix={props.stylisticSix}
              showstylisticSeven={props.stylisticSeven}
              onChange={onChangeopenTypeFeatures}
              openTypeFeatures={controls.openTypeFeatures}
              customText={
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.5"
                    cx="26.5"
                    cy="26.5"
                    r="26.5"
                    fill="#171717"
                  />
                  <path
                    d="M15.6537 33.7142L21.0354 20.6582H22.5314L27.9131 33.7142H26.2811L24.8434 30.1393H18.7234L17.2857 33.7142H15.6537ZM21.7737 22.4845L19.1703 28.9153H24.3771L21.7737 22.4845ZM29.1565 31.1108C29.1565 29.1291 30.7885 27.9828 33.4697 27.9828C34.1303 27.9828 34.8491 28.0605 35.5874 28.2548V27.2833C35.5874 26.0788 34.6548 25.2239 33.2754 25.2239C32.2651 25.2239 31.2354 25.4571 30.1474 25.9233L29.72 24.7965C31.0411 24.2913 32.2457 24.0388 33.4503 24.0388C35.5874 24.0388 37.064 25.3599 37.064 27.3222V31.8879C37.064 32.4125 37.3748 32.7428 37.9188 32.7428C38.0743 32.7428 38.3074 32.7039 38.424 32.6845L38.5405 33.8502C38.2074 33.9133 37.8693 33.9458 37.5303 33.9473C36.5005 33.9473 35.84 33.3451 35.7234 32.3736C34.9657 33.3645 33.7417 33.9473 32.44 33.9473C30.5748 33.9473 29.1565 32.7233 29.1565 31.1108ZM30.672 31.0136C30.672 32.0433 31.5851 32.8205 32.8091 32.8205C34.4411 32.8205 35.5874 31.6548 35.5874 29.9839V29.1873C34.951 29.0344 34.299 28.9562 33.6445 28.9542C31.7794 28.9542 30.672 29.7313 30.672 31.0136Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </Col>
          <Col md={1} xs={4} className="text-center">
            <IconButton>
              <StyledLink to={props.goto ? `/typefaces/${props.goto}` : "/"}>
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="26.5" cy="26.5" r="26.5" fill="#171717" />
                  <path
                    d="M20 35H34V33H20V35ZM34 24H30V18H24V24H20L27 31L34 24Z"
                    fill="#00FF00"
                  />
                </svg>
              </StyledLink>
            </IconButton>
          </Col>
        </Row>
        {screenSize ? null : (
          <Row>
            <TypfaceGalleryComponent images={props.images} />
          </Row>
        )}
      </Container>
    </>
  ));
};
export default TypefaceControlsComponent;
