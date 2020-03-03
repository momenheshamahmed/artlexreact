import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

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
    &:hover 
    h5 {
      -webkit-line-clamp: 3;
    }
  `;
  const CustomTitle = styled(Typography)`
    position: absolute;
    bottom: 24px;
    left: 24px;
    width: 322px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color:white;
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
    background: #C9EEC9;
    padding: 1rem 2rem;
    border-radius: 100px;
  `;
  const CustomImg = styled.div`
    width: 400px;
    height: 400px;
    overflow: hidden;
    background-image: url(${props => props.ImgSrc});
    background-position: center;
    background-size: cover;
  `;
  return useObserver(() => (
    <Article>
      <CustomImg ImgSrc={props.articleData.imgSrc} alt="" />
      <CustomTitle variant="h5">{props.articleData.Title}</CustomTitle>
      <CustomTag variant="body2">Tag</CustomTag>
    </Article>
  ));
};
export default ArticleThumbnial;
