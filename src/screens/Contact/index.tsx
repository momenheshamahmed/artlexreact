import React, { useState } from "react";
import { useObserver } from "mobx-react";
import Assets from "../../assets/index";
import { Collapse, Row, Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles"

import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { Formik, Form, Field, FormikHelpers, FormikProps } from "formik";
import { TextField } from "formik-material-ui";

import * as emailjs from "emailjs-com";
import NavBar from "../../components/NavBar";

interface IFormValues {
  firstName: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

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
  const ContactItemTwo = styled(CustomtRow)`
    border-bottom: 1px black solid;
    cursor: pointer;
    background: ${openTwo ? "#F7F7F7" : "#fff"};
    &:hover {
      background: ${!openTwo ? "#000" : "#F7F7F7"};
      color: ${!openTwo ? "#fff" : "#000"};
    }
  `;
  const ContactItemThree = styled(CustomtRow)`
    border-bottom: 1px black solid;
    cursor: pointer;
    background: ${openThree ? "#F7F7F7" : "#fff"};
    &:hover {
      background: ${!openThree ? "#000" : "#F7F7F7"};
      color: ${!openThree ? "#fff" : "#000"};
    }
  `;
  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "black"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "black"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#757575"
        },
        "&:hover fieldset": {
          borderColor: "#000"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#757575"
        }
      }
    }
  })(TextField);
  const CustomButton = withStyles({
    root: {
      boxShadow: "none",
      textTransform: "none",
      fontSize: 18,
      padding: "12px 24px",
      border: "1px solid",
      lineHeight: 1.5,
      color: "white",
      backgroundColor: "#000",
      borderColor: "#000",
      textTransform: "uppercase",
      marginTop: 15,
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      "&:hover": {
        backgroundColor: "#000",
        borderColor: "#000",
        boxShadow: "none"
      },
      "&:active": {
        boxShadow: "none",
        backgroundColor: "green",
        borderColor: "green"
      },
      "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
      }
    }
  })(Button);
  const CustomtRowLink = styled(Row)`
    padding: 30px 30px 30px 0;
    border-bottom: 0.1px solid #dfdfdf;
    &:hover {
      background: #fcfcfc;
    }
  `;
  const CustomLink = styled.a`
    width: calc(100% - 60px);
    display: block;
    margin: 0 auto;
    color: black;
    text-transform: capitalize;
    &:hover {
      color: black;
      text-decoration: none;
    }
  `;
  const [emailSent, setEmailSent] = useState(false);

  const FullScreenImage = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url(${props => props.urlImage});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    text-align: right;
    padding: 10vh;
  `;

  return useObserver(() => (
    <>
      <NavBar />

      <FullScreenImage urlImage={Assets.Images.uploadPlaceholder} />
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
                  initialValues={{ firstName: "", email: "", message: "" }}
                  onSubmit={(
                    values: IFormValues,
                    actions: FormikHelpers<IFormValues>
                  ) => {
                    actions.setSubmitting(true);
                    setTimeout(() => {
                      emailjs
                        .send(
                          "gmail", // Email service as defined in EmailJS setting
                          "template_fQRMbBug", // Email template ID provided by EmailJS
                          {
                            from_name: values.firstName,
                            to_name: "momenheshamzaza@gmail.com",
                            reply_to: values.email,
                            message_html: values.message
                          },
                          "user_PTCm89pSOkpRGXWRjnRuB" // EmailJS user ID
                        )
                        .then(() => {
                          setEmailSent(true);
                          actions.setSubmitting(false);
                          actions.resetForm();
                        })
                        .catch(() => {
                          actions.setSubmitting(false);
                          alert("Error sending email...");
                        });
                    }, 1000);
                  }}
                  render={formikBag => (
                    <Form style={{ width: "100%" }}>
                      <Field
                        component={CssTextField}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        name="firstName"
                        type="email"
                        label="Name"
                      />
                      <Field
                        component={CssTextField}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        name="email"
                        type="email"
                        label="Email"
                      />
                      <Field
                        component={CssTextField}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        name="message"
                        type="textarea"
                        label="message"
                      />
                      <CustomButton
                        variant="contained"
                        fullWidth={true}
                        type="submit"
                      >
                        send
                      </CustomButton>
                    </Form>
                  )}
                />
              </CustomtRow>
            </Container>
          </Collapse>
        </Row>
        <Row>
          <ContactItemTwo
            onClick={() => setOpenTwo(!openTwo)}
            aria-controls="example-collapse-text"
            aria-expanded={openTwo}
          >
            <Col>
              <Typography>ask for proposal / collaboration </Typography>
            </Col>
            <Col className="text-right">
              {" "}
              <AddIcon />
            </Col>
          </ContactItemTwo>
          <Collapse in={openTwo}>
            <div style={{ width: "100%" }}>
              <CustomLink href="mailto: hi@artlex.studio?subject=Hello &body=Let's start writing ....">
                <CustomtRowLink>
                  <Col>collaborations</Col>
                  <Col className="text-right">
                    <ArrowForwardIcon />
                  </Col>
                </CustomtRowLink>
              </CustomLink>
              <CustomLink href="https://docs.google.com/forms/d/1go0_F9IGbqfXdnEZhosEW_LmV7eZ6H_c2qZsboHkLFc/prefill">
                <CustomtRowLink>
                  <Col>proposal</Col>
                  <Col className="text-right">
                    <ArrowForwardIcon />
                  </Col>
                </CustomtRowLink>
              </CustomLink>
              <CustomLink href="https://docs.google.com/forms/d/1QXWRN9Y2fgAh7moxbegZyyaL4omOV5XHC7XR0R41Mu0/prefill">
                <CustomtRowLink>
                  <Col>font submission</Col>
                  <Col className="text-right">
                    <ArrowForwardIcon />
                  </Col>
                </CustomtRowLink>
              </CustomLink>
            </div>
          </Collapse>
        </Row>
        <Row>
          <ContactItemThree
            onClick={() => setOpenThree(!openThree)}
            aria-controls="example-collapse-text"
            aria-expanded={openThree}
          >
            <Col>
              <Typography>Policy / Frequently Q&A </Typography>
            </Col>
            <Col className="text-right">
              {" "}
              <AddIcon />
            </Col>
          </ContactItemThree>
          <Collapse in={openThree}>
            <div style={{ width: "100%" }}>
              <CustomLink href="https://docs.google.com/document/d/1Gq78BRmwves5JGtXd2afzeyqWU_AGMH7O-HWtJYDp9I/edit?usp=sharing">
                <CustomtRowLink>
                  <Col>Frequently Questions and Answers </Col>
                  <Col className="text-right">
                    <ArrowForwardIcon />
                  </Col>
                </CustomtRowLink>
              </CustomLink>
              <CustomLink href="https://docs.google.com/document/d/1HRK0KoAY8Mo_kxAowxaDC_3EZY85RCO9jadGQR-RJQU/edit?usp=sharing">
                <CustomtRowLink>
                  <Col>Privacy Policy </Col>
                  <Col className="text-right">
                    <ArrowForwardIcon />
                  </Col>
                </CustomtRowLink>
              </CustomLink>
              <CustomLink href="https://docs.google.com/document/d/18CMw6vNGoBR3WT6u63RbBaizitIjiE3OswpBhZDPs-Q/edit?usp=sharing">
                <CustomtRowLink>
                  <Col>Refund Policy </Col>
                  <Col className="text-right">
                    <ArrowForwardIcon />
                  </Col>
                </CustomtRowLink>
              </CustomLink>
              <CustomLink href="https://docs.google.com/document/d/1vyNS--288aDh3xMYIFQNuTdeG-s475YtMwrSXIJRN60/edit">
                <CustomtRowLink>
                  <Col>Licensing </Col>
                  <Col className="text-right">
                    <ArrowForwardIcon />
                  </Col>
                </CustomtRowLink>
              </CustomLink>
            </div>
          </Collapse>
        </Row>
      </Container>
    </>
  ));
};
export default ContactUs;
