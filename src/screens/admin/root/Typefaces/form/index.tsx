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
import { Stepper, Step, StepLabel, Typography, CircularProgress } from "@material-ui/core";
import { TypefaceStore } from "../../../../../stores";
import RUG from "react-upload-gallery";
// Add style manually
import "react-upload-gallery/dist/style.css"; // or scss

import StorageStore from "../../../../../stores/Storage";

interface MyFormValues {
  firstName: string;
}

const AdminTypefacesForm: React.FC = () => {


  const initialValues: MyFormValues = { firstName: "" };

  const [isSaving, setIsSaving] = useState<boolean>(false);

  return useObserver(() => (
    <Container className="mt-5 p-5 bg-white ">
      <h1>Add New Font</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}  
        render={({ values, isSubmitting, handleBlur, setFieldValue }) => (
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
            <Button
              style={{
                marginTop: 24,
                marginBottom: 24
              }}
              onClick={formikBag ? formikBag.submitForm : () => console.warn('here')}
              variant="primary"
              size="large"
              disabled={isSaving}
            >
              {!isSaving ? "Save" : <CircularProgress />}
            </Button>
          </Form>
        )}
      />
    </Container>
  ))
}

export default AdminTypefacesForm;
