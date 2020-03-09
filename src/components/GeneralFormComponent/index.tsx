import React, { useState, useEffect, PropsWithChildren } from "react";
import {
  Container,
  Button,
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
  Typography,
  Divider,
  Switch,
  FormControlLabel,,,,
  Select
  Input
  MenuItem
  ListItemText,
  Chip
} from "@material-ui/core";
import { Formik, Form, Field, FieldProp, FieldArray, ErrorMessage } from "formik";
import { TextField, Checkbox } from "formik-material-ui";
import ImageField from "../adminComponents/ImageField";

import FileUploadField from "../adminComponents/FileUploadField";
import * as Yup from "yup";
import { useObserver } from "mobx-react";
import StorageStore from "../../stores/Storage";
import { useParams, useHistory } from "react-router";
import { BaseData } from "./types";
import { Props, FormKeys } from "./types";
import { Languages } from "../../utils/translation";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { Row } from "react-bootstrap";

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

const getColor = props => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const ContainerDropZone = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const DropzoneWithoutKeyboard = props => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: "image/*" });

  return (
    <div className="container">
      <ContainerDropZone
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </ContainerDropZone>
    </div>
  );
};
const MAXIMUM_IMAGE_SIZE = 2 * 1024 * 1024;

const mapDataToFormData = <T extends BaseData>(data: T) => {
  const formData: Record<string, any> = data;
  Object.entries(data.content).forEach(content => {
    const suffix = content[0].slice(0, 1).toUpperCase() + content[0].slice(1);
    Object.entries(content[1]).forEach(langContent => {
      formData[langContent[0] + suffix] = langContent[1];
    });
  });
  return formData;
};

const mapFormDataToData = <T extends BaseData>(
  formData: Record<string, string | File | null>,
  schema: Array<FormKeys<T>>
): Omit<T, "key"> => {
  const data: T = generateEmptyData(schema);
  delete data.key;
  Object.entries(formData).forEach(form => {
    const langs: string[] = Object.values(Languages);
    const suffix = form[0].slice(-2, -1).toLowerCase() + form[0].slice(-1);
    if (langs.includes(suffix)) {
      data.content[suffix as Languages][form[0].slice(0, -2)] = form[1];
    } else {
      (data as any)[form[0]] = form[1];
    }
  });
  return data;
};

const generateEmptyData = <T extends BaseData>(
  schema: Array<FormKeys<T>>
): T => {
  const data: any = {
    content: {}
  };
  Object.values(Languages).forEach(lang => {
    data.content[lang] = {};
  });
  schema.forEach(schemaItem => {
    if (schemaItem.inContent) {
      const langs = Object.values(Languages);
      langs.forEach(lang => {
        if (schemaItem.type === "image") {
          data.content[lang][schemaItem.key] = null;
        } else if (schemaItem.type === "items") {
          // tslint:disable-next-line: prefer-const
          let newItems = [];
          schemaItem.items.forEach(val => newItems.push(val))
          data.content[lang][schemaItem.key] = newItems;
        } else {
          data.content[lang][schemaItem.key] = null;
        }
      });
    }
  });
  return data as T;
};

const uploadImagesFormData = async <T extends BaseData>(
  schema: Array<FormKeys<T>>,
  formData: Record<string, string | File | null>
) => {
  const promisesArray: Array<Promise<void>> = [];
  schema.forEach(item => {
    if (item.type === "image") {
      promisesArray.push(
        new Promise(async (res, rej) => {
          try {
            if (item.inContent) {
              const langs = Object.values(Languages).map(
                lang => lang[0].toUpperCase() + lang.slice(1)
              );
              const imagesArray: Array<Promise<string>> = [];
              langs.forEach(lang => {
                imagesArray.push(
                  new Promise(async (res, rej) => {
                    try {
                      formData[
                        item.key + lang
                      ] = await StorageStore.uploadImage(
                        formData[item.key + lang]
                      );
                      res();
                    } catch (error) {
                      rej(error);
                    }
                  })
                );
              });
              await Promise.all(imagesArray);
            } else {
              (formData as any)[item.key] = await StorageStore.uploadImage(
                (formData as any)[item.key]
              );
            }
            res();
          } catch (error) {
            rej(error);
          }
        })
      );
    }
  });
  await Promise.all(promisesArray);
  return formData;
};
const uploadFilesFormData = async <T extends BaseData>(
  schema: Array<FormKeys<T>>,
  formData: Record<string, string | File | null>
) => {
  const promisesArray: Array<Promise<void>> = [];
  schema.forEach(item => {
    if (item.type === "woff" || "woff2") {
      promisesArray.push(
        new Promise(async (res, rej) => {
          try {
            if (item.inContent) {
              const langs = Object.values(Languages).map(
                lang => lang[0].toUpperCase() + lang.slice(1)
              );
              const fileArray: Array<Promise<string>> = [];
              langs.forEach(lang => {
                fileArray.push(
                  new Promise(async (res, rej) => {
                    try {
                      formData[
                        item.key + lang
                      ] = await StorageStore.uploadFontFile(
                        formData[item.key + lang]
                      );
                      res();
                    } catch (error) {
                      rej(error);
                    }
                  })
                );
              });
              await Promise.all(fileArray);
            } else {
              (formData as any)[item.key] = await StorageStore.uploadFontFile(
                (formData as any)[item.key]
              );
            }
            res();
          } catch (error) {
            rej(error);
          }
        })
      );
    }
  });
  await Promise.all(promisesArray);
  return formData;
};
const ArrayValidationSchema = Yup.object().shape({
  items: Yup.array()
    .of(
      Yup.object().shape({
        key: Yup.string()
          .min(4, 'too short')
          .required('Required'), // these constraints take precedence
        type: Yup.string()
          .min(3, 'cmon')
          .required('Required'), // these constraints take precedence
        title: Yup.string()
          .min(3, 'your title')
          .required('Required'), // these constraints take precedence
      })
    )
    .required('Must have items') // these constraints are shown if and only if inner constraints are satisfied
    .min(1, 'Minimum of 1 items'),
});

const textValidationSchema = Yup.string().required();
const imageValidationSchema = Yup.mixed()
  .required()
  .test("fileFormat", "Images only (PNG / JPG)", (value: File | string) => {
    if (typeof value === "string") {
      return true;
    }
    return value && (value.type === "image/png" || value.type === "image/jpeg");
  })
  .test(
    "fileSize",
    "Image size must be less than 1MB",
    (value: File | string) => {
      if (typeof value === "string") {
        return true;
      }
      return value && value.size <= MAXIMUM_IMAGE_SIZE;
    }
  );
const MAXIMUM_FONT_SIZE = 2 * 2048 * 1024;

const fileFontValidationSchema = Yup.mixed()
  .required("A file is required")
  .test("fileFormat", "font only (woff / woff2)", (value: File | string) => {
    if (typeof value === "string") {
      return true;
    }
    return value && (value.type === "woff" || value.type === "woff2");
  })
  .test(
    "fileSize",
    "Image size must be less than 1MB",
    (value: File | string) => {
      if (typeof value === "string") {
        return true;
      }
      return value && value.size <= MAXIMUM_FONT_SIZE;
    }
  );

const generateValidationSchema = <T extends BaseData>(
  schema: Array<FormKeys<T>>
) => {
  const validationSchema: any = {};
  schema.forEach(value => {
    if (value.inContent) {
      Object.values(Languages).forEach(lang => {
        const suffix = lang[0].toUpperCase() + lang.slice(1);
        if (value.type === "image") {
          if (value.type === "image") {
            validationSchema[
              value.key + suffix
            ] = imageValidationSchema.clone();
          }
          else if (value.type === "woff2" || "woff") {
            validationSchema[
              value.key + suffix
            ] = fileFontValidationSchema.clone();
          }
          else if (value.type === "items") {
            validationSchema[
              value.key + suffix
            ] = ArrayValidationSchema.clone();
          }
        } else {
          validationSchema[value.key + suffix] = textValidationSchema.clone();
        }
      });
    }
  });
  return Yup.object(validationSchema);
};

const generateEmptyFormData = <T extends BaseData>(
  schema: Array<FormKeys<T>>
) => {
  const langs = Object.values(Languages);
  const emptyData: Record<string, string | File | null | any[]> = {};
  schema.forEach(schemaItem => {
    if (schemaItem.inContent) {
      langs.forEach(lang => {
        const suffix = lang.slice(0, 1).toUpperCase() + lang.slice(1);
        if (schemaItem.type === "text") {
          emptyData[(schemaItem.key as string) + suffix] = "";
        }
        else if (schemaItem.type === "items") {

          // tslint:disable-next-line: prefer-const
          let newItems = []
          let i = 0;
          for (i; i < schemaItem.items.length; i++) {
            // tslint:disable-next-line: prefer-const
            let myItemKey = schemaItem.items[i].key;
            newItems.push(`${myItemKey + suffix}`: "")
            newItems.pop()
          }
          // tslint:disable-next-line: prefer-const
          emptyData[(schemaItem.key as any) + suffix] = newItems;
        }
        else if (schemaItem.type === "editor") {

          emptyData[(schemaItem.key + suffix as any)] = EditorState.createEmpty();
        }
        else {
          emptyData[(schemaItem.key as string) + suffix] = null;
        }
      });
    }
  });
  return emptyData;
};

const GeneralFormComponent = <T extends BaseData>(
  props: PropsWithChildren<Props<T>>
) => {
  const params = useParams<Pick<T, "key">>();
  const history = useHistory();
  const [initialValues, setInitialValues] = useState(
    generateEmptyFormData(props.formData)
  );
  useEffect(() => {
    if (params && params.key) {
      if (params.key !== "new") {
        const selectedItem = props.data.find(item => item.key === params.key);
        if (selectedItem) {
          setInitialValues(mapDataToFormData<T>(selectedItem));
        } else {
          history.goBack();
        }
      }
    }
  }, [params, history, props.data]);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  return useObserver(() => (
    <Container
      style={{
        width: "100%",
        height: "100%",

        marginTop: "50px"
      }}
    >
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={generateValidationSchema(props.formData)}
        onSubmit={async values => {
          // try {
          setIsSaving(true);
          values =
            (await uploadImagesFormData(props.formData, values)) ||
            (await uploadFilesFormData(props.formData, values));
          const value: Omit<T, "key"> = mapFormDataToData(
            values,
            props.formData
          );
          if (params.key !== "new") {
            await props.editAction(params.key, value);
          } else {
            await props.addAction(value);
          }
          history.goBack();
          // } catch (error) {
          //   alert("Sorry an error occured");
          // } finally {
          //   setIsSaving(false);
          // }
        }}
      >
        {formikBag => {
          console.log(formikBag)
          return (
            <Form
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start"
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "flex-start"
                }}
              >
                {Object.values(Languages).map(lang => {
                  const suffix = lang[0].toUpperCase() + lang.slice(1);
                  return (
                    // tslint:disable-next-line: jsx-key
                    <Container className="bg-white p-5">
                      {props.formData
                        .filter(data => data.inContent)
                        .map((data, key) => {
                          if (data.type === "image") {
                            return (
                              <ImageField
                                value={
                                  (formikBag.values as any)[data.key + suffix]
                                }
                                error={
                                  (formikBag.errors as any)[data.key + suffix]
                                }
                                setValue={value =>
                                  formikBag.setFieldValue(
                                    data.key + suffix,
                                    value
                                  )
                                }
                              />
                            );
                          } else if (data.type === "woff") {
                            return (
                              <div className="mb-3">
                                <Typography variant="h6">
                                  upload your font file "woff or woff2"
                                </Typography>
                                <div className="my-3">
                                  <FileUploadField
                                    value={(formikBag.values as any)[data.key]}
                                    error={(formikBag.errors as any)[data.key]}
                                    setValue={value =>
                                      formikBag.setFieldValue(
                                        data.key as string,
                                        value
                                      )
                                    }
                                  />
                                </div>
                                <Divider />
                              </div>
                            );
                          } else if (data.type === "checkbox") {
                            if (Array.isArray(data.items)) {
                              return data.items.map(item => {
                                return (
                                  // tslint:disable-next-line: jsx-key
                                  <>
                                    <Container>
                                      <Row className="align-middle">
                                        <Field
                                          name={item.key}
                                          component={Checkbox}
                                          margin="normal"
                                          checked={item.value}
                                          variant="outlined"
                                          placeholder={item.itemName}
                                          required={true}
                                          label={item.itemName}
                                          error={
                                            (formikBag.errors as any)[item.key]
                                          }
                                        />
                                        <Field name={item.key}>
                                          {({ field, form, meta }) => (
                                            <div>
                                              <input
                                                type="checkbox"
                                                {...field}
                                                checked={item.value}
                                                onClick={!item.value}
                                                placeholder={item.itemName}
                                              />
                                              {meta.touched && meta.error && (
                                                <div className="error">
                                                  {meta.error}
                                                </div>
                                              )}
                                            </div>
                                          )}
                                        </Field>
                                      </Row>
                                    </Container>
                                  </>
                                );
                              });
                            }
                          } else if (data.type === "switch") {
                            const [switchNew, setSwitch] = useState(
                              data.switchValue
                            );
                            return (
                              <Field name={data.key}>
                                <FormControlLabel
                                  control={
                                    <Switch
                                      checked={switchNew}
                                      onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                      ) => {
                                        setSwitch(event.target.checked);
                                        console.log(event.target.checked);
                                      }}
                                      value={data.title}
                                      color="primary"
                                    />
                                  }
                                  label={data.title}
                                />
                              </Field>
                            );
                          } else if (data.type === "textarea") {
                            return (
                              <Field
                                name={data.key + suffix}
                                component={TextField}
                                margin="normal"
                                variant="outlined"
                                placeholder={data.title}
                                required={true}
                                label={data.title}
                                error={(formikBag.errors as any)[data.key]}
                                multiline={true}
                                rows={12}
                                fullWidth={true}
                              />
                            );
                          } else if (data.type === "gallery") {
                            return (
                              <div className="my-3">
                                <Divider className="mb-3" />
                                <Typography variant="h6" className="mb-3">Typeface in use gallery</Typography>
                                <DropzoneWithoutKeyboard />
                                <Divider className="mt-3" />
                              </div>
                            )
                          } else if (data.type === "select") {

                            return (
                              <Field
                                name={data.key + suffix}
                                component={Select}
                                multiple={true}
                                value={['red', 'green', 'blue']}
                                margin="normal"
                                variant="outlined"
                                placeholder={data.title}
                                required={true}
                                label={data.title}
                                error={(formikBag.errors as any)[data.key]}
                              >
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                              </Field>
                            );
                          } else if (data.type === "date") {
                            return (
                              <Field
                                name={data.key + suffix}
                                component={TextField}
                                type="date"
                                margin="normal"
                                variant="outlined"
                                required={true}
                                label={data.title}
                                error={(formikBag.errors as any)[data.key]}
                              />
                            );
                          }

                          else if (data.type === "items") {
                            const dataKey = data.key + suffix;
                            console.log(formikBag.errors)
                            return (
                              <>
                                <FieldArray name={dataKey}>
                                  {({ push, remove }) => (
                                    <React.Fragment>

                                      {data.items &&
                                        data.items.length > 0 &&
                                        data.items.map((item, index) => {
                                          // tslint:disable-next-line: no-shadowed-variable
                                          const { key, type, title } = item;
                                          if (type === "text") {
                                            return (
                                              <>
                                                <Field
                                                  name={`${dataKey}[${index}].${key}`}
                                                  component={TextField}
                                                  margin="normal"
                                                  variant="outlined"
                                                  placeholder={title}
                                                  label={title}
                                                  required={true}
                                                  error={(formikBag.errors as any)[dataKey]}
                                                />
                                                <ErrorMessage name={`${dataKey}[${index}].${key}`}>
                                                  {msg => <div className="field-error">{msg}</div>}
                                                </ErrorMessage>
                                              </>
                                            )
                                          } else if (type === "image") {
                                            return (
                                              <ImageField
                                                value={
                                                  (formikBag.values as any)[`${dataKey}[${index}].${key}`]
                                                }
                                                error={
                                                  (formikBag.errors as any)[`${dataKey}[${index}].${key}`]
                                                }
                                                setValue={value =>
                                                  formikBag.setFieldValue(
                                                    `${dataKey}[${index}].${key}`,
                                                    value
                                                  )
                                                }
                                              />
                                            )
                                          }

                                        })}

                                    </React.Fragment>
                                  )}
                                </FieldArray>

                              </>
                            )
                          }

                          else if (data.type === "editor") {
                            const editor = formikBag.values[data.key + suffix];
                            const [editorState, setEditorState] = useState(editor)
                            return (

                              <>
                                <Typography variant="h4">EDITOR</Typography>
                                <Editor toolbar={{ options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'remove', 'history'] }} editorState={editorState} onEditorStateChange={(e: EditorState) => {
                                  setEditorState(e)
                                }} />
                              </>
                            );
                          }
                          else {
                            return (
                              <Field
                                name={data.key + suffix}
                                component={TextField}
                                margin="normal"
                                variant="outlined"
                                placeholder={data.title}
                                required={true}
                                label={data.title}
                                error={
                                  (formikBag.errors as any)[data.key + suffix]
                                }
                              />
                            );
                          }
                        })}

                    </Container>
                  );
                })}
              </div>
              <Button
                style={{
                  marginTop: 24,
                  marginBottom: 24
                }}
                onClick={formikBag.submitForm}
                variant="contained"
                size="large"
                disabled={isSaving}
              >
                {!isSaving ? "Save" : <CircularProgress />}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  ));
};

export default GeneralFormComponent;
