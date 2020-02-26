import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const ArticleThumbnial: React.FC = props => {
  // *
  // *
  // Styles
  // *
  // *
  const Article = styled.div`
    color: black;
  `;
  const CustomImg = styled.div`
    width: 400px;
    height: 400px;
    overflow:hidden;
    background-image: url(${props => props.ImgSrc});
    background-position: center;
    background-size: cover;
  `;
  return useObserver(() => (
    <Article>
      <CustomImg ImgSrc={props.articleData.imgSrc} alt="" />
      <h1>{props.articleData.Title}</h1>
    </Article>
  ));
};
export default ArticleThumbnial;
