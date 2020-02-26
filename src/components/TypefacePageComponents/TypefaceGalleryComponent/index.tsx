import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import ImageGalleryComponent from "../../ImageGalleryComponent";
import Assets from "../../../assets";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TypfaceGalleryComponent: React.FC = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return useObserver(() => (
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {[
          {
            imgSrc: Assets.Images.uploadPlaceholder,
            Title: "Momen 1"
          },
          {
            imgSrc: Assets.Images.uploadPlaceholder,
            Title: "Momen 2 "
          },
          {
            imgSrc: Assets.Images.uploadPlaceholder,
            Title: "Momen 3"
          },
          {
            imgSrc: Assets.Images.uploadPlaceholder,
            Title: "Momen 3"
          }
        ].map(data => (
          <ImageGalleryComponent key={data.Title} imgData={data} />
        ))}
      </Carousel>
    </>
  ));
};
export default TypfaceGalleryComponent;
