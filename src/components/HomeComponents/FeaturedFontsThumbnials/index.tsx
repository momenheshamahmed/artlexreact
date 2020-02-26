import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { GridList, GridListTile, useMediaQuery } from "@material-ui/core";
import classes from "*.module.css";
import { Link } from "react-router-dom";
// Assets
import Assets from "../../../assets/index";

const FeaturedFontsThumbnialsComponent: React.FC = () => {
  const screenSize = useMediaQuery("(max-width:700px)");
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

  const ImagesThumbnials = styled.div`
    margin: 4vh 0;
  `;
  const CustomImg = styled.div`
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    background: url(${props => props.src});
    &:hover {
      background: url(${props => props.hover});
    }
  `;
  const imgSrcHover = useRef<HTMLImageElement>(null);

  return useObserver(() => (
    <Container>
      <ImagesThumbnials>
        <GridList
          cellHeight={300}
          className={classes.gridList}
          cols={screenSize ? 1 : 3}
        >
          {screenSize
            ? tileData.slice(0, 2).map(tile => (
                <GridListTile
                  key={tile.img}
                  cols={screenSize ? 1 : tile.cols || 1}
                >
                  <Link to="/">
                    <CustomImg
                      src={tile.img}
                      hover={tile.hover}
                      alt={tile.title}
                      ref={imgSrcHover}
                    />
                  </Link>
                </GridListTile>
              ))
            : tileData.slice(0, 6).map(tile => (
                <GridListTile
                  key={tile.img}
                  cols={screenSize ? 1 : tile.cols || 1}
                >
                  <Link to="/">
                    <CustomImg
                      src={tile.img}
                      hover={tile.hover}
                      alt={tile.title}
                      ref={imgSrcHover}
                    />
                  </Link>
                </GridListTile>
              ))}
        </GridList>
      </ImagesThumbnials>
    </Container>
  ));
};
export default FeaturedFontsThumbnialsComponent;
