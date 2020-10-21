import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import Assets from "../../assets";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const FooterComponent: React.FC = () => {
  const LinkStyled = styled(Link)`
    color: black;
    &:hover {
      color: #00ff00;
      text-decoration: none;
    }
  `;

  const CustomAnchor = styled.a`
    color: black;
    margin-right: 10px;
    transition: hover 0.4s;
    &:hover {
      color: #00ff00;
      text-decoration: none;
    }
  `;
  const MomenHesham = styled.div`
    text-align: center;
    padding: 10px;
    margin: 10px 0;
    background: black;
    color: white;
  `;
  return useObserver(() => (
    <>
      <Container className="mt-5 py-5">
        <Row className="text-center my-2" style={{ justifyContent: "center" }}>
          <IconButton
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
              })
            }
          >
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26.5" cy="26.5" r="26.5" fill="#00FF00" />
              <path
                d="M18 26.5L19.41 27.91L25 22.33V34.5H27V22.33L32.59 27.91L34 26.5L26 18.5L18 26.5Z"
                fill="black"
              />
            </svg>
          </IconButton>
        </Row>
        <Row>
       
          <Col md={{ span: 2 }}>
            <Typography variant="h6">Pages</Typography>
            <Row>
              <Col>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Custom Type</LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">News / Blog</LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Policies/Q&A</LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Licensing </LinkStyled>
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 3 }}>
            <Typography variant="body1" className="mt-2 font-weight-bold">
              Contact Us
            </Typography>
            <Typography variant="body1">
              <CustomAnchor href="mailto: hi@artlex.studio?subject=Hello &body=Let's start writing ....">
                info@artlexf.co
              </CustomAnchor>
            </Typography>
            <Typography variant="body1" className="my-2 font-weight-bold">
              Social Media
            </Typography>
            <Row>
              <Col>
                <CustomAnchor
                  href="https://www.facebook.com/artlexTF"
                  target="_blank"
                >
                  <img
                    draggable="false"
                    width="24"
                    src={Assets.Images.facebook}
                    alt="artlex facebook"
                  />
                </CustomAnchor>
                <CustomAnchor
                  href="https://www.instagram.com/artlextf"
                  target="_blank"
                >
                  <img
                    draggable="false"
                    width="24"
                    src={Assets.Images.instagram}
                    alt="artlex instagram"
                  />
                </CustomAnchor>
                <CustomAnchor
                  href="https://www.behance.net/artlex/"
                  target="_blank"
                >
                  <img
                    draggable="false"
                    width="24"
                    src={Assets.Images.behance}
                    alt="artlex behance"
                  />
                </CustomAnchor>
                <CustomAnchor
                  href="https://dribbble.com/artlex"
                  target="_blank"
                >
                  <img
                    draggable="false"
                    width="24"
                    src={Assets.Images.dribbble}
                    alt="artlex behance"
                  />
                </CustomAnchor>
                <CustomAnchor
                  href="https://www.linkedin.com/company/artlextf"
                  target="_blank"
                >
                  <img
                    draggable="false"
                    width="24"
                    src={Assets.Images.linkedin}
                    alt="artlex linkedin"
                  />
                </CustomAnchor>
                <CustomAnchor
                  href="https://twitter.com/artlextf"
                  target="_blank"
                >
                  <img
                    draggable="false"
                    width="24"
                    src={Assets.Images.twitter}
                    alt="artlex twitter"
                  />
                </CustomAnchor>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 3 }}>
            <img src={Assets.Images.logo} width="72px" />
            <Typography variant="body2" className="mt-3">
              {" "}
              artlex © 2019-2020. <br />
              All rights reserved.
            </Typography>
            {/* <Typography variant="caption">
              👨🏻‍💻{" "}
              <a href="https://www.linkedin.com/in/momenheshamahmed">
                {" "}
                Momen Hesham
              </a>{" "}
            </Typography> */}
          </Col>
        </Row>
      </Container>
    </>
  ));
};
export default FooterComponent;
