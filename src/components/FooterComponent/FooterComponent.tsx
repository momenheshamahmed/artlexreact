import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import Assets from "../../assets";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";
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
      <Container fluid={true} className="mt-5 py-5">
        <Row>
          <Col md="3">
            <img src={Assets.Images.logo} width="72px" />
            <Typography variant="body2" className="mt-3">
              {" "}
              Protype Foundry © 2019-2020. <br />
              All rights reserved.
            </Typography>
          </Col>
          <Col md="4">
            <Typography variant="h6" className="font-weight-bold">
              Typefaces
            </Typography>
            <Row>
              <Col>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Fonts / sadasd </LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Fonts / sadasd </LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Fonts / sadasd </LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Fonts / sadasd </LinkStyled>
                </Typography>
              </Col>
              <Col>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Fonts / sadasd </LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Fonts / sadasd </LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Fonts / sadasd </LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Fonts / sadasd </LinkStyled>
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col md="2">
            <Typography variant="h6" className="font-weight-bold">
              Pages
            </Typography>
            <Row>
              <Col>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Home</LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Typefaces</LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Custom</LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">News / Blog</LinkStyled>
                </Typography>
                <Typography variant="body2" className="mt-1">
                  <LinkStyled to="/">Contact</LinkStyled>
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col md="3">
            <Typography variant="h6" className="font-weight-bold">
              Email Us
            </Typography>
            <Typography variant="body1">
              <CustomAnchor href="mailto: hi@protype.studio?subject=Hello &body=Let's start writing ....">
                info@protypef.co
              </CustomAnchor>
            </Typography>
            <Typography variant="body1" className="my-2 font-weight-bold">
              Social Media
            </Typography>
            <Row>
              <Col>
                <CustomAnchor
                  href="https://facebook.com/protypefoundry"
                  target="_blank"
                >
                  <img src={Assets.Images.facebook} alt="protype facebook" />
                </CustomAnchor>
                <CustomAnchor
                  href="https://facebook.com/protypefoundry"
                  target="_blank"
                >
                  <img src={Assets.Images.instagram} alt="protype instagram" />
                </CustomAnchor>
                <CustomAnchor
                  href="https://facebook.com/protypefoundry"
                  target="_blank"
                >
                  <img src={Assets.Images.behance} alt="protype behance" />
                </CustomAnchor>
                <CustomAnchor
                  href="https://facebook.com/protypefoundry"
                  target="_blank"
                >
                  <img src={Assets.Images.dribbble} alt="protype behance" />
                </CustomAnchor>

                <CustomAnchor
                  href="https://facebook.com/protypefoundry"
                  target="_blank"
                >
                  <img src={Assets.Images.pinterest} alt="protype pinterest" />
                </CustomAnchor>
                <CustomAnchor
                  href="https://facebook.com/protypefoundry"
                  target="_blank"
                >
                  <img src={Assets.Images.linkedin} alt="protype linkedin" />
                </CustomAnchor>

                <CustomAnchor
                  href="https://facebook.com/protypefoundry"
                  target="_blank"
                >
                  <img src={Assets.Images.twitter} alt="protype twitter" />
                </CustomAnchor>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <MomenHesham>
        <Typography>Designed & Developed By Momen Hesham</Typography>
      </MomenHesham>
    </>
  ));
};
export default FooterComponent;
