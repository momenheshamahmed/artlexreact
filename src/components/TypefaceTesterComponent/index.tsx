import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import TypfaceGalleryComponent from "../TypefaceGalleryComponent";

import TypefaceTesterHeaderComponent from "./TypefaceTesterHeaderComponent";
import TypefaceControlsComponent from "./TypefaceControlsComponent";

// Assets

const TypefaceTesterComponent: React.FC = (props) => {


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
  console.log("here", props.typeface.key)
  return useObserver(() => (
    <TesterContainer>
      <Row>
        <TypefaceTesterHeaderComponent goto={props.typeface.key}/>
      </Row>
      <Row>
        <Col>
          <TextAreaContainer>
            <TextArea>
              { props.typeface.content.en.typefaceTestWords }
            </TextArea>
            <TypefaceControls>
              <TypefaceControlsComponent controls={props.typeface.content.en}/>
            </TypefaceControls>
          </TextAreaContainer>
        </Col>
      </Row>

    </TesterContainer>
  ));
};
export default TypefaceTesterComponent;
