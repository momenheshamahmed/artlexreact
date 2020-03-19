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
    width: 400px;
    height: 400px;
    overflow: hidden;
    background-image: url(${props => props.ImgSrc});
    background-position: center;
    background-size: cover;
  `;

  return useObserver(() => (
    <>
      <CustomImg ImgSrc={props.imgData.imgSrc} alt="" />
    </>
  ));
};
export default ImageGalleryComponent;
