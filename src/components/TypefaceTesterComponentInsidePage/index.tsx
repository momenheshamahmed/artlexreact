import React, { useState, useEffect, useLayoutEffect } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col, Collapse, Form } from "react-bootstrap";

import TypefaceTesterHeaderComponent from "./TypefaceTesterHeaderComponent";
import TypefaceControlsComponent from "./TypefaceControlsComponent";

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

const TextArea = styled.textarea`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  border: none;
`;
const TypefaceTesterComponentInsidePage: React.FC = props => {
  const [changeText, setChangeText] = useState(
    props.typeface.content.en.typefaceTestWords
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChangeText(event.target.value);
  };
  const $style = document.createElement("style");
  document.head.appendChild($style);

  $style.innerHTML = `
    @font-face {
      font-family: '${props.typeface.content.en.typefaceName}';  
      src: local('${props.typeface.content.en.typefaceName}'), local('${
    props.typeface.content.en.typefaceName
  }'), url(${
    props.typeface.content.en.fileFont
      ? props.typeface.content.en.fileFont
      : "https://fonts.gstatic.com/s/spicyrice/v8/uK_24rSEd-Uqwk4jY1RyKvi8Ww.woff2"
  }) format('woff2');
    }
      .${props.typeface.content.en.typefaceName} {
        font-family: '${props.typeface.content.en.typefaceName}' !important;
      }
`;
  // useEffect(() => {
  //   // tslint:disable-next-line: no-bitwise

  // }, []);
  // src: local('Spicy Rice'), local('SpicyRice-Regular'), url(https://fonts.gstatic.com/s/spicyrice/v8/uK_24rSEd-Uqwk4jY1RyKvi8Ww.woff2) format('woff2');
  const [controls, setControls] = useState({
    fontSize: 10,
    lineHeight:
      props.typeface.content.en.lineHeight !== undefined &&
      props.typeface.content.en.lineHeight !== ""
        ? props.typeface.content.en.lineHeight
        : 1,
    leading:
      props.typeface.content.en.leading !== undefined &&
      props.typeface.content.en.leading !== undefined
        ? props.typeface.content.en.laeding
        : 2,
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
    },
    align: "a"
  });

  function onControlsChange(event) {
    setControls(event);
  }
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <TextAreaContainer>
            <TextArea
              className={props.typeface.content.en.typefaceName}
              value={changeText}
              style={{
                fontSize:
                  typeof controls.fontSize === "number"
                    ? controls.fontSize
                    : 30,
                lineHeight:
                  typeof controls.lineHeight === "number"
                    ? controls.lineHeight
                    : 10,
                letterSpacing:
                  typeof controls.leading === "number" ? controls.leading : 10,
                textAlign: `
                ${
                  controls.align !== undefined && controls.align === "a"
                    ? "left"
                    : "left" ||
                      (controls.align !== undefined && controls.align === "b")
                    ? "center"
                    : "left" ||
                      (controls.align !== undefined && controls.align === "c")
                    ? "right"
                    : "left"
                }
                `,
                fontFeatureSettings: `${
                  controls.openTypeFeatures.standardLigatures !== undefined &&
                  controls.openTypeFeatures.standardLigatures === true
                    ? '"liga", "clig"'
                    : '"liga" 0, "clig" 0'
                },
                    ${
                      controls.openTypeFeatures.contextuaLalternates !==
                        undefined &&
                      controls.openTypeFeatures.contextuaLalternates === true
                        ? '"calt"'
                        : '"calt" 0'
                    },
                    ${
                      controls.openTypeFeatures.contextuaLalternates !==
                        undefined &&
                      controls.openTypeFeatures.contextuaLalternates === true
                        ? '"dlig"'
                        : '"dlig" 0'
                    },
                    ${
                      controls.openTypeFeatures.swash !== undefined &&
                      controls.openTypeFeatures.swash === true
                        ? '"swsh"'
                        : '"swsh" 0'
                    },
                    ${
                      controls.openTypeFeatures.fractions !== undefined &&
                      controls.openTypeFeatures.fractions === true
                        ? '"frac"'
                        : '"frac" 0'
                    },
                    ${
                      controls.openTypeFeatures.stylisticOne !== undefined &&
                      controls.openTypeFeatures.stylisticOne === true
                        ? '"ss01"'
                        : '"ss01" 0'
                    },
                    ${
                      controls.openTypeFeatures.stylisticTwo !== undefined &&
                      controls.openTypeFeatures.stylisticTwo === true
                        ? '"ss02"'
                        : '"ss02" 0'
                    },
                    ${
                      controls.openTypeFeatures.stylisticThree !== undefined &&
                      controls.openTypeFeatures.stylisticThree === true
                        ? '"ss03"'
                        : '"ss03" 0'
                    },
                    ${
                      controls.openTypeFeatures.stylisticFour !== undefined &&
                      controls.openTypeFeatures.stylisticFour === true
                        ? '"ss04"'
                        : '"ss04" 0'
                    },
                    ${
                      controls.openTypeFeatures.stylisticFive !== undefined &&
                      controls.openTypeFeatures.stylisticFive === true
                        ? '"ss05"'
                        : '"ss05" 0'
                    },
                    ${
                      controls.openTypeFeatures.stylisticSix !== undefined &&
                      controls.openTypeFeatures.stylisticSix === true
                        ? '"ss06"'
                        : '"ss06" 0'
                    },
                    ${
                      controls.openTypeFeatures.stylisticSeven !== undefined &&
                      controls.openTypeFeatures.stylisticSeven === true
                        ? '"ss07"'
                        : '"ss07" 0'
                    }
                  `
              }}
              onChange={handleChange}
            />
            <TypefaceControls>
              <TypefaceControlsComponent
                onControlsChange={onControlsChange}
                controls={controls ? controls : null}
                images={props.typeface.content.en.galleryField}
                showstandardLigatures={
                  props.typeface.content.en.standardLigatures
                }
                showcontextuaLalternates={
                  props.typeface.content.en.contextuaLalternates
                }
                showdiscretionLigatures={
                  props.typeface.content.en.discretionLigatures
                }
                showswash={props.typeface.content.en.swash}
                showfractions={props.typeface.content.en.fractions}
                showstylisticOne={props.typeface.content.en.stylisticOne}
                showstylisticTwo={props.typeface.content.en.stylisticTwo}
                showstylisticThree={props.typeface.content.en.stylisticThree}
                showstylisticFour={props.typeface.content.en.stylisticFour}
                showstylisticFive={props.typeface.content.en.stylisticFive}
                showstylisticSix={props.typeface.content.en.stylisticSix}
                showstylisticSeven={props.typeface.content.en.stylisticSeven}
                fontSizeServer={
                  props.typeface.content.en.fontSize !== undefined &&
                  props.typeface.content.en.fontSize !== ""
                    ? props.typeface.content.en.fontSize
                    : 10
                }
                lineHeightServer={
                  props.typeface.content.en.leading !== undefined &&
                  props.typeface.content.en.leading !== ""
                    ? props.typeface.content.en.leading
                    : 1
                }
                leadingServer={
                  props.typeface.content.en.lineHeight !== undefined &&
                  props.typeface.content.en.lineHeight !== ""
                    ? props.typeface.content.en.lineHeight
                    : 3
                }
              />
            </TypefaceControls>
          </TextAreaContainer>
        </Col>
      </Row>
    </Container>
  );
};
export default TypefaceTesterComponentInsidePage;
