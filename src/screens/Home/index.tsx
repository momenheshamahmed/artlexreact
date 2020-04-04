import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Assets from "../../assets/index";
import BlogSliderComponent from "../../components/HomeComponents/BlogSlider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

import {
  Button,
  GridListTile,
  GridList,
  useMediaQuery
} from "@material-ui/core";
import { TypefaceStore } from "../../stores";
import TypefaceTesterComponent from "../../components/TypefaceTesterComponent";

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
const CustomButtonPreveiw = styled(Button)`
  background: #00ff00 !important;
  border-radius: 100px !important;
  color: black !important;
  & span svg {
    margin-left: 1.5rem !important;
  }
`;
const GridListCustom = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  display: flex;
  flex-wrap: wrap;
`;
const GridListTileCustom = styled.div`
  /* flex: 1 0 calc(33% - 16px);
  margin: 8px;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  } */
  width: 100%;
  margin-top: 0.5%;

  @media (min-width: 48rem) {
    width: 49%;
    &:nth-child(odd) {
      margin-right: 0.1%;
    }
  }

  @media (min-width: 62rem) {
    width: 32.8%;
    &:not(:nth-child(3n)) {
      margin-right: 0.1%;
    }
  }

  &:before {
    content: "";
    float: left;
    padding-top: 100%;
  }
`;
const CustomImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    background-image: url(${props => props.hover});
  }
`;
const Home: React.FC = () => {
  const screenSize = useMediaQuery("(max-width:700px)");
  const imgSrcHover = useRef<HTMLImageElement>(null);

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
      <Container fluid={true} className="my-5">
        <GridListCustom>
          {TypefaceStore.Typefaces.map(item => {
            if (item.content.en.typefaceFeaturedGrid === true) {
              return (
                <GridListTileCustom key={item.key}>
                  <Link
                    to={{
                      pathname: `${
                        item.content.en.typefaceCategory === "Custom"
                          ? `/custom/${item.content.en.websiteInternalURL}`
                          : `/typefaces/${item.content.en.websiteInternalURL}`
                      }`,
                      state: {
                        documentId: item.key
                      }
                    }}
                  >
                    <CustomImg
                      src={
                        item.content.en.typefaceFeaturedGridNumberCover
                          ? item.content.en.typefaceFeaturedGridNumberCover
                          : Assets.Images.uploadPlaceholder
                      }
                      hover={
                        item.content.en.typefaceFeaturedGridNumberHover
                          ? item.content.en.typefaceFeaturedGridNumberHover
                          : Assets.Images.uploadPlaceholder
                      }
                      alt={item.content.en.typefaceName}
                      ref={imgSrcHover}
                    />
                  </Link>
                </GridListTileCustom>
              );
            }
          })}
        </GridListCustom>
      </Container>
      <Container fluid={true}>
        <>
          <BlogSliderComponent />
        </>
        {TypefaceStore.Typefaces.sort(
          (a, b) => a.content.en.typefaceSorting - b.content.en.typefaceSorting
        ).map(val => {
          if (
            val.content.en.typefaceCategory !== "Custom" &&
            val.content.en.typefaceFeaturedTester === true
          ) {
            return (
              <>
                <TypefaceTesterComponent typeface={val} key={val.key} />
              </>
            );
          } else if (
            (val.content.en.typefaceCategory === "Premium" || "Free") &&
            val.content.en.typefaceFeaturedTester === true
          ) {
            return console.log("HAHAHA!");
          }
        })}{" "}
      </Container>
      <Container fluid={true} className="text-center">
        <CustomButtonPreveiw
          variant="contained"
          className="mt-3"
          endIcon={<ArrowForwardIcon />}
          href="/typefaces"
        >
          Preview More Fonts
        </CustomButtonPreveiw>
      </Container>
    </div>
  ));
};
export default Home;
