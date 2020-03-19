import React, { useState, useEffect, useLayoutEffect } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col, Collapse, Form } from "react-bootstrap";
import TypfaceGalleryComponent from "../TypefaceGalleryComponent";

import TypefaceTesterHeaderComponent from "./TypefaceTesterHeaderComponent";
import TypefaceControlsComponent from "./TypefaceControlsComponent";
import TextAreaComponent from "./TextAreaComponent";
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
  // const [controls, setControls] = useState({});
  let controls = {
    fontSize: 20,
    leading: 50,
    lineHeight: 30
  };
  const [fontSize, setFontSize] = useState<number>(30);
  function onControlsChange(newValues) {
    setFontSize(newValues);
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
            <TextAreaComponent
              words={props.typeface.content.en.typefaceTestWords}
              fontSize={fontSize}
            />
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
