import React, { useState } from "react";
import { useObserver } from "mobx-react";
import FullScreenImageComponent from "../../components/FullScreenImageComponent";
import Assets from "../../assets/index";
import { Button, Collapse, Row, Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import { Formik, Form, Field, FormikHelpers, FormikProps  } from "formik";
import { TextField } from "formik-material-ui";

import * as emailjs from 'emailjs-com'

interface IFormValues {
  firstName: string
  email: string
  message: string
}


const CustomTypefaces: React.FC = () => {
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
  const initialValues: MyFormValues = { firstName: "" };
  const [emailSent, setEmailSent] = useState(false)
  const FullScreenSrcs = [
    {
      url: `${Assets.Images.typefaceFullscreen}`,
      alt: "Momen"
    }
  ];
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
      <FullScreenImage urlImage={Assets.Images.typefaceFullscreen} />
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
       onSubmit={(values: IFormValues, actions: FormikHelpers<IFormValues>) => {
         actions.setSubmitting(true)
         setTimeout(() => {
           emailjs.send(
             "gmail" // Email service as defined in EmailJS setting
             "template_fQRMbBug", // Email template ID provided by EmailJS
             {
               from_name: values.firstName,
               to_name: "momenheshamzaza@gmail.com",
               reply_to: values.email,
               message_html: values.message,
             },
             "user_PTCm89pSOkpRGXWRjnRuB" // EmailJS user ID
           )
           .then(() => {
               setEmailSent(true)
               actions.setSubmitting(false)
               actions.resetForm()
             })
           .catch(() => {
               actions.setSubmitting(false)
               alert('Error sending email...')
             })
         }, 1000)
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
                      <Field
                        component={TextField}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        name="message"
                        type="textarea"
                        label="message"
                      />
                      <Button
                        // onClick={() => sgMail.send(msg)}
                        variant="contained"
                        size="large"
                        fullWidth={true}
                        type="submit"
                      >
                        send
                      </Button>
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
              <Typography>ask for a proposal</Typography>
            </Col>
            <Col className="text-right">
              {" "}
              <AddIcon />
            </Col>
          </ContactItemTwo>
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
        <Row>
          <ContactItemThree
            onClick={() => setOpenThree(!openThree)}
            aria-controls="example-collapse-text"
            aria-expanded={openThree}
          >
            <Col>
              <Typography>ask for a proposal</Typography>
            </Col>
            <Col className="text-right">
              {" "}
              <AddIcon />
            </Col>
          </ContactItemThree>
          <Collapse in={openThree}>
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
