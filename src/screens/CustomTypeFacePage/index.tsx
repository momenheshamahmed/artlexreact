import React, { useRef, useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import { Container, Row, Col, Navbar, Collapse } from "react-bootstrap";
import FontInUseComponent from "../../components/TypefacePageComponents/FontInUseComponent";
import PairFontsComponent from "../../components/TypefacePageComponents/PairFontsComponent";
import useScrollSpy from "react-use-scrollspy";
import { Typography, Button, Divider } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import styled from "styled-components";
import TypfaceGalleryComponent from "../../components/TypefaceGalleryComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Assets from "../../assets";
import ImageGalleryComponent from "../../components/TypefaceGalleryComponent/ImageGalleryComponent";
import { useLocation } from "react-router-dom";
import { database } from "firebase";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import GridListComponent from "../../components/GridListComponent";

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
const CustomTypeFacePage: React.FC = () => {
  const [data, setData] = useState(null);
  let { state } = useLocation();
  useEffect(() => {
    if (state.documentId != null) {
      const dbRef = database().ref("/customtypefaces/" + state.documentId);
      dbRef.on("value", snapshot => {
        setData(snapshot.val());
      });
    } else {
      console.log("no data :( ");
    }
  }, [state.documentId]);

  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -40
  });
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
    padding: 10vh;
  `;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  const CustomtRow = styled(Row)`
    padding: 30px;
  `;
  const ContactItem = styled(CustomtRow)`
    border-bottom: 1px black solid;
    cursor: pointer;
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
  const CustomImg = styled.div`
    width: 400px;
    height: 400px;
    overflow: hidden;
    background-image: url(${props => props.ImgSrc});
    background-position: center;
    background-size: cover;
  `;
  return useObserver(() => (
    <Container fluid={true} className="pt-5">
      {data != null ? (
        <>
          <FullScreenImage urlImage={data.content.en.coverImage} />
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
                  Font In Use
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
                  Pair Fonts
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
                  Info
                </Typography>
              </Col>
            </Row>
          </Container>

          <Container
            ref={sectionRefs[0]}
            fluid={true}
            className="mt-5 mb-5 py-5"
          >
            <Row>
              <Col md={2}>
                <Typography variant="h6" component="h6">
                  {data.content.en.CustomTypefaceName}
                </Typography>
              </Col>

              <Col md={8}>
                <Typography>
                  Mr. Banks was first born as a set of bold numerals for a
                  custom project, a few years back. But because they were so
                  handsome we had to update them with letters that matched them.
                  This typeface is perfect for branding or editorial projects.
                </Typography>
                <CustomButton
                  variant="contained"
                  className="mt-3"
                  endIcon={<ArrowForwardIcon />}
                >
                  Contact Us
                </CustomButton>
              </Col>
              <Col md={2}>
                <Typography>Family</Typography>
                <Typography>Family</Typography>
              </Col>
            </Row>
          </Container>
          <Container fluid={true}>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={500}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {data.content.en.galleryField.map(data => (
                <ImageGalleryComponent key={data} imgData={data} />
              ))}
            </Carousel>
          </Container>
          <Divider className="mt-5" />
          <Container fluid={true} ref={sectionRefs[1]} className="mt-5 mb-5">
            <GridListComponent />
          </Container>
          <Divider />
          <Container fluid={true} ref={sectionRefs[2]} className="mt-5 mb-5">
            <PairFontsComponent data={data.content.en.pairfonts} />
          </Container>
          <Container fluid={true} ref={sectionRefs[3]} className="my-5">
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
                    <CustomTag variant="body2">
                      Language
                    </CustomTag>
                    <CustomTag variant="body2">
                      Language
                    </CustomTag>
                    <CustomTag variant="body2">
                      Language
                    </CustomTag>
                    <CustomTag variant="body2">
                      Language
                    </CustomTag>
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
          </Container>
        </>
      ) : (
        <h1>loading ..</h1>
      )}
    </Container>
  ));
};
export default CustomTypeFacePage;
