import React from "react";
import { useObserver } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Assets from "../../assets/index";
import Font from "./types";
import BlogSliderComponent from "../../components/HomeComponents/BlogSlider";
import FeaturedFontsThumbnialsComponent from "../../components/HomeComponents/FeaturedFontsThumbnials";
import TypefaceTesterComponent from "../../components/TypefaceTesterComponent";
import FullScreenImageComponent from "../../components/FullScreenImageComponent";

const Home: React.FC = () => {
  const H1 = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Fonts: Font = [
    {
      fontName: "Momen",
      url: "momen",
      coverUrl: "test",
      featuredCarousel: false,
      featuredThumbnial: false,
      controls: {
        optionOne: false
      }
    }
  ];
  const FullScreenSrcs = [
    {
      url: `${Assets.Images.typefaceFullscreen}`,
      alt: "Momen"
    },
    {
      url: `${Assets.Images.typefaceFullscreenTwo}`,
      alt: "Momen"
    }
  ];
  return useObserver(() => (
    <div>
      <FullScreenImageComponent ImgSrc={FullScreenSrcs} />
      <FeaturedFontsThumbnialsComponent />
      <BlogSliderComponent />
      <TypefaceTesterComponent />
    </div>
  ));
};
export default Home;
