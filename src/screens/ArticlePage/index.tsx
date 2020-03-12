import React from "react";
import { useObserver } from "mobx-react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const ArticlePage: React.FC = () => {
  const StyledImg = styled.div`
    background: red;
    width: 100%;
    height: 40vh;
    margin-bottom: 3vh;
  `;
  return useObserver(() => (
    <Container className="pt-5 mt-5">
      <StyledImg />
      <p>
        {" "}
        I designed a workshop to get our partner’s buy-in and used Win’s Idea to
        structure well-thought-out solutions.
      </p>
    </Container>
  ));
};
export default ArticlePage;
