import React from "react";
import { useObserver } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Assets from "../../assets/index";
import Font from "./types";
import BlogSliderComponent from "../../components/HomeComponents/BlogSlider";
import FeaturedFontsThumbnialsComponent from "../../components/HomeComponents/FeaturedFontsThumbnials";
import TypefaceTesterComponent from "../../components/TypefaceTesterComponent";
import FullScreenImageComponent from "../../components/HomeComponents/FullScreenImageComponent";

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
  const tileData = [
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1
    }
  ];

  const Articles = [
    {
      imgSrc: Assets.Images.articleOne,
      Title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla leo ornare tellus vitae pretium purus id."
    },
    {
      imgSrc: Assets.Images.articleTwo,
      Title: "Momen 2 "
    },
    {
      imgSrc: Assets.Images.articleThree,
      Title: "Momen 3"
    },
    {
      ImgSrc: Assets.Images.articleThree,
      Title: "Momen 3",
      Id: "id",
      url: "sad",
      Img: {
        id: "asdsa",
        url: ""
      }
    }
  ];
  return useObserver(() => (
    <div>
      <FullScreenImageComponent ImgSrc={FullScreenSrcs} />
      <FeaturedFontsThumbnialsComponent tileData={tileData} />
      <BlogSliderComponent Articles={Articles} />
      {/* <TypefaceTesterComponent /> */}
    </div>
  ));
};
export default Home;
