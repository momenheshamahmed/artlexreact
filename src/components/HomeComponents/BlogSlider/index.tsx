import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// Assets
import Assets from "../../../assets/index";

import { ButtonGroupProps, DotProps } from "react-multi-carousel/lib/types";
import ArticleThumbnial from "./ArticleThumbnial";
import { Typography } from "@material-ui/core";
import { BlogStore } from "../../../stores";

// tslint:disable-next-line: interface-name
interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}
const BlogSliderComponent: React.FC = props => {
  // *
  // *
  // Styles
  // *
  // *

  const ButtonGroupStyled = styled.div`
    position: absolute;
    top: 7px;
    right: 15px;
    display: flex;
    width: 50%;
    justify-content: flex-end;
  `;
  const ButtonCarouselIcon = styled.div`
    width: 10%;
    height: 5%;
    vertical-align: center;
    text-align: center;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 25%;
    }
  `;

  const CustomDotStyled = styled.div`
    display: block;
    width: 100px;
    height: 3px;
    margin-top: 30px;
    cursor: pointer;
    background-color: ${props =>
      props.IsActive ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.4)"};
    @media (max-width: 768px) {
      width: 32px;
    }
  `;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="position-relative">
      <Typography variant="h4" className="my-5 font-weight-bold">
        Blog
      </Typography>
      <Carousel
        swipeable={true}
        draggable={false}
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
        {BlogStore.Blogs.sort((a, b) => {
          return a.content.en.sortArticle - b.content.en.sortArticle;
        }).map(data => {
          if (data.content.en.featuredHome === true) {
            return <ArticleThumbnial articleData={data} />;
          } else if (data.content.en.featuredHome === false) {
            return null;
          }
        })}
      </Carousel>
    </div>
  ));
};
export default BlogSliderComponent;
