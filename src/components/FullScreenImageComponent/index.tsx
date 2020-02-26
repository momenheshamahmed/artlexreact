import React from "react";
import { useObserver } from "mobx-react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Assets from "../../assets/index";
import { Props } from './types';
const FullScreenImageComponent: React.FC<Props> = (props) => {
  //   Styles
  const FullScreenImage = styled.div`
    width: 100vw;
    height: 60vh;
    background-image: url(${customprops => customprops.urlImage});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
  `;
console.log(props)

  return useObserver(() => (
    <>
      {props.ImgSrc.map(image => {
        return (
          <Link to="/" key={image.alt}>
            <FullScreenImage urlImage={image.url} />
          </Link>
        );
      })}
    </>
  ));
};
export default FullScreenImageComponent;
