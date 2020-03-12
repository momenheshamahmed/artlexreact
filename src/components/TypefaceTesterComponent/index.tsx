import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import TypfaceGalleryComponent from "../TypefaceGalleryComponent";

import TypefaceTesterHeaderComponent from "./TypefaceTesterHeaderComponent
import TypefaceControlsComponent from "./TypefaceControlsComponent";

// Assets

const TypefaceTesterComponent: React.FC = () => {


  // const handleFontSizeChaning = (event: any, newValue: number | number[]) => {
  //   setFontSize(newValue);
  // };
  //
  //
  // STYLES
  //
  //
  const TesterContainer = styled(Container)`
    margin-top: 4vh;
    margin-bottom: 4vh;
  `;
  const TextAreaContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;
  `;
  const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    border: none;
  
    overflow: hidden;
  `;
  const TypefaceControls = styled.div`
    height: auto;
    width: 100%;
    background: #f7f7f7;
    padding: 20px 0;
  `;

  //
  //
  //
  //
  //
  return useObserver(() => (
    <TesterContainer>
      <Row>
        <TypefaceTesterHeaderComponent />
      </Row>
      <Row>
        <Col>
          <TextAreaContainer>
            <TextArea>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TextArea>
            <TypefaceControls>
              <TypefaceControlsComponent />
            </TypefaceControls>
          </TextAreaContainer>
        </Col>
      </Row>

    </TesterContainer>
  ));
};
export default TypefaceTesterComponent;
