import React, { useState } from "react";
import { useObserver } from "mobx-react";
import FullScreenImageComponent from "../../components/FullScreenImageComponent";
import Assets from "../../assets/index";
import { Button, Collapse, Row, Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

const CustomTypefaces: React.FC = () => {
  const FullScreenSrcs = [
    {
      url: `${Assets.Images.typefaceFullscreen}`,
      alt: "Momen"
    }
  ];
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  const CustomtRow = styled(Row)`
    padding: 30px;
    width: 100%;
  `;
  const ContactItem = styled(CustomtRow)`
    border-bottom: 1px black solid;
    cursor: pointer;
    background: ${open ? "#F7F7F7" : "#fff"};
    &:hover {
      background: ${!open ? "#000" : "#F7F7F7"};
      color: ${!open ? "#fff" : "#000"};
    }
  `;
  const initialValues: MyFormValues = { firstName: "" };

  return useObserver(() => (
    <>
      <FullScreenImageComponent ImgSrc={FullScreenSrcs} />
      <Container className="my-5">
        <Row>
          <ContactItem
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <Col>
              <Typography>Send us a message</Typography>
            </Col>
            <Col className="text-right">
              <AddIcon />
            </Col>
          </ContactItem>
          <Collapse in={open}>
            <Container>
              <CustomtRow>
                <Formik
                  initialValues={initialValues}
                  onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }}
                  render={formikBag => (
                    <Form style={{ width: "100%" }}>
                      <Field
                        component={TextField}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        name="firstName"
                        type="email"
                        label="Momen Hesham"
                      />
                      <Field
                        component={TextField}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        name="email"
                        type="email"
                        label="Email"
                      />
                    </Form>
                  )}
                />
              </CustomtRow>
            </Container>
          </Collapse>
        </Row>
        <Row>
          <ContactItem
            onClick={() => setOpenTwo(!openTwo)}
            aria-controls="example-collapse-text"
            aria-expanded={openTwo}
          >
            <Col>
              <Typography>ask for a proposal</Typography>
            </Col>
            <Col className="text-right">
              {" "}
              <AddIcon />
            </Col>
          </ContactItem>
          <Collapse in={openTwo}>
            <Container>
              <CustomtRow>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CustomtRow>
            </Container>
          </Collapse>
        </Row>
      </Container>
    </>
  ));
};
export default CustomTypefaces;
