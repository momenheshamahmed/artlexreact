import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { GridList, GridListTile, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import Assets from "../../../assets";
// Assets

const FeaturedFontsThumbnialsComponent: React.FC = props => {
  const screenSize = useMediaQuery("(max-width:700px)");

  const CustomImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: background-image 0.4s;
    &:hover {
      background-image: url(${props => props.hover});
    }
  `;
  const imgSrcHover = useRef<HTMLImageElement>(null);

  return useObserver(() => (
    <Container fluid={true} className="my-5">
      <GridList cellHeight={300} cols={screenSize ? 1 : 3} spacing={16}>
        <GridListTile
          key={props.item.key}
          cols={screenSize ? 1 : props.item.content.en.gridNumber || 1}
        >
          <Link
            to={{
              pathname: `/typefaces/${props.item.content.en.websiteInternalURL}`,
              state: {
                documentId: props.item.key
              }
            }}
          >
            <CustomImg
              src={
                props.item.content.en.typefaceFeaturedGridNumberCover
                  ? props.item.content.en.typefaceFeaturedGridNumberCover
                  : Assets.Images.uploadPlaceholder
              }
              hover={
                props.item.content.en.typefaceFeaturedGridNumberhover
                  ? props.item.content.en.typefaceFeaturedGridNumberhover
                  : Assets.Images.uploadPlaceholder
              }
              alt={props.item.content.en.typefaceName}
              ref={imgSrcHover}
            />
          </Link>
        </GridListTile>
      </GridList>
    </Container>
  ));
};
export default FeaturedFontsThumbnialsComponent;
