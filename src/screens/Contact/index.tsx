import React, { useState } from "react";
import { useObserver } from "mobx-react";
import FullScreenImageComponent from "../../components/FullScreenImageComponent";
import Assets from "../../assets/index";
import { Button, Collapse, Row, Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const CustomTypefaces: React.FC = () => {
  const FullScreenSrcs = [
    {
      url: `${Assets.Images.typefaceFullscreen}`,
      alt: "Momen"
    }
  ];
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  const ContactItem = styled(Row)`
    padding: 30px;
    width: 100%;
    border-bottom: 1px black solid;
    cursor: pointer;
    &:hover {
      background: black;
      color: white;
    }
  `;
  return useObserver(() => (
    <>
      <FullScreenImageComponent ImgSrc={FullScreenSrcs} />
      <Container>
        <Row>
          <ContactItem
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <Col>
              <Typography>click</Typography>
            </Col>
            <Col className="text-right">
              <AddIcon />
            </Col>
          </ContactItem>
          <Collapse in={open}>
            <div>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </Row>
        <Row>
          <ContactItem
            onClick={() => setOpenTwo(!openTwo)}
            aria-controls="example-collapse-text"
            aria-expanded={openTwo}
          >
            <Col>
              <Typography>click</Typography>
            </Col>
            <Col className="text-right">
              {" "}
              <AddIcon />
            </Col>
          </ContactItem>
          <Collapse in={openTwo}>
            <div>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </Row>
      </Container>
    </>
  ));
};
export default CustomTypefaces;
