import React from "react";
import { useObserver } from "mobx-react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Props } from "./types";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Button } from "@material-ui/core";

const FullScreenImageComponent: React.FC<Props> = props => {
  //   Styles
  const FullScreenImage = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url(${customprops => customprops.urlImage});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    text-align: right;
    padding: 10vh;
    &:hover button {
      transform: translateX(0vh);
      transition: 1s;
    }
  `;
  const CustomButton = styled(Button)`
    background: #00ff00 !important;
    border-radius: 100px !important;
    color: black !important;
    font-size: 2rem;
    font-weight: bold;
    transform: translateX(70vh);
    transition: 1s;

    & span svg {
      margin-left: 0.5rem !important;
    }
  `;
  return useObserver(() => (
    <>
      {props.ImgSrc.slice(0, 2).map(image => {
        return (
          <Link
            to={{
              pathname: `/custom/${image.content.en.websiteInternalURL}`,
              state: {
                documentId: image.key
              }
            }}
            key={image.key}
          >
            <FullScreenImage urlImage={image.content.en.coverImage}>
              <CustomButton
                variant="contained"
                className="mt-3"
                endIcon={<ArrowForwardIcon />}
              >
                View Custom Font
              </CustomButton>
            </FullScreenImage>
          </Link>
        );
      })}
    </>
  ));
};
export default FullScreenImageComponent;
