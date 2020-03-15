import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// Assets
import Assets from "../../../assets/index";

import {
  ButtonGroupProps,
  ArrowProps,
  DotProps
} from "react-multi-carousel/lib/types";
import ArticleThumbnial from "./ArticleThumbnial";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}
const BlogSliderComponent: React.FC = props => {
  // *
  // *
  // Styles
  // *
  // *

  const Title = styled.h1`
    margin-bottom: 2vh;
  `;

  const ButtonGroupStyled = styled.div`
    position: absolute;
    top: 7px;
    right: 15px;
    display: flex;
    width: 50%;
    justify-content: end;
  `;
  const ButtonCarouselIcon = styled.div`
    width: 10%;
    height: 5%;
    vertical-align: center;
    text-align: center;
    cursor: pointer;
  `;

  const CustomDotStyled = styled.div`
    display: block;
    width: 100px;
    height: 3px;
    margin-top: 30px;
    cursor: pointer;
    background-color: ${props =>
      props.IsActive ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.4)"};
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
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const CarouselButtonGroup = ({
    next,
    previous
  }: CarouselButtonGroupProps) => {
    return (
      <ButtonGroupStyled>
        <ButtonCarouselIcon onClick={() => previous()}>
          {" "}
          <ArrowBackIcon aria-label={`star`} />
        </ButtonCarouselIcon>
        <ButtonCarouselIcon onClick={() => next()}>
          <ArrowForwardIcon />
        </ButtonCarouselIcon>
      </ButtonGroupStyled>
    );
  };
  const CustomDots = ({ index, active, onClick, carouselState }: DotProps) => {
    return (
      <div>
        <CustomDotStyled
          onClick={() => onClick()}
          IsActive={active ? "yes" : null}
        />
      </div>
    );
  };

  return useObserver(() => (
    <Container className="position-relative mt-5 mb-5">
      <Typography variant="h5" className="mb-5">
        Blog
      </Typography>

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        renderDotsOutside={true}
        customDot={<CustomDots />}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CarouselButtonGroup />}
      >
        {props.Articles.slice(
          0,
          props.Articles.length >= 3 ? 3 : Assets.Images.articleThree
        ).map(data => (
          <ArticleThumbnial articleData={data} />
        ))}
      </Carousel>
    </Container>
  ));
};
export default BlogSliderComponent;
