import React from "react";
import { useObserver } from "mobx-react";
import { Container, Row } from "react-bootstrap";
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const CustomImgServices = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: center;
  `;

  return useObserver(() => (
    <div style={{ marginTop: 101 }}>
      {ProtypeServices.ProtypeServicess ? (
        ProtypeServices.ProtypeServicess.map(val => {
          return (
            <>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                renderDotsOutside={false}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
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
                  return (
                    <CustomImgServices
                      src={data}
                      key={data}
                      draggable="false"
                    />
                  );
                })}
              </Carousel>
              <Container style={{ margin: "24 0" }}>
                {ReactHtmlParser(JSON.parse(val.content.en.richEditor1))}
              </Container>

              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                renderDotsOutside={false}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
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
                  return (
                    <CustomImgServices
                      src={data}
                      key={data}
                      draggable="false"
                    />
                  );
                })}
              </Carousel>
              <Container style={{ margin: "24 0" }}>
                {ReactHtmlParser(JSON.parse(val.content.en.richEditor2))}
              </Container>
            </>
          );
        })
      ) : (
        <h1>Loading ....</h1>
      )}
    </div>
  ));
};
export default PortypeServices;
