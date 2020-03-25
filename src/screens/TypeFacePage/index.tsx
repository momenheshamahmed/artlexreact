import React, { useRef, useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import FontInUseComponent from "../../components/TypefacePageComponents/FontInUseComponent";
import PairFontsComponent from "../../components/TypefacePageComponents/PairFontsComponent";
import useScrollSpy from "react-use-scrollspy";
import { Typography, Button, Divider } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import styled from "styled-components";
import TypfaceGalleryComponent from "../../components/TypefaceGalleryComponent";
import BuyTypefaceSection from "../../components/TypefacePageComponents/BuyTypefaceSection";
import GetAppIcon from "@material-ui/icons/GetApp";
import GridListComponent from "../../components/GridListComponent";
import { useLocation } from "react-router-dom";
import { database } from "firebase";
import { TypefaceStore } from "../../stores";

const CustomButton = styled(Button)`
  background: #00ff00 !important;
  border-radius: 100px !important;
  color: black !important;
  & span svg {
    margin-left: 1.5rem !important;
  }
`;
const CustomTag = styled(Typography)`
  background: #000;
  color: white;
  padding: 1rem 2rem;
  margin: 0 0.2rem !important;
  border-radius: 100px;
  &:nth-child(0) {
    margin-left: 0 !important;
  }
`;

const TypeFacePage: React.FC = () => {
  useEffect(() => {
    // tslint:disable-next-line: no-bitwise
    const $style = document.createElement("style");
    document.head.appendChild($style);

    $style.innerHTML = `
    @font-face {
      font-family: 'Liu Jian Mao Cao';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Liu Jian Mao Cao Regular'), local('LiuJianMaoCao-Regular'), url(https://fonts.gstatic.com/s/changa/v9/2-c79JNi2YuVOUcOarRPgnNGooxCZy2xcjnj9ytf.woff2) format('woff2');    }
`;
  }, []);

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -200
  });
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  const CustomtRow = styled(Row)`
    padding: 30px;
  `;
  const ContactItem = styled(CustomtRow)`
    border-bottom: 1px black solid;
    cursor: pointer;
    font-family: "Liu Jian Mao Cao" !important;
    background: ${open ? "#F7F7F7" : "#fff"};
    &:hover {
      background: ${!open ? "#000" : "#F7F7F7"};
      color: ${!open ? "#fff" : "#000"};
    }
  `;
  const ContactItemTwo = styled(CustomtRow)`
    border-bottom: 1px black solid;
    cursor: pointer;
    background: ${openTwo ? "#F7F7F7" : "#fff"};
    &:hover {
      background: ${!openTwo ? "#000" : "#F7F7F7"};
      color: ${!openTwo ? "#fff" : "#000"};
    }
  `;
  const ContactItemThree = styled(CustomtRow)`
    border-bottom: 1px black solid;
    cursor: pointer;
    background: ${openThree ? "#F7F7F7" : "#fff"};
    &:hover {
      background: ${!openThree ? "#000" : "#F7F7F7"};
      color: ${!openThree ? "#fff" : "#000"};
    }
  `;
  const CharacterImage = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `;
  let { state } = useLocation();

  return useObserver(() => (
    <>
      <Container fluid={true} style={{ paddingTop: 101 }}>
        {TypefaceStore.Typefaces.map(val => {
          if (val.key === state.documentId) {
            return (
              <>
                <Container
                  fluid={true}
                  sticky="top"
                  className="sticky-top bg-white py-4 text-center"
                  expand="lg"
                  style={{
                    top: "100px",
                    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  <Row>
                    <Col>
                      <Typography
                        className={
                          activeSection === 0
                            ? "App-navigation-item App-navigation-item--active"
                            : "App-navigation-item"
                        }
                      >
                        Gallery
                      </Typography>
                    </Col>
                    <Col>
                      <Typography
                        className={
                          activeSection === 1
                            ? "App-navigation-item App-navigation-item--active"
                            : "App-navigation-item"
                        }
                      >
                        Characters
                      </Typography>
                    </Col>
                    <Col>
                      <Typography
                        className={
                          activeSection === 2
                            ? "App-navigation-item App-navigation-item--active"
                            : "App-navigation-item"
                        }
                      >
                        Buy Font
                      </Typography>
                    </Col>
                    <Col>
                      <Typography
                        className={
                          activeSection === 3
                            ? "App-navigation-item App-navigation-item--active"
                            : "App-navigation-item"
                        }
                      >
                        Font In Use
                      </Typography>
                    </Col>
                    <Col>
                      <Typography
                        className={
                          activeSection === 4
                            ? "App-navigation-item App-navigation-item--active"
                            : "App-navigation-item"
                        }
                      >
                        Pair Fonts
                      </Typography>
                    </Col>
                    <Col>
                      <Typography
                        className={
                          activeSection === 5
                            ? "App-navigation-item App-navigation-item--active"
                            : "App-navigation-item"
                        }
                      >
                        Info
                      </Typography>
                    </Col>
                  </Row>
                </Container>

                <Container
                  fluid={true}
                  ref={sectionRefs[0]}
                  className="mt-5 mb-5"
                >
                  <Row>
                    <Col md={2}>
                      <Typography variant="h6" component="h6">
                        {val.content.en.typefaceName}
                      </Typography>
                    </Col>

                    <Col md={8}>
                      <Typography>
                        {val.content.en.typefaceDescription}
                      </Typography>
                      <CustomButton
                        variant="contained"
                        className="mt-3"
                        endIcon={<AddIcon />}
                        href="https://gum.co/CmZzm?wanted=true"
                      >
                        Add to Cart
                      </CustomButton>
                    </Col>
                    <Col md={2}>
                      <Typography>Family</Typography>
                      <Typography>Family</Typography>
                      <Typography>Family</Typography>
                      <Typography>Family</Typography>
                    </Col>
                  </Row>
                </Container>
                <Container fluid={true} className="mt-5 mb-5">
                  <TypfaceGalleryComponent
                    key="TypfaceGalleryComponent"
                    images={val.content.en.galleryField}
                  />
                </Container>
                <Container
                  fluid={true}
                  ref={sectionRefs[1]}
                  className="mt-5 mb-5"
                >
                  <>
                    <Typography
                      variant="h6"
                      component="h6"
                      className=" mb-3 mt-3"
                    >
                      Characters
                    </Typography>
                    <CharacterImage img={val.content.en.charactersImage} />
                  </>{" "}
                </Container>
                <Divider />
                <Container
                  fluid={true}
                  className="mt-5 mb-5"
                  ref={sectionRefs[2]}
                >
                  <BuyTypefaceSection key="BuyTypefaceSection" />
                </Container>
                <Divider />
                <Container
                  fluid={true}
                  ref={sectionRefs[3]}
                  className="mt-5 mb-5"
                >
                  <GridListComponent />
                </Container>
                <Divider />
                <Container
                  fluid={true}
                  ref={sectionRefs[4]}
                  className="mt-5 mb-5"
                >
                  <PairFontsComponent />
                </Container>
                <Container fluid={true} ref={sectionRefs[5]} className="my-5">
                  <Container fluid={true}>
                    <ContactItem
                      onClick={() => setOpen(!open)}
                      aria-controls="example-collapse-text"
                      aria-exfluid={true}
                      d={open}
                    >
                      <Col>
                        <Typography>Credits</Typography>
                      </Col>
                      <Col className="text-right">
                        <AddIcon />
                      </Col>
                    </ContactItem>
                    <Collapse in={open}>
                      <Container fluid={true}>
                        <CustomtRow>
                          <Col>
                            <Typography>Typeface Name</Typography>
                          </Col>
                          <Col className="text-right">
                            <Typography>
                              {val.content.en.typefaceName}
                            </Typography>
                          </Col>
                        </CustomtRow>
                        <Divider />
                        <CustomtRow>
                          <Col>
                            <Typography>Typeface Name</Typography>
                          </Col>
                          <Col className="text-right">
                            <Typography>Name</Typography>
                          </Col>
                        </CustomtRow>
                        <Divider />
                        <CustomtRow>
                          <Col>
                            <Typography>Typeface Name</Typography>
                          </Col>
                          <Col className="text-right">
                            <Typography>Name</Typography>
                          </Col>
                        </CustomtRow>
                        <Divider />
                        <CustomtRow>
                          <Col>
                            <Typography>Typeface Name</Typography>
                          </Col>
                          <Col className="text-right">
                            <Typography>Name</Typography>
                          </Col>
                        </CustomtRow>
                        <Divider />
                      </Container>
                    </Collapse>
                  </Container>
                  <Container fluid={true}>
                    <ContactItemTwo
                      onClick={() => setOpenTwo(!openTwo)}
                      aria-controls="example-collapse-text"
                      fluid={true}
                      a-expanded={openTwo}
                    >
                      <Col>
                        <Typography>SUPPORTED LANGUAGES</Typography>
                      </Col>
                      <Col className="text-right">
                        {" "}
                        <AddIcon />
                      </Col>
                    </ContactItemTwo>
                    <Collapse in={openTwo}>
                      <Container fluid={true}>
                        <CustomtRow>
                          <CustomTag variant="body2">Language</CustomTag>
                          <CustomTag variant="body2">Language</CustomTag>
                          <CustomTag variant="body2">Language</CustomTag>
                          <CustomTag variant="body2">Language</CustomTag>
                        </CustomtRow>
                      </Container>
                    </Collapse>
                  </Container>
                  <Container fluid={true}>
                    <ContactItemThree
                      // onClick={() => setOpenThree(!openThree)}
                      aria-controls="example-collapse-text"
                      fluid={true}
                      aria-expanded={openThree}
                    >
                      <Col>
                        <Typography>ask for a proposal</Typography>
                      </Col>
                      <Col className="text-right">
                        {" "}
                        <GetAppIcon />
                      </Col>
                    </ContactItemThree>
                  </Container>
                  <Container fluid={true}>
                    <ContactItemThree
                      // onClick={() => setOpenThree(!openThree)}
                      aria-controls="example-collapse-text"
                      fluid={true}
                      aria-expanded={openThree}
                    >
                      <Col>
                        <Typography>User Agreement</Typography>
                      </Col>
                      <Col className="text-right">
                        {" "}
                        <GetAppIcon />
                      </Col>
                    </ContactItemThree>
                  </Container>
                </Container>
              </>
            );
          }
        })}
      </Container>
    </>
  ));
};
export default TypeFacePage;
