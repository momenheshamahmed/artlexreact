import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import Assets from "../../assets";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { TypefaceStore } from "../../stores";

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
          <Col md={{ span: 4, order: 2 }} xs={{ order: 1 }}>
            <Typography variant="h6">Typefaces</Typography>
            <Row>
              <Col>
                {TypefaceStore.Typefaces.sort(
                  (a, b) =>
                    a.content.en.typefaceSorting - b.content.en.typefaceSorting
                )
                  .filter(val => val.content.en.showInFooter)
                  .slice(0, 3)
                  .map((val, index) => {
                    if (val.content.en.showInFooter) {
                      return (
                        <Typography
                          variant="body2"
                          className="mt-1"
                          key={index}
                        >
                          <LinkStyled to={val.content.en.typefaceLinkWebsite}>
                            {val.content.en.typefaceName}
                          </LinkStyled>
                        </Typography>
                      );
                    }
                  })}
              </Col>
              <Col>
                {TypefaceStore.Typefaces.sort(
                  (a, b) =>
                    a.content.en.typefaceSorting - b.content.en.typefaceSorting
                )
                  .filter(val => val.content.en.showInFooter)
                  .slice(4, 6)
                  .map((val, index) => {
                    if (val.content.en.showInFooter) {
                      return (
                        <Typography
                          variant="body2"
                          className="mt-1"
                          key={index}
                        >
                          <LinkStyled to={val.content.en.typefaceLinkWebsite}>
                            {val.content.en.typefaceName}
                          </LinkStyled>
                        </Typography>
                      );
                    }
                  })}
                <Typography>
                  <LinkStyled to={"/typefaces"} className="font-weight-bold">
                    More Typefaces
                  </LinkStyled>
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 2, order: 2 }} xs={{ order: 2 }}>
            <Row>
              <Col>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Custom Type</LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">News / Blog</LinkStyled>
                </Typography>
                <Typography variant="body1" className="mt-2 font-weight-bold">
                  Contact Us
                </Typography>
                <Typography variant="body1">
                  <CustomAnchor href="mailto: hi@protype.studio?subject=Hello &body=Let's start writing ....">
                    info@protypef.co
                  </CustomAnchor>
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 3, order: 3 }} xs={{ order: 3 }}>
            <Typography variant="body2" className="mt-1">
              <LinkStyled to="/">Policies/Q&A </LinkStyled>
            </Typography>
            <Typography variant="body2" className="mt-1">
              <LinkStyled to="/">Licensing </LinkStyled>
            </Typography>
            <Typography variant="body1" className="my-2 font-weight-bold">
              Social Media
            </Typography>
            <Row>
              <Col>
                <CustomAnchor
                  href="https://www.facebook.com/ProtypeTF"
                  target="_blank"
                >
                  <img src={Assets.Images.facebook} alt="protype facebook" />
                </CustomAnchor>
                <CustomAnchor
                  href="https://www.instagram.com/protypetf"
                  target="_blank"
                >
                  <img src={Assets.Images.instagram} alt="protype instagram" />
                </CustomAnchor>
                <CustomAnchor
                  href="https://www.behance.net/Protype/"
                  target="_blank"
                >
                  <img src={Assets.Images.behance} alt="protype behance" />
                </CustomAnchor>
                <CustomAnchor
                  href="https://dribbble.com/protype"
                  target="_blank"
                >
                  <img src={Assets.Images.dribbble} alt="protype behance" />
                </CustomAnchor>
                <CustomAnchor
                  href="https://www.linkedin.com/company/protypetf"
                  target="_blank"
                >
                  <img src={Assets.Images.linkedin} alt="protype linkedin" />
                </CustomAnchor>
                <CustomAnchor
                  href="https://twitter.com/Protypetf"
                  target="_blank"
                >
                  <img src={Assets.Images.twitter} alt="protype twitter" />
                </CustomAnchor>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 3, order: 4 }} xs={{ order: 4 }}>
            <img src={Assets.Images.logo} width="72px" />
            <Typography variant="body2" className="mt-3">
              {" "}
              Protype Foundry © 2019-2020. <br />
              All rights reserved.
            </Typography>
            <Typography variant="caption">
              👨🏻‍💻{" "}
              <a href="https://www.linkedin.com/in/momenheshamahmed">
                {" "}
                Momen Hesham
              </a>{" "}
            </Typography>
          </Col>
        </Row>
      </Container>
    </>
  ));
};
export default FooterComponent;
