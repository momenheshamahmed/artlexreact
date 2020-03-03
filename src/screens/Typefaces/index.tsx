import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import TypefaceTesterComponent from "../../components/TypefaceTesterComponent";

const Typefaces: React.FC = () => {
  return useObserver(() => (
    <Container className="pt-5">
      <TypefaceTesterComponent />
      <TypefaceTesterComponent />
    </Container>
  ));
};
export default Typefaces;
