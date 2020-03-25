import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import TypefaceTesterComponent from "../../components/TypefaceTesterComponent";
import { TypefaceStore } from "../../stores";

const Typefaces: React.FC = () => {
  return useObserver(() => (
    <Container fluid={true} className="pt-5">
      {TypefaceStore.Typefaces.sort(
        (a, b) => a.content.en.typefaceSorting - b.content.en.typefaceSorting
      ).map(val => {
        if (val.content.en.typefaceCategory !== "Custom") {
          return (
            <>
              <TypefaceTesterComponent typeface={val} key={val.key} />
            </>
          );
        } else if (val.content.en.typefaceCategory === "Premium" || "Free") {
          return console.log("HAHAHA!");
        } else {
          return <h1>NO FONTS HERE</h1>;
        }
      })}
    </Container>
  ));
};
export default Typefaces;
