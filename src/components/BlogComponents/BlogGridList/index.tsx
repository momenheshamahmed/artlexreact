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
import classes from "*.module.css";
import { Link } from "react-router-dom";
// Assets
import Assets from "../../../assets/index";
import { BlogStore } from "../../../stores";

const BlogGridList: React.FC = () => {
  const screenSize = useMediaQuery("(max-width:700px)");

  const ContainerBlogGrid = styled(Container)`
    padding-top: 5vh;
    padding-bottom: 5vh;
    margin-top: 10vh;
  `;
  const CustomImg = styled.div`
    position: relative;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    color: black;
    /* background-image: linear-gradient(rgba(0,0,0,0.5), url(${`props => props.src`})); */
    /* background-image: linear-gradient(rgba(245, 246, 252, 0.52)),  ; */
    background-image: url(${props => `'${props.src}'`});
    &:hover {
      /* background:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .5)),
    url(${props => `'${props.hover}'`});; */
      -webkit-line-clamp: 3;
    }
  `;
  const CustomTag = styled(Typography)`
    position: absolute;
    top: 24px;
    left: 24px;
    background: #c9eec9;
    padding: 1rem 2rem;
    border-radius: 100px;
  `;
  const CustomTitle = styled(Typography)`
    position: absolute;
    bottom: 24px;
    left: 24px;
    width: 80%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: white;
    overflow: hidden;
    transition: 0.1s;
    transition-timing-function: ease-in;
    &:hover {
      -webkit-line-clamp: 3;
    }
  `;
  const imgSrcHover = useRef<HTMLImageElement>(null);

  return useObserver(() => (
    <ContainerBlogGrid fluid={true}>
      <GridList
        cellHeight={200}
        className={classes.gridList}
        cols={screenSize ? 1 : 4}
        rows={screenSize ? 1 : 4}
      >
        {BlogStore.Blogs.map(tile => (
          <GridListTile
            key={tile.key}
            cols={screenSize ? 1 : tile.content.en.gridNumber || 1}
            rows={screenSize ? 1 : tile.content.en.gridNumber || 1}
          >
            <Link
              to={{
                pathname: `/blog/${tile.content.en.articleInternalURL}`,
                state: {
                  documentId: tile.key
                }
              }}
            >
              <CustomImg
                src={tile.content.en.image1}
                // hover={tile.hover}
                alt={tile.content.en.title}
                ref={imgSrcHover}
              >
                <CustomTitle variant="h5">{tile.content.en.title}</CustomTitle>
                <CustomTag variant="body2">
                  {tile.content.en.articleCategory}
                </CustomTag>
              </CustomImg>
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </ContainerBlogGrid>
  ));
};
export default BlogGridList;
