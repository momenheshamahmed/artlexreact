import React, { useRef, useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import useScrollSpy from "react-use-scrollspy";
import {
  Typography,
  Button,
  Divider,
  GridListTile,
  GridList
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import styled from "styled-components";
import TypfaceGalleryComponent from "../../components/TypefaceGalleryComponent";
import GetAppIcon from "@material-ui/icons/GetApp";
import { useLocation, useParams, Redirect } from "react-router-dom";
import { TypefaceStore, FontsInUseStore, FontStore } from "../../stores";
import Assets from "../../assets";
import Typefaces from "../../stores/Typefaces";
import TypefaceTesterComponentInsidePage from "../../components/TypefaceTesterComponentInsidePage";
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
const GreyTyppography = styled(Typography)`
  color: "#7A7777" !important;
`;
const CustomAnchor = styled.a`
  color: black;
  margin-right: 10px;
  transition: hover 0.4s;
  &:hover {
    color: #00ff00;
    text-decoration: none;
  }
`;
const FullScreenImage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${props => props.urlImage});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  text-align: right;
  margin-top: 101px;
`;

const BuyFontContainer = styled(Container)`
  background: ${props => props.color};
  padding: 1rem;
  margin: 1rem 0;
`;
const TextAndButton = styled(Row)`
  align-items: center;
`;
const ImgWeight = styled.div`
  width: 100%;
  height: 72px;
  overflow: hidden;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: right;
`;
const CustomButtonWeight = styled(Button)`
  background: ${props => props.backgroundColor} !important;
  border-radius: 100px !important;
  color: ${props => props.textColor} !important;
  & span svg {
    margin-left: 1.5rem !important;
    fill: ${props => props.svgColor};
  }
`;
const WeightPreview = styled(Col)`
  height: 100%;
`;

const TypeFacePage: React.FC = () => {
  const { typefaceId } = useParams();

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
  // let { state } = useLocation();
  return useObserver(() => (
    <>
      {TypefaceStore.Typefaces.map(val => {
        if (val.content.en.websiteInternalURL === typefaceId) {
          return (
            <div
              style={{
                marginTop: 101
              }}
            >
              {val.content.en.typefaceCategory === "Custom" ? (
                <FullScreenImage
                  urlImage={val.content.en.coverImage}
                  style={{
                    marginTop: 101
                  }}
                />
              ) : (
                <TypefaceTesterComponentInsidePage
                  typeface={val}
                  key={val.key}
                />
              )}

              <Container fluid={true}>
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
                    {val.content.en.typefaceCategory !== "Custom" ? (
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
                    ) : null}

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
                      <Typography
                        variant="h5"
                        component="h5"
                        className="font-weight-bold"
                      >
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
                      <Typography variant="body1" style={{ color: "#717171" }}>
                        Family
                      </Typography>
                      <Typography variant="h6">
                        {val.content.en.familyStyles}
                      </Typography>
                      <Typography variant="body1" style={{ color: "#717171" }}>
                        Release
                      </Typography>
                      <Typography variant="h6">
                        {val.content.en.releaseDate}
                      </Typography>
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
                {val.content.en.typefaceCategory !== "Custom" ? (
                  <>
                    <Divider />
                    <Container
                      fluid={true}
                      className="mt-5 mb-5"
                      ref={sectionRefs[2]}
                    >
                      <Typography
                        variant="h6"
                        component="h6"
                        className="mb-3 mt-3"
                      >
                        Buy Typeface Now
                      </Typography>
                      {/* Full Package Container */}
                      <BuyFontContainer fluid={true} color={"#000"}>
                        <TextAndButton>
                          <WeightPreview>
                            <ImgWeight
                              img={
                                val.content.en.fullPackageImageStore
                                  ? val.content.en.fullPackageImageStore
                                  : Assets.Images.uploadPlaceholder
                              }
                            />
                          </WeightPreview>
                          <Col className="text-right align-middle">
                            <CustomButtonWeight
                              variant="contained"
                              color="primary"
                              endIcon={<AddIcon />}
                              backgroundColor="#00FF00"
                              textColor="#000"
                              svgColor="#000"
                              href={val.content.en.fullPackageStoreUrl}
                            >
                              Add to Cart
                            </CustomButtonWeight>
                          </Col>
                        </TextAndButton>
                      </BuyFontContainer>
                      {/* Other Weights */}
                      {FontStore.Fonts.map(weight => {
                        if (
                          weight.content.en.selectTypeface ===
                          val.content.en.websiteInternalURL
                        ) {
                          return (
                            <BuyFontContainer
                              fluid={true}
                              color={
                                weight.content.en.backgroundColor
                                  ? weight.content.en.backgroundColor
                                  : "#f7f7f7"
                              }
                            >
                              <TextAndButton>
                                <WeightPreview>
                                  <ImgWeight
                                    img={
                                      weight.content.en.fontImage
                                        ? weight.content.en.fontImage
                                        : Assets.Images.uploadPlaceholder
                                    }
                                  />
                                </WeightPreview>
                                <Col className="text-right align-middle">
                                  <CustomButtonWeight
                                    variant="contained"
                                    color="primary"
                                    endIcon={<AddIcon />}
                                    backgroundColor={
                                      weight.content.en.buttonColor
                                        ? weight.content.en.buttonColor
                                        : "black"
                                    }
                                    textColor={
                                      weight.content.en.textColor
                                        ? weight.content.en.textColor
                                        : "white"
                                    }
                                    svgColor={
                                      weight.content.en.textColor
                                        ? weight.content.en.textColor
                                        : "white"
                                    }
                                    href=""
                                  >
                                    Add to Cart
                                  </CustomButtonWeight>
                                </Col>
                              </TextAndButton>
                            </BuyFontContainer>
                          );
                        } else {
                          return console.log("NO WEIGHTS NOW");
                        }
                      })}
                    </Container>
                  </>
                ) : null}

                <Divider />
                <Container
                  fluid={true}
                  ref={sectionRefs[3]}
                  className="mt-5 mb-5"
                >
                  <Typography
                    variant="h6"
                    component="h6"
                    className=" mb-3 mt-3"
                  >
                    FONT IN USE
                  </Typography>

                  <GridList cellHeight={200} cols={6} spacing={15}>
                    {FontsInUseStore.FontsInUse.map(font => {
                      if (
                        font.content.en.selectTypeface ===
                        val.content.en.websiteInternalURL
                      ) {
                        return (
                          <GridListTile
                            key={font.key}
                            cols={font.content.en.imageGrid}
                          >
                            <img
                              src={font.content.en.imageInUse}
                              alt={font.content.en.selectTypeface.name}
                            />
                          </GridListTile>
                        );
                      }
                    })}
                  </GridList>
                </Container>
                <Divider />
                <Container
                  fluid={true}
                  ref={sectionRefs[4]}
                  className="mt-5 mb-5"
                >
                  <Typography
                    variant="h6"
                    component="h6"
                    className=" mb-3 mt-3"
                  >
                    Pair Fonts
                  </Typography>
                  <GridList
                    cellHeight={
                      val.content.en.pairfonts[0] !== "noitems" ? 400 : 20
                    }
                    cols={6}
                    spacing={15}
                  >
                    {val.content.en.pairfonts[0] !== "noitems" ? (
                      val.content.en.pairfonts.map(type => {
                        return TypefaceStore.Typefaces.map(sec => {
                          if (type === sec.content.en.websiteInternalURL) {
                            return (
                              <GridListTile key={sec.key} cols={2}>
                                <img
                                  src={sec.content.en.coverImage}
                                  alt={sec.content.en.typefaceName}
                                />
                              </GridListTile>
                            );
                          }
                        });
                      })
                    ) : (
                      <Typography variant="body1" className=" mb-3 mt-3">
                        No Pair Fonts
                      </Typography>
                    )}
                    {/* {TypefaceStore.Typefaces.map(test => {
                      return val.content.en.pairfonts.map(test2 => {
                        if (test2) {
                          if (test.content.en.websiteInternalURL === test2) {
                            return <h1>{test2}</h1>;
                          } else if (test2 === "noitems") {
                            return (
                              <Typography variant="h6">
                                No Pair Fonts!
                              </Typography>
                            );
                          } else {
                            return null;
                          }
                        }
                      });
                    })} */}
                  </GridList>
                  {/* <PairFontsComponent /> */}
                </Container>
                <Divider />
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
                            <GreyTyppography>
                              {val.content.en.typefaceName}
                            </GreyTyppography>
                          </Col>
                        </CustomtRow>
                        <Divider />
                        <CustomtRow>
                          <Col>
                            <GreyTyppography>Designer Name</GreyTyppography>
                          </Col>
                          <Col className="text-right">
                            <Typography>
                              {val.content.en.designerName}
                            </Typography>
                          </Col>
                        </CustomtRow>
                        <Divider />
                        <CustomtRow>
                          <Col>
                            <GreyTyppography>Designer Links</GreyTyppography>
                          </Col>

                          <Row>
                            {val.content.en.typefaceLinkBehance !== "" ||
                            val.content.en.typefaceLinkDribbble !== "" ||
                            val.content.en.typefaceLinkFacebook !== "" ||
                            val.content.en.typefaceLinkInstgram !== "" ||
                            val.content.en.typefaceLinkLinkedin !== "" ||
                            val.content.en.typefaceLinkPinterest !== "" ||
                            val.content.en.typefaceLinkTwitter !== "" ||
                            val.content.en.typefaceLinkWebsite !== "" ? (
                              <Col className="text-right">
                                {val.content.en.typefaceLinkFacebook ? (
                                  <CustomAnchor
                                    href="https://facebook.com/protypefoundry"
                                    target="_blank"
                                  >
                                    <img
                                      src={Assets.Images.facebook}
                                      alt="protype facebook"
                                    />
                                  </CustomAnchor>
                                ) : null}
                                {val.content.en.typefaceLinkInstgram ? (
                                  <CustomAnchor
                                    href="https://facebook.com/protypefoundry"
                                    target="_blank"
                                  >
                                    <img
                                      src={Assets.Images.instagram}
                                      alt="protype facebook"
                                    />
                                  </CustomAnchor>
                                ) : null}
                                {val.content.en.typefaceLinkBehance ? (
                                  <CustomAnchor
                                    href="https://facebook.com/protypefoundry"
                                    target="_blank"
                                  >
                                    <img
                                      src={Assets.Images.behance}
                                      alt="protype facebook"
                                    />
                                  </CustomAnchor>
                                ) : null}
                                {val.content.en.typefaceLinkDribbble ? (
                                  <CustomAnchor
                                    href="https://facebook.com/protypefoundry"
                                    target="_blank"
                                  >
                                    <img
                                      src={Assets.Images.dribbble}
                                      alt="protype facebook"
                                    />
                                  </CustomAnchor>
                                ) : null}
                                {val.content.en.typefaceLinkPinterest ? (
                                  <CustomAnchor
                                    href="https://facebook.com/protypefoundry"
                                    target="_blank"
                                  >
                                    <img
                                      src={Assets.Images.pinterest}
                                      alt="protype facebook"
                                    />
                                  </CustomAnchor>
                                ) : null}

                                {val.content.en.typefaceLinkLinkedin ? (
                                  <CustomAnchor
                                    href="https://facebook.com/protypefoundry"
                                    target="_blank"
                                  >
                                    <img
                                      src={Assets.Images.linkedin}
                                      alt="protype facebook"
                                    />
                                  </CustomAnchor>
                                ) : null}
                                {val.content.en.typefaceLinkTwitter ? (
                                  <CustomAnchor
                                    href="https://facebook.com/protypefoundry"
                                    target="_blank"
                                  >
                                    <img
                                      src={Assets.Images.twitter}
                                      alt="protype facebook"
                                    />
                                  </CustomAnchor>
                                ) : null}
                                {val.content.en.typefaceLinkWebsite ? (
                                  <CustomAnchor
                                    href="https://facebook.com/protypefoundry"
                                    target="_blank"
                                  >
                                    <img
                                      src={Assets.Images.website}
                                      alt="protype facebook"
                                    />
                                  </CustomAnchor>
                                ) : null}
                              </Col>
                            ) : (
                              <Typography>
                                No links for this designer!
                              </Typography>
                            )}
                          </Row>
                        </CustomtRow>
                        <Divider />
                        <CustomtRow>
                          <Col>
                            <GreyTyppography>Version</GreyTyppography>
                          </Col>
                          <Col className="text-right">
                            <Typography>{val.content.en.version}</Typography>
                          </Col>
                        </CustomtRow>
                        <Divider />
                        <CustomtRow>
                          <Col>
                            <GreyTyppography>Manufacturing</GreyTyppography>
                          </Col>
                          <Col className="text-right">
                            <Typography>
                              {val.content.en.manufacturing}
                            </Typography>
                          </Col>
                        </CustomtRow>
                        <Divider />
                        <CustomtRow>
                          <Col>
                            <GreyTyppography>Copyright</GreyTyppography>
                          </Col>
                          <Col className="text-right">
                            <Typography>
                              {val.content.en.manufacturing}
                            </Typography>
                          </Col>
                        </CustomtRow>
                        <Divider />
                        <CustomtRow>
                          <Col>
                            <GreyTyppography>Release Date</GreyTyppography>
                          </Col>
                          <Col className="text-right">
                            <Typography>
                              {val.content.en.releaseDate}
                            </Typography>
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
                          {val.content.en.languagesSupported[0] !==
                          "nolanguages" ? (
                            val.content.en.languagesSupported.map(lang => {
                              return (
                                <CustomTag variant="body2">{lang}</CustomTag>
                              );
                            })
                          ) : (
                            <GreyTyppography variant="body2">
                              No Languages Supported!
                            </GreyTyppography>
                          )}
                        </CustomtRow>
                      </Container>
                    </Collapse>
                  </Container>
                  {val.content.en.specimenFilePdf ||
                  val.content.en.specimenFileText ? (
                    <Container fluid={true}>
                      <ContactItemThree
                        onClick={() =>
                          window.open(
                            val.content.en.specimenFilePdf
                              ? val.content.en.specimenFilePdf
                              : val.content.en.specimenFileText
                          )
                        }
                        aria-controls="example-collapse-text"
                        fluid={true}
                      >
                        <Col>
                          <Typography>Download PDF Specimen</Typography>
                        </Col>
                        <Col className="text-right">
                          {" "}
                          <GetAppIcon />
                        </Col>
                      </ContactItemThree>
                    </Container>
                  ) : null}

                  {val.content.en.typefaceCategory !== "Custom" ? (
                    val.content.en.userAgreementPdf ||
                    val.content.en.userAgreementText ? (
                      <Container fluid={true}>
                        <ContactItemThree
                          onClick={() => {
                            window.open(
                              val.content.en.specimenFilePdf
                                ? val.content.en.userAgreementPdf
                                : val.content.en.userAgreementText
                            );
                          }}
                          aria-controls="example-collapse-text"
                          fluid={true}
                        >
                          <Col>
                            <Typography>font end-user agreement</Typography>
                          </Col>
                          <Col className="text-right">
                            {" "}
                            <GetAppIcon />
                          </Col>
                        </ContactItemThree>
                      </Container>
                    ) : null
                  ) : null}
                </Container>
              </Container>
            </div>
          );
        }
      })}
    </>
  ));
};
export default TypeFacePage;
