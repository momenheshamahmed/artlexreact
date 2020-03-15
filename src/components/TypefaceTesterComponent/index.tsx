import React, { useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import TypfaceGalleryComponent from "../TypefaceGalleryComponent";

import TypefaceTesterHeaderComponent from "./TypefaceTesterHeaderComponent";
import TypefaceControlsComponent from "./TypefaceControlsComponent";
import TypfaceCustomSliderComponent from "./CustomSliderTypefaces";
import OneTypefaceStore from "../../stores/Typeface/index";

const TypefaceTesterComponent: React.FC = props => {
  // Assets
  // STYLES
  //
  //
  let fontSIZEFROMSTORE = OneTypefaceStore.TypefaceState;
  const [fontSizeFStore, setFontSizeFStore] = useState(20);
  useEffect(() => {
    setFontSizeFStore(fontSIZEFROMSTORE);
    console.log(fontSIZEFROMSTORE);
    console.log(typeof fontSizeFStore);
  }, [fontSIZEFROMSTORE]);

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
    font-size: ${props => `${props.fontSize}px`};

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
    <TesterContainer fluid={true}>
      <Row>
        <TypefaceTesterHeaderComponent goto={props.typeface.key ? props.typeface.key : "/"} />
      </Row>
      <Row>
        <Col>
          <TextAreaContainer>
            <TextArea
              fontSize={
                typeof fontSizeFStore === "number" ? fontSizeFStore : 20
              }
            >
              {props.typeface.content.en.typefaceTestWords
                ? props.typeface.content.en.typefaceTestWords
                : "lorem ipsum"
                }
            </TextArea>
            <TypefaceControls>
              <TypefaceControlsComponent controls={props.typeface.content.en ? props.typeface.content.en : null} />
            </TypefaceControls>
          </TextAreaContainer>
        </Col>
      </Row>
    </TesterContainer>
  ));
};
export default TypefaceTesterComponent;
