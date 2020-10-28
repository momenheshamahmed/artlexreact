import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Assets from "../../assets/index";
import { Link } from "react-router-dom";

import { Button, useMediaQuery, Typography } from "@material-ui/core";
import NavBar from "../../components/NavBar";

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
