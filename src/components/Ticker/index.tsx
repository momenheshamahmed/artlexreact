import React from "react";
import { useObserver } from "mobx-react";
import styled, { keyframes } from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const TickerComponent: React.FC = () => {
  const LinkStyled = styled(Link)`
    color: black;
    &:hover {
      color: black;
    }
  `;
  const TickerAnimation = keyframes`
    0% {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }`;
  const TickerWrap = styled.div`
    overflow: hidden;
    height: 6rem;
    background-color: #00ff00;
    padding-left: 100%;
    box-sizing: content-box;
  `;
  const Ticker = styled.div`
    display: inline-block;
    height: 6rem;
    line-height: 6rem;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;

    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ${TickerAnimation};
    animation-duration: 30s;
    &:hover {
      animation-play-state: paused;
      cursor: pointer;
    }
  `;
  const TickerItem = styled.div`
    display: inline-block;
    padding: 0 2rem;
    font-size: 2rem;
    color: black;
    &:hover {
      text-decoration: underline;
    }
  `;

  return useObserver(() => (
    <>
      <div>
        <TickerWrap>
          <Ticker>
            <TickerItem>
              <LinkStyled to="/">Letterpress chambray brunch.</LinkStyled>
            </TickerItem>
            <TickerItem>Letterpress chambray brunch.</TickerItem>
            <TickerItem>Letterpress chambray brunch.</TickerItem>
            <TickerItem>Letterpress chambray brunch.</TickerItem>
          </Ticker>
        </TickerWrap>
      </div>
    </>
  ));
};
export default TickerComponent;
