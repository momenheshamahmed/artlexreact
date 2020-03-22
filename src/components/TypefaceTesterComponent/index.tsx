import React, { useState, useEffect, useLayoutEffect } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col, Collapse, Form } from "react-bootstrap";
import TypfaceGalleryComponent from "../TypefaceGalleryComponent";

import TypefaceTesterHeaderComponent from "./TypefaceTesterHeaderComponent";
import TypefaceControlsComponent from "./TypefaceControlsComponent";
import TextAreaComponent from "./TextAreaComponent";
import { TextField } from "@material-ui/core";
const TesterContainer = styled(Container)`
  margin-top: 4vh;
  margin-bottom: 4vh;
`;
const TextAreaContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const TypefaceControls = styled.div`
  height: auto;
  width: 100%;
  background: #f7f7f7;
  padding: 20px 0;
`;

const TypefaceTesterComponent: React.FC = props => {
  const [changeText, setChangeText] = useState(
    props.typeface.content.en.typefaceTestWords
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChangeText(event.target.value);
  };

  const [controls, setControls] = useState({
    fontSize: 30,
    lineHeight: 30,
    leading: 30,
    openTypeFeatures: {
      standardLigatures: false,
      contextuaLalternates: false,
      discretionLigatures: false,
      swash: false,
      fractions: false,
      stylisticOne: false,
      stylisticTwo: false,
      stylisticThree: false,
      stylisticFour: false,
      stylisticFive: false,
      stylisticSix: false,
      stylisticSeven: false
    }
  });
  const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    border: none;
    font-size: ${props => `${props.fontSize}px`};
    line-height: ${props => `${props.lineHeight}px`};
    letter-spacing: ${props => `${props.leading}px`};
    overflow: hidden;
  `;
  function onControlsChange(event) {
    setControls(event);
    console.log("tester parent value is here man", controls);
  }
  return useObserver(() => (
    <TesterContainer fluid={true}>
      <Row>
        <TypefaceTesterHeaderComponent
          goto={
            props.typeface.content.en.typefaceLinkWebsite
              ? props.typeface.content.en.typefaceLinkWebsite
              : "/"
          }
          key={props.typeface.key}
        />
      </Row>
      <Row>
        <Col>
          <TextAreaContainer>
            <TextArea
              fontSize={
                typeof controls.fontSize === "number" ? controls.fontSize : 30
              }
              leading={
                typeof controls.leading === "number" ? controls.leading : 30
              }
              lineHeight={
                typeof controls.lineHeight === "number" ? controls.lineHeight : 30
              }
              onChange={handleChange}
            >
              {changeText ? changeText : " Lorem IPUSSM"}
            </TextArea>
            <TypefaceControls>
              <TypefaceControlsComponent
                onControlsChange={onControlsChange}
                controls={
                  props.typeface.content.en ? props.typeface.content.en : null
                }
              />
            </TypefaceControls>
          </TextAreaContainer>
        </Col>
      </Row>
    </TesterContainer>
  ));
};
export default TypefaceTesterComponent;
