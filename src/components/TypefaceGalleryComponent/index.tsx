import React, { useRef, useState } from "react";
import { useObserver } from "mobx-react";
import ImageGalleryComponent from "./ImageGalleryComponent";
import Assets from "../../assets";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Collapse, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import { Button } from "@material-ui/core";

const CustomButton = styled(Button)`
  background: transparent !important;
  color: black !important;
  box-shadow: none !important;
  & span svg {
    margin-left: 0.5rem !important;
  }
`;
const TypfaceGalleryComponent: React.FC = props => {
  const [open, setOpen] = useState(true);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const CustomImg = styled.div`
    width:96%;
    height: 400px;
    overflow: hidden;
    background-image: url(${props => props.ImgSrc});
    background-position: center;
    background-size: cover;
  `;

  return useObserver(() => (
    <Container fluid={true}>
      <Row>
        <Col md={12} className="text-center">
          <CustomButton
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            variant="contained"
            className="mt-3"
            endIcon={open ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
          >
            FONT GALLERY
          </CustomButton>
        </Col>
      </Row>
      <Collapse in={open}>
        <div id="example-collapse-text" className="mt-3">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={500}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {props.images.map(data => (
              <CustomImg ImgSrc={data} alt={data.Title} key={data.Title} />
            ))}
          </Carousel>{" "}
        </div>
      </Collapse>
    </Container>
  ));
};
export default TypfaceGalleryComponent;
