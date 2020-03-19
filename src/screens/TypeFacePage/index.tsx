import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";
import FontInUseComponent from "../../components/TypefacePageComponents/FontInUseComponent";
import PairFontsComponent from "../../components/TypefacePageComponents/PairFontsComponent";
import useScrollSpy from "react-use-scrollspy";
import { Typography, Button, Divider } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import styled from "styled-components";
import TypfaceGalleryComponent from "../../components/TypefaceGalleryComponent";
import BuyTypefaceSection from "../../components/TypefacePageComponents/BuyTypefaceSection";

const TypeFacePage: React.FC = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -100
  });
  const CustomButton = styled(Button)`
    background: #00ff00 !important;
    border-radius: 100px !important;
    color: black !important;
    & span svg {
      margin-left: 1.5rem !important;
    }
  `;
  return useObserver(() => (
    <Container fluid className="pt-5">
      <nav className="App-navigation">
        <span
          className={
            activeSection === 0
              ? "App-navigation-item App-navigation-item--active"
              : "App-navigation-item"
          }
        >
          Section 1
        </span>
        <span
          className={
            activeSection === 1
              ? "App-navigation-item App-navigation-item--active"
              : "App-navigation-item"
          }
        >
          Section 2
        </span>
        <span
          className={
            activeSection === 2
              ? "App-navigation-item App-navigation-item--active"
              : "App-navigation-item"
          }
        >
          Section 3
        </span>
      </nav>

      <Container fluid className="mt-5 mb-5">
        <Row>
          <Col md={2}>
            <Typography variant="h6" component="h6">
              Family
            </Typography>
          </Col>

          <Col md={8}>
            <Typography>
              Mr. Banks was first born as a set of bold numerals for a custom
              project, a few years back. But because they were so handsome we
              had to update them with letters that matched them. This typeface
              is perfect for branding or editorial projects.
            </Typography>
            <CustomButton
              variant="contained"
              className="mt-3"
              endIcon={<AddIcon />}
            >
              Add to Cart
            </CustomButton>
          </Col>
          <Col md={2}>
            <Typography>Family</Typography>
            <Typography>Family</Typography>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-5 mb-5">
        <TypfaceGalleryComponent key="TypfaceGalleryComponent" />
      </Container>
      <Divider />
      <Container fluid className="mt-5 mb-5">
        <BuyTypefaceSection key="BuyTypefaceSection" />
      </Container>
      <Divider />
      <Container fluid ref={sectionRefs[0]} className="mt-5 mb-5">
        <FontInUseComponent />
      </Container>
      <Divider />
      <Container fluid ref={sectionRefs[1]} className="mt-5 mb-5">
        <PairFontsComponent />
      </Container>
    </Container>
  ));
};
export default TypeFacePage;
