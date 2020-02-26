import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { GridList, GridListTile, useMediaQuery } from "@material-ui/core";
import classes from "*.module.css";
import { Link } from "react-router-dom";
// Assets
import Assets from "../../../assets/index";

const BlogGridList: React.FC = () => {
  const screenSize = useMediaQuery("(max-width:700px)");
  const tileData = [
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 2,
      rows: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1,
      rows: 2
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 3,
      rows: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1,
      rows: 3
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1,
      rows: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 4,
      rows: 1
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1,
      rows: 2
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 4,
      rows: 2
    },
    {
      img: Assets.Images.typefaceStatic,
      hover: Assets.Images.typefaceHover,
      title: "Image",
      author: "author",
      cols: 1
    }
  ];

  const ContainerBlogGrid = styled(Container)`
  padding-top: 5vh;
  padding-bottom: 5vh;
  `
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
    <ContainerBlogGrid>
        <GridList
          cellHeight={200}
          className={classes.gridList}
          cols={screenSize ? 1 : 4}
          rows={screenSize ? 1 : 4}
        >
          {screenSize
            ? tileData.slice(0, 2).map(tile => (
                <GridListTile
                  key={tile.img}
                  cols={screenSize ? 1 : tile.cols || 1}
                  rows={screenSize ? 1 : tile.cols || 1}
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
                  rows={screenSize ? 1 : tile.cols || 1}

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
    </ContainerBlogGrid>
  ));
};
export default BlogGridList;
