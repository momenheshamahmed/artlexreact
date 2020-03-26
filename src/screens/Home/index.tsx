import React, { useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Assets from "../../assets/index";
import Font from "./types";
import BlogSliderComponent from "../../components/HomeComponents/BlogSlider";
import FeaturedFontsThumbnialsComponent from "../../components/HomeComponents/FeaturedFontsThumbnials";
import TypefaceTesterComponent from "../../components/TypefaceTesterComponent";

import { database } from "firebase";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { TypefaceStore } from "../../stores";

//   Styles
const FullScreenImage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${customprops => customprops.urlImage});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  text-align: right;
  padding: 10vh;
  &:hover button {
    transform: translateX(0vh);
    transition: 1s;
  }
`;
const CustomButton = styled(Button)`
  background: #00ff00 !important;
  border-radius: 100px !important;
  color: black !important;
  font-size: 2rem;
  font-weight: bold;
  transform: translateX(70vh);
  transition: 1s;

  & span svg {
    margin-left: 0.5rem !important;
  }
`;
const Home: React.FC = () => {
  return useObserver(() => (
    <div style={{ marginTop: 101 }}>
      {TypefaceStore.Typefaces.map(val => {
        if (val.content.en.typefaceFeaturedFullScreen === true) {
          if (val.content.en.typefaceCategory === "Custom") {
            return (
              <Link
                to={{
                  pathname: `/custom/${val.content.en.websiteInternalURL}`,
                  state: {
                    documentId: val.key
                  }
                }}
                key={val.key}
              >
                <FullScreenImage urlImage={val.content.en.coverImage}>
                  <CustomButton
                    variant="contained"
                    className="mt-3"
                    endIcon={<ArrowForwardIcon />}
                  >
                    View Typeface
                  </CustomButton>
                </FullScreenImage>
              </Link>
            );
          } else if (val.content.en.typefaceCategory === "Premium" || "Free") {
            return (
              <Link
                to={{
                  pathname: `/typefaces/${val.content.en.websiteInternalURL}`,
                  state: {
                    documentId: val.key
                  }
                }}
                key={val.key}
              >
                <FullScreenImage urlImage={val.content.en.coverImage}>
                  <CustomButton
                    variant="contained"
                    className="mt-3"
                    endIcon={<ArrowForwardIcon />}
                  >
                    View Typeface
                  </CustomButton>
                </FullScreenImage>
              </Link>
            );
          }
        }
      })}
      <Container fluid={true}>
        {TypefaceStore.Typefaces.map(val => {
          if (val.content.en.typefaceFeaturedGrid === true) {
            return <FeaturedFontsThumbnialsComponent item={val} />;
          }
        })}

        <>
          <BlogSliderComponent />
        </>

        {/* <TypefaceTesterComponent /> */}
      </Container>
    </div>
  ));
};
export default Home;
