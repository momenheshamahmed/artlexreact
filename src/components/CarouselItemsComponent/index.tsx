import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Assets
import Assets from "../../assets/index";

const CarouselItemsComponent: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
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


  const Article = styled.div`
    color: black;
    & h1 {
      color: red;
    }
    & img {
      width: 400px;
      height: 400px;
    }
  `;
  const Title = styled.h1`
  color: red;
  `
  return useObserver(() => (
    <Container>
      <Title>Blog</Title>
      <Carousel
        swipeable={false}
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
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Article>
          <img src={Assets.Images.uploadPlaceholder} alt="" />
          <h1>Test</h1>
        </Article>
        <Article>
          <img src={Assets.Images.uploadPlaceholder} alt="" />
          <h1>Test 2</h1>
        </Article>
        <Article>
          <img src={Assets.Images.uploadPlaceholder} alt="" />
          <h1>Test 3</h1>
        </Article>
        <Article>
          <img src={Assets.Images.uploadPlaceholder} alt="" />
          <h1>Test 4</h1>
        </Article>
      </Carousel>
    </Container>
  ));
};
export default CarouselItemsComponent;
