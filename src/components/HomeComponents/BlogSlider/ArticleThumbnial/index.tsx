import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const ArticleThumbnial: React.FC = props => {
  // *
  // *
  // Styles
  // *
  // *
  const Article = styled.div`
    color: black;
    position: relative;
    cursor: pointer;
    &:hover h5 {
      -webkit-line-clamp: 3;
    }
    margin: 0 8px;
  `;
  const CustomImg = styled.div`
    width: 100%;
    height: 400px;
    overflow: hidden;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => `'${props.ImgSrc}'`});
    /* background-image: url(${props => props.ImgSrc}); */
    background-position: center;
    background-size: cover;
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
  const CustomTag = styled(Typography)`
    position: absolute;
    top: 24px;
    left: 24px;
    background: #c9eec9;
    padding: 1rem 2rem;
    border-radius: 100px;
    color: black;
  `;

  return useObserver(() => (
    <Article>
      <Link
        to={{
          pathname: `/blog/${props.articleData.content.en.articleInternalURL}`,
          state: {
            documentId: props.articleData.key
          }
        }}
      >
        <CustomImg
          ImgSrc={props.articleData.content.en.image1}
          alt={props.articleData.content.en.title}
        />
        <CustomTitle variant="h5">
          {props.articleData.content.en.title}
        </CustomTitle>
        <CustomTag variant="body2">
          {props.articleData.content.en.articleCategory}
        </CustomTag>
      </Link>
    </Article>
  ));
};
export default ArticleThumbnial;
