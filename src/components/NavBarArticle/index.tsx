// Packages
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import styled from "styled-components";
// Assets
import { Typography } from "@material-ui/core";

const NavBarArticle: React.FC = props => {
  const CustomTag = styled(Typography)`
    background: #c9eec9;
    padding: 1rem 2rem;
    border-radius: 100px;
  `;
  const CustomTitle = styled(Typography)`
    width: 80%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: black;
    overflow: hidden;
    transition: 0.1s;
    transition-timing-function: ease-in;
    &:hover {
      -webkit-line-clamp: 3;
    }
    @media (max-width: 768px) {
      display: none;
    }
  `;

  return (
    <Navbar expand="md" fixed="top" bg="white" className="py-5">
      <Container>
        <Link to="/blog">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="28" fill="black" />
            <path
              d="M28.0002 16.8L29.9742 18.8858L22.1622 27.1548H39.2002V30.1133H22.1622L29.9742 38.3822L28.0002 40.468L16.8002 28.634L28.0002 16.8Z"
              fill="white"
            />
          </svg>
        </Link>
        <CustomTitle variant="h5">{props.data.content.en.title}</CustomTitle>
        <CustomTag variant="body2">
          {props.data.content.en.articleCategory}
        </CustomTag>
      </Container>
    </Navbar>
  );
};

export default NavBarArticle;
