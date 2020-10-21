import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Assets from "../../assets/index";
import { Link } from "react-router-dom";

import { Button, useMediaQuery, Typography } from "@material-ui/core";
import TickerComponent from "../../components/Ticker";
import NavBar from "../../components/NavBar";
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
  font-size: 0.7rem;
  font-weight: bold;
  transform: translateX(70vh);
  transition: 1s;

  & span svg {
    margin-left: 0.5rem !important;
  }
`;
const CustomButtonPreveiw = styled(Button)`
  background: #00ff00 !important;
  border-radius: 100px !important;
  color: black !important;
  & span svg {
    margin-left: 1.5rem !important;
  }
`;
const GridListCustom = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  display: flex;
  flex-wrap: wrap;
`;
const GridListTileCustom = styled.div`
  /* flex: 1 0 calc(33% - 16px);
  margin: 8px;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  } */
  width: 100%;
  margin-bottom: 5%;

  @media (min-width: 48rem) {
    width: 49%;
    &:nth-child(odd) {
      margin-right: 0.1%;
    }
  }

  @media (min-width: 62rem) {
    width: 32.8%;
    &:not(:nth-child(3n)) {
      margin-right: 0.1%;
    }
  }

  &:before {
    content: "";
    float: left;
    padding-top: 100%;
  }
`;

const CustomImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    background-image: url(${props => props.hover});
  }
`;
const Home: React.FC = () => {
  const screenSize = useMediaQuery("(max-width:700px)");
  const imgSrcHover = useRef<HTMLImageElement>(null);

  return useObserver(() => (
    <>
      <NavBar />
  
    </>
  ));
};
export default Home;
