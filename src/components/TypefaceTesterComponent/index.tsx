import React, { useState, useEffect, useLayoutEffect } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col, Collapse, Form } from "react-bootstrap";

import TypefaceTesterHeaderComponent from "./TypefaceTesterHeaderComponent";
import TypefaceControlsComponent from "./TypefaceControlsComponent";
import { IconButton, useMediaQuery } from "@material-ui/core";
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

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border: none;
`;
const TypefaceTesterComponent: React.FC = props => {
  const screenSize = useMediaQuery("(max-width:700px)");
  const [open, setOpen] = useState(false);
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
  const [controls, setControls] = useState({
    fontSize: 90,
    lineHeight: 1,
    leading: 0,
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
    <TesterContainer fluid={true}>
      <Row>
        <TypefaceTesterHeaderComponent
          typefaceName={props.typeface.content.en.typefaceName}
          goto={
            props.typeface.content.en.websiteInternalURL
              ? props.typeface.content.en.websiteInternalURL
              : "/"
          }
          documentId={props.typeface.key}
        />
      </Row>
      <Row>
        <Col>
          <TextAreaContainer>
            <TextArea
              className={props.typeface.content.en.typefaceName}
              value={changeText}
              style={{
                paddingTop: 40,
                fontSize:
                  typeof controls.fontSize === "number"
                    ? controls.fontSize
                    : 90,
                lineHeight:
                  typeof controls.lineHeight === "number"
                    ? controls.lineHeight
                    : 1,
                letterSpacing:
                  typeof controls.leading === "number" ? controls.leading : 0,
                textAlign: `
                ${
                  controls.align !== undefined && controls.align === "a"
                    ? "left"
                    : "left" |
                      (controls.align !== undefined && controls.align === "c")
                    ? "right"
                    : "left" |
                      (controls.align !== undefined && controls.align === "b")
                    ? "center"
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
              {screenSize ? (
                <>
                  <Row>
                    <Col md={12} className="text-center">
                      <IconButton
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className="mt-3"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="32" height="32" fill="#F7F7F7" />
                          <g clip-path="url(#clip0)">
                            <path
                              d="M22 21.2H28M7 26.6V18.2V26.6ZM7 13.4V5V13.4ZM16 26.6V15.8V26.6ZM16 11V5V11ZM25 26.6V20.6V26.6ZM25 15.8V5V15.8ZM4 18.8H10H4ZM12.4 10.4H19.6H12.4Z"
                              stroke="black"
                              stroke-width="2"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect
                                x="4"
                                y="5"
                                width="24"
                                height="21.6"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </IconButton>
                    </Col>
                  </Row>
                  <Collapse in={open}>
                    <div id="example-collapse-text" className="mt-3">
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
                        showstylisticOne={
                          props.typeface.content.en.stylisticOne
                        }
                        showstylisticTwo={
                          props.typeface.content.en.stylisticTwo
                        }
                        showstylisticThree={
                          props.typeface.content.en.stylisticThree
                        }
                        showstylisticFour={
                          props.typeface.content.en.stylisticFour
                        }
                        showstylisticFive={
                          props.typeface.content.en.stylisticFive
                        }
                        showstylisticSix={
                          props.typeface.content.en.stylisticSix
                        }
                        showstylisticSeven={
                          props.typeface.content.en.stylisticSeven
                        }
                        fontSizeServer={90}
                        lineHeightServer={1}
                        leadingServer={1}
                        goto={
                          props.typeface.content.en.websiteInternalURL
                            ? props.typeface.content.en.websiteInternalURL
                            : "/"
                        }
                      />{" "}
                    </div>
                  </Collapse>
                </>
              ) : (
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
                  fontSizeServer={90}
                  lineHeightServer={1}
                  leadingServer={0}
                  goto={
                    props.typeface.content.en.websiteInternalURL
                      ? props.typeface.content.en.websiteInternalURL
                      : "/"
                  }
                />
              )}
            </TypefaceControls>
          </TextAreaContainer>
        </Col>
      </Row>
    </TesterContainer>
  );
};
export default TypefaceTesterComponent;
