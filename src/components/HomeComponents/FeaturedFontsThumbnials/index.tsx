import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { GridList, GridListTile, useMediaQuery } from "@material-ui/core";
import classes from "*.module.css";
import { Link } from "react-router-dom";
// Assets
import Assets from "../../../assets/index";

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
    <Container className="my-5">
      <GridList
        cellHeight={300}
        className={classes.gridList}
        cols={screenSize ? 1 : 3}
      >
        {screenSize
          ? props.tileData.slice(0, 2).map(tile => (
              <GridListTile
                key={tile.img}
                cols={screenSize ? 1 : tile.content.en.gridNumber || 1}
              >
                <Link to="/">
                  <CustomImg
                    src={tile.content.en.coverImageGrid}
                    hover={tile.content.en.hooooverImageGrid2}
                    alt={tile.content.en.selectTypeface.content.en.typefaceName}
                    ref={imgSrcHover}
                  />
                </Link>
              </GridListTile>
            ))
          : props.tileData.slice(0, 6).map(tile => (
              <GridListTile
                key={tile.img}
                cols={screenSize ? 1 : tile.content.en.gridNumber || 1}
              >
                <Link to="/">
                  <CustomImg
                    src={tile.content.en.coverImageGrid}
                    hover={tile.content.en.hooooverImageGrid2}
                    alt={tile.content.en.selectTypeface.content.en.typefaceName}
                    ref={imgSrcHover}
                  />
                </Link>
              </GridListTile>
            ))}
      </GridList>
    </Container>
  ));
};
export default FeaturedFontsThumbnialsComponent;
