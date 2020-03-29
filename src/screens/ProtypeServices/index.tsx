import React from "react";
import { useObserver } from "mobx-react";
import { Container, Row } from "react-bootstrap";
import Assets from "../../assets/index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styled from "styled-components";
import { ProtypeServices } from "../../stores";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
const PortypeServices: React.FC = () => {
  const FullScreenSrcs = [
    {
      url: `${Assets.Images.uploadPlaceholder}`,
      alt: "Momen"
    },
    {
      url: `${Assets.Images.uploadPlaceholder}`,
      alt: "Momen"
    },
    {
      url: `${Assets.Images.uploadPlaceholder}`,
      alt: "Momen"
    },
    {
      url: `${Assets.Images.uploadPlaceholder}`,
      alt: "Momen"
    },
    {
      url: `${Assets.Images.uploadPlaceholder}`,
      alt: "Momen"
    }
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const CustomImgServices = styled.div`
    width: 100%;
    height: 50vh;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  `;

  return useObserver(() => (
    <div style={{ marginTop: 101 }}>
      {ProtypeServices.ProtypeServicess.map(val => {
        return (
          <>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              renderDotsOutside={true}
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
              arrows={true}
            >
              {val.content.en.gallery1.map(data => {
                return <CustomImgServices src={data} key={data} />;
              })}
            </Carousel>
            <Container style={{ margin: "24 0" }}>
              {ReactHtmlParser(JSON.parse(val.content.en.richEditor1))}
            </Container>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              renderDotsOutside={true}
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
              arrows={true}
            >
              {val.content.en.gallery2.map(data => {
                return <CustomImgServices src={data} key={data} />;
              })}
            </Carousel>
            <Container style={{ margin: "24 0" }}>
              {ReactHtmlParser(JSON.parse(val.content.en.richEditor2))}
            </Container>
          </>
        );
      })}
    </div>
  ));
};
export default PortypeServices;
