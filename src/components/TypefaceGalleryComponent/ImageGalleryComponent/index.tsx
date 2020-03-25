import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
const ImageGalleryComponent: React.FC = props => {
  // *
  // *
  // Styles
  // *
  // *
  const CustomImg = styled.div`
    width: 100%;
    height: 400px;
    margin: 0 8px;

    overflow: hidden;
    background-image: url(${props => props.ImgSrc});
    background-position: center;
    background-size: cover;
  `;

  return useObserver(() => (
    <>
    </>
  ));
};
export default ImageGalleryComponent;
