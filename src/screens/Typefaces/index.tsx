import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import TypefaceTesterComponent from "../../components/TypefaceTesterComponent";
import { TypefaceStore } from "../../stores";

const Typefaces: React.FC = () => {
  return useObserver(() => (
    <Container fluid={true} className="pt-5">
      {
        TypefaceStore.Typefaces.map(val => 
          <TypefaceTesterComponent typeface={val} key={val.key} />
        })
      }
    </Container>
  ));
};
export default Typefaces;
