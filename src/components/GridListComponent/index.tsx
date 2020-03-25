import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import {
  GridList,
  GridListTile,
  useMediaQuery,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
// Assets
import Assets from "../../assets/index";

const GridListComponent: React.FC = () => {
  const screenSize = useMediaQuery("(max-width:700px)");
  const tileData = [
    {
      img: Assets.Images.uploadPlaceholder,
      hover: Assets.Images.uploadPlaceholder,
      title: "Image",
      author: "author",
      cols: 2,
      rows: 1
    },
    {
      img: Assets.Images.uploadPlaceholder,
      hover: Assets.Images.uploadPlaceholder,
      title: "Image",
      author: "author",
      cols: 2,
      rows: 2
    },
    {
      img: Assets.Images.uploadPlaceholder,
      hover: Assets.Images.uploadPlaceholder,
      title: "Image",
      author: "author",
      cols: 2,
      rows: 1
    },
    {
      img: Assets.Images.uploadPlaceholder,
      hover: Assets.Images.uploadPlaceholder,
      title: "Image",
      author: "author",
      cols: 2,
      rows: 3
    },
    {
      img: Assets.Images.uploadPlaceholder,
      hover: Assets.Images.uploadPlaceholder,
      title: "Image",
      author: "author",
      cols: 2,
      rows: 1
    },
    {
      img: Assets.Images.uploadPlaceholder,
      hover: Assets.Images.uploadPlaceholder,
      title: "Image",
      cols: 2,
    },
    {
      img: Assets.Images.uploadPlaceholder,
      title: "Image",
      cols: 2,
    },
    {
      img: Assets.Images.uploadPlaceholder,
      title: "Image",
      rows: 2
    },
    {
      img: Assets.Images.uploadPlaceholder,
      title: "Image",
      cols: 1
    }
  ];

  const CustomImg = styled.div`
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    background: url(${props => props.src});

  `;
  const imgSrcHover = useRef<HTMLImageElement>(null);

  return useObserver(() => (
    <>
      <Typography variant="h6" component="h6" className=" mb-3 mt-3">
        FONT IN USE
      </Typography>
      <GridList
        cellHeight={200}
        cols={screenSize ? 1 : 6}
        spacing={15}
      >
        {tileData.slice(0, 2).map(tile => (
          <GridListTile key={tile.img} cols={screenSize ? 1 : tile.cols || 1}>
            <CustomImg
              src={tile.img}
              alt={tile.title}
              ref={imgSrcHover}
            />
          </GridListTile>
        ))}
      </GridList>
    </>
  ));
};
export default GridListComponent;
