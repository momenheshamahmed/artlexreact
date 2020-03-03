import React, { useState } from "react";
import { useObserver } from "mobx-react";
import GeneralFormComponent from "../../../../../components/GeneralFormComponent";
import { Typeface } from "../../../../../stores/Typefaces/types";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps
} from "formik";
import { Container, Row, Button, Col } from "react-bootstrap";
import { TextField } from "formik-material-ui";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import { TypefaceStore } from "../../../../../stores";
import RUG from "react-upload-gallery";
// Add style manually
import "react-upload-gallery/dist/style.css"; // or scss

import StorageStore from "../../../../../stores/Storage";

interface MyFormValues {
  firstName: string;
}

const AdminTypefacesForm: React.FC = () => {
  const getSteps = () => {
    return [
      "Select master blaster campaign settings",
      "Create an ad group",
      "Create an ad",
      "Step 3"
    ];
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <RUG
              style={{ width: "100%" }}
              sorting={{ axis: "xy" }}
              onChange={image => {
                console.log(image);
              }}
              source={response => response.source} // response image source
            />

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
                    multiline={true}
                    fullWidth={true}
                    name="firstName"
                    type="email"
                    label="Momen Hesham"
                  />
                </Form>
              )}
            />
          </div>
        );
      case 1:
        return (
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
                  multiline={true}
                  fullWidth={true}
                  name="firstName"
                  type="email"
                  label="Momen Hesham"
                />
              </Form>
            )}
          />
        );
      case 2:
        return "step 3";
      case 3:
        return "step 3 3 33 ";
      default:
        return "Unknown stepIndex";
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const initialValues: MyFormValues = { firstName: "" };
  return useObserver(() => (
    <Container className="mt-5 p-5 bg-white ">
      <Row>
        <Col>
          <h1>Add New Font</h1>
        </Col>
        <Col className="text-right">
          <div>
            {activeStep === steps.length ? (
              <div>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <div>
                  <Button
                    className="mr-4"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <div>
          <Stepper
            activeStep={activeStep}
            alternativeLabel={true}
            className="align-middle"
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </Row>
      <Row>{getStepContent(activeStep)}</Row>
    </Container>
  ));
};

export default AdminTypefacesForm;
