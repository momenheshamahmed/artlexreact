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
import { BlogStore } from "../../../stores";
const ContainerBlogGrid = styled(Container)`
  padding-top: 5vh;
  padding-bottom: 5vh;
`;
const CustomImg = styled.div`
  position: relative;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  color: black;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => `'${props.src}'`});
  &:hover {
    -webkit-line-clamp: 3;
  }
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
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
const BlogGridList: React.FC = () => {
  const screenSize = useMediaQuery("(max-width:700px)");
  const imgSrcHover = useRef<HTMLImageElement>(null);

  return useObserver(() => (
    <ContainerBlogGrid fluid={true}>
      <GridList
        cellHeight={200}
        spacing={16}
        cols={screenSize ? 1 : 4}
        rows={screenSize ? 1 : 4}
      >
        {BlogStore.Blogs.sort(
          (a, b) => a.content.en.sortArticle - b.content.en.sortArticle
        ).map(tile => (
          <GridListTile
            key={tile.key}
            cols={
              screenSize
                ? 1
                : (tile.content.en.gridNumber > 4
                    ? 4
                    : tile.content.en.gridNumber) || 1
            }
            rows={
              screenSize
                ? 1
                : (tile.content.en.gridNumber > 4
                    ? 4
                    : tile.content.en.gridNumber) || 1
            }
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
