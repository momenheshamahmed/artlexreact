import React, { useState, useEffect, PropsWithChildren } from "react";
import {
  Container,
  Button,
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
  MenuItem,
  FormControlLabel,
  Typography,
  Divider,
  InputLabel,
  FormControl
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField, Select, Switch } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import ImageField from "../adminComponents/ImageField";
import GalleryField from "../adminComponents/GalleryField";
import * as Yup from "yup";
import { useObserver } from "mobx-react";
import StorageStore from "../../stores/Storage";
import { useParams, useHistory } from "react-router";
import { BaseData } from "./types";
import { Props, FormKeys } from "./types";
import { Languages } from "../../utils/translation";
import { FontStore, TypefaceStore, BlogStore } from "../../stores";
import FileField from "../adminComponents/FileField";

import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromRaw,
  RawDraftContentState,
  convertFromHTML
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { stateToHTML } from "draft-js-export-html";

const EMPTY_HTML = "<p></p>";

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
  formData: Record<
    string,
    string | File | null | boolean | Array<string | File | null>
  >,
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
        } else if (schemaItem.type === "image2") {
          data.content[lang][schemaItem.key] = null;
        } else if (schemaItem.type === "gallery") {
          data.content[lang][schemaItem.key] = [];
        } else if (schemaItem.type === "pairfonts") {
          data.content[lang][schemaItem.key] = [];
        } else if (schemaItem.type === "switch") {
          data.content[lang][schemaItem.key] = Boolean(false);
        } else if (schemaItem.type === "RichTextField") {
          data.content[lang][schemaItem.key] = JSON.stringify(
            convertToRaw(
              ContentState.createFromBlockArray(
                convertFromHTML(EMPTY_HTML).contentBlocks
              )
            )
          );
        } else {
          data.content[lang][schemaItem.key] = "";
        }
      });
    } else {
      if (schemaItem.type === "image") {
        data[schemaItem.key] = null;
      } else if (schemaItem.type === "image2") {
        data[schemaItem.key] = null;
      } else if (schemaItem.type === "gallery") {
        data[schemaItem.key] = [];
      } else if (schemaItem.type === "pairfonts") {
        data[schemaItem.key] = [];
      } else if (schemaItem.type === "switch") {
        data[schemaItem.key] = Boolean(false);
      } else if (schemaItem.type === "RichTextField") {
        data[schemaItem.key] = JSON.stringify(
          convertToRaw(
            ContentState.createFromBlockArray(
              convertFromHTML(EMPTY_HTML).contentBlocks
            )
          )
        );
      } else {
        data[schemaItem.key] = "";
      }
    }
  });
  return data as T;
};

const uploadImagesFormData = async <T extends BaseData>(
  schema: Array<FormKeys<T>>,
  formData: Record<
    string,
    string | File | null | boolean | Array<string | File | null>
  >
) => {
  const promisesArray: Array<Promise<void>> = [];
  schema.forEach(async item => {
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
                  new Promise(async (resolve, reject) => {
                    try {
                      formData[
                        item.key + lang
                      ] = await StorageStore.uploadImage(
                        (formData[item.key + lang] as unknown) as
                          | File
                          | string
                          | null
                      );
                      resolve();
                    } catch (error) {
                      reject(error);
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
    } else if (item.type === "image2") {
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
                  new Promise(async (resolve, reject) => {
                    try {
                      formData[
                        item.key + lang
                      ] = await StorageStore.uploadImage(
                        (formData[item.key + lang] as unknown) as
                          | File
                          | string
                          | null
                      );
                      resolve();
                    } catch (error) {
                      reject(error);
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
    } else if (item.type === "gallery") {
      try {
        if (item.inContent) {
          const langs = Object.values(Languages).map(
            lang => lang[0].toUpperCase() + lang.slice(1)
          );
          const imagePromisesArray = Array(langs.length).fill([]);
          langs.forEach((lang, index) => {
            ((formData[item.key + lang] as unknown) as any[]).forEach(value => {
              imagePromisesArray[index].push(StorageStore.uploadImage(value));
            });
          });
          const finalImages = [];
          const uploadImagesPromises = [];
          imagePromisesArray.forEach((image, index) => {
            uploadImagesPromises.push(
              new Promise(async (resolveArray, rejectArray) => {
                try {
                  finalImages[index] = await Promise.all(image);
                  resolveArray();
                } catch (error) {
                  rejectArray(error);
                }
              })
            );
          });
          promisesArray.push(
            new Promise(async resolveBigPromise => {
              await Promise.all(uploadImagesPromises);
              langs.forEach((lang, index) => {
                formData[item.key + lang] = finalImages[index];
              });
              resolveBigPromise();
            })
          );
        } else {
          (formData as any)[item.key] = await StorageStore.uploadImage(
            (formData as any)[item.key]
          );
        }
      } catch (error) {
        console.error(error);
      }
    } else if (item.type === "woff") {
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
                  new Promise(async (resolve, reject) => {
                    try {
                      formData[item.key + lang] = await StorageStore.uploadFile(
                        (formData[item.key + lang] as unknown) as
                          | File
                          | string
                          | null
                      );
                      resolve();
                    } catch (error) {
                      reject(error);
                    }
                  })
                );
              });
              await Promise.all(imagesArray);
            } else {
              (formData as any)[item.key] = await StorageStore.uploadFile(
                (formData as any)[item.key]
              );
            }
            res();
          } catch (error) {
            rej(error);
          }
        })
      );
    } else if (item.type === "woff2") {
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
                  new Promise(async (resolve, reject) => {
                    try {
                      formData[item.key + lang] = await StorageStore.uploadFile(
                        (formData[item.key + lang] as unknown) as
                          | File
                          | string
                          | null
                      );
                      resolve();
                    } catch (error) {
                      reject(error);
                    }
                  })
                );
              });
              await Promise.all(imagesArray);
            } else {
              (formData as any)[item.key] = await StorageStore.uploadFile(
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
const getFileExtension1 = (filename: string) => {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
};

const fileValidationSchema = Yup.mixed()
  .required()
  .test("fileFormat", "Fonts only (woff / woff2)", (value: File | string) => {
    if (typeof value === "string") {
      return true;
    }
    return (
      value &&
      (getFileExtension1(value.name) === "woff" ||
        getFileExtension1(value.name) === "woff2")
    );
  })
  .test(
    "fileSize",
    "Font size must be less than 1MB",
    (value: File | string) => {
      if (typeof value === "string") {
        return true;
      }
      return value && value.size <= MAXIMUM_IMAGE_SIZE;
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
          validationSchema[value.key + suffix] = imageValidationSchema.clone();
        } else if (value.type === "image2") {
          validationSchema[value.key + suffix] = imageValidationSchema.clone();
        } else if (value.type === "woff") {
          validationSchema[value.key + suffix] = fileValidationSchema.clone();
        } else if (value.type === "woff2") {
          validationSchema[value.key + suffix] = fileValidationSchema.clone();
        } else {
          if (value.isRequired) {
            validationSchema[value.key + suffix] = textValidationSchema.clone();
          } else {
            validationSchema[value.key] = "";
          }
        }
      });
    } else {
      if (value.type === "image") {
        validationSchema[value.key] = imageValidationSchema.clone();
      } else if (value.type === "image2") {
        validationSchema[value.key] = imageValidationSchema.clone();
      } else if (value.type === "woff") {
        validationSchema[value.key] = fileValidationSchema.clone();
      } else if (value.type === "woff2") {
        validationSchema[value.key] = fileValidationSchema.clone();
      } else {
        if (value.isRequired) {
          validationSchema[value.key] = textValidationSchema.clone();
        } else {
          validationSchema[value.key] = "";
        }
      }
    }
  });
  return Yup.object(validationSchema);
};

const generateEmptyFormData = <T extends BaseData>(
  schema: Array<FormKeys<T>>
) => {
  const langs = Object.values(Languages);
  const emptyData: Record<
    string,
    string | File | null | boolean | Array<string | File | null> | Date
  > = {};
  schema.forEach(schemaItem => {
    if (schemaItem.inContent) {
      langs.forEach(lang => {
        const suffix = lang.slice(0, 1).toUpperCase() + lang.slice(1);
        if (schemaItem.type === "image") {
          emptyData[(schemaItem.key as string) + suffix] = null;
        } else if (schemaItem.type === "image2") {
          emptyData[(schemaItem.key as string) + suffix] = null;
        } else if (schemaItem.type === "woff") {
          emptyData[(schemaItem.key as string) + suffix] = null;
        } else if (schemaItem.type === "woff2") {
          emptyData[(schemaItem.key as string) + suffix] = null;
        } else if (schemaItem.type === "gallery") {
          emptyData[(schemaItem.key as string) + suffix] = [];
        } else if (schemaItem.type === "pairfonts") {
          emptyData[(schemaItem.key as string) + suffix] = [];
        } else if (schemaItem.type === "switch") {
          emptyData[(schemaItem.key as string) + suffix] = Boolean(false);
        } else if (schemaItem.type === "RichTextField") {
          console.log(ContentState);
          emptyData[(schemaItem.key as string) + suffix] = JSON.stringify(
            convertToRaw(
              ContentState.createFromBlockArray(
                convertFromHTML(EMPTY_HTML).contentBlocks
              )
            )
          );
        } else {
          emptyData[(schemaItem.key as string) + suffix] = "";
        }
      });
    } else {
      if (schemaItem.type !== "image") {
        emptyData[schemaItem.key as string] = "";
      } else {
        emptyData[schemaItem.key as string] = null;
      }
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
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  useEffect(() => {
    setEditorState(EditorState.createEmpty());
  }, []);
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={generateValidationSchema(props.formData)}
        onSubmit={async values => {
          // try {
          setIsSaving(true);
          values = await uploadImagesFormData(props.formData, values);
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
              {props.formData
                .filter(data => !data.inContent)
                .map(data => {
                  if (data.type === "image") {
                    return (
                      <ImageField
                        value={(formikBag.values as any)[data.key]}
                        error={(formikBag.errors as any)[data.key]}
                        setValue={value =>
                          formikBag.setFieldValue(data.key as string, value)
                        }
                      />
                    );
                  } else if (data.type === "textarea") {
                    return (
                      <Field
                        name={data.key}
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
                  } else {
                    return (
                      <Field
                        name={data.key}
                        component={TextField}
                        margin="normal"
                        variant="outlined"
                        placeholder={data.title}
                        required={true}
                        label={data.title}
                        error={(formikBag.errors as any)[data.key]}
                      />
                    );
                  }
                })}
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
                    <Container
                      key={lang}
                      style={{
                        margin: 24,
                        marginTop: 50,
                        marginLeft: 50,
                        background: "white",
                        padding: 20
                      }}
                    >
                      {props.formData
                        .filter(data => data.inContent)
                        .map(data => {
                          if (data.type === "image") {
                            return (
                              <div className="my-3">
                                <Divider />
                                <Typography variant="h5" className="my-2">
                                  {data.title}
                                </Typography>

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
                                  idButton={data.key + suffix}
                                  idInput={`${data.key}`}
                                />
                                <Divider className="mt-2" />
                              </div>
                            );
                          } else if (data.type === "woff") {
                            return (
                              <div className="my-3">
                                <Divider />
                                <Typography variant="h5" className="my-2">
                                  {data.title}
                                </Typography>
                                <FileField
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
                                <Divider className="mt-2" />
                              </div>
                            );
                          } else if (data.type === "woff2") {
                            return (
                              <div className="my-3">
                                <Divider />
                                <Typography variant="h5" className="my-2">
                                  {data.title}
                                </Typography>

                                <FileField
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
                                <Divider className="mt-2" />
                              </div>
                            );
                          } else if (data.type === "gallery") {
                            return (
                              <div className="my-3">
                                <Divider />
                                <Typography variant="h5" className="my-2">
                                  {data.title}
                                </Typography>
                                <GalleryField
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
                                <Divider className="mt-2" />
                              </div>
                            );
                          } else if (data.type === "selecttypface") {
                            return (
                              <Field
                                name={data.key + suffix}
                                component={TextField}
                                type="text"
                                placeholder={data.title}
                                required={data.isRequired}
                                select={true}
                                style={{ overflow: "hidden" }}
                                variant="outlined"
                                helperText="Please select Typeface"
                                margin="normal"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                label={data.title}
                                error={
                                  (formikBag.errors as any)[data.key + suffix]
                                }
                              >
                                {useObserver(() =>
                                  TypefaceStore.Typefaces.map(val => {
                                    return TypefaceStore.Typefaces.length >
                                      0 ? (
                                      <MenuItem key={val.key} value={val}>
                                        {val.content.en.typefaceName}
                                      </MenuItem>
                                    ) : (
                                      <MenuItem
                                        key="noitems"
                                        value="noitems"
                                        disabled={true}
                                      >
                                        Please go and typefaces first!
                                      </MenuItem>
                                    );
                                  })
                                )}
                                {/* <MenuItem
                                  key="noitems"
                                  value="noitems"
                                  disabled={true}
                                >
                                  Please go and typefaces first!
                                </MenuItem> */}
                              </Field>
                            );
                          } else if (data.type === "selectarticle") {
                            return (
                              <Field
                                name={data.key + suffix}
                                component={TextField}
                                type="text"
                                placeholder={data.title}
                                required={data.isRequired}
                                select={true}
                                style={{ overflow: "hidden" }}
                                variant="outlined"
                                helperText="Please select Typeface"
                                margin="normal"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                label={data.title}
                                error={
                                  (formikBag.errors as any)[data.key + suffix]
                                }
                              >
                                {useObserver(() =>
                                  BlogStore.Blogs.map(val => {
                                    return BlogStore.Blogs.length > 0 ? (
                                      <MenuItem key={val.key} value={val}>
                                        {val.content.en.title}
                                      </MenuItem>
                                    ) : (
                                      <MenuItem
                                        key="noitems"
                                        value="noitems"
                                        disabled={true}
                                      >
                                        Please go and typefaces first!
                                      </MenuItem>
                                    );
                                  })
                                )}
                              </Field>
                            );
                          } else if (data.type === "selecttypfacecategory") {
                            return (
                              <Field
                                name={data.key + suffix}
                                component={TextField}
                                type="text"
                                placeholder={data.title}
                                required={data.isRequired}
                                select={true}
                                style={{ overflow: "hidden" }}
                                variant="outlined"
                                helperText="Please select Typeface"
                                margin="normal"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                label={data.title}
                                error={
                                  (formikBag.errors as any)[data.key + suffix]
                                }
                              >
                                <MenuItem key="free" value="free">
                                  Free
                                </MenuItem>
                                <MenuItem key="premium" value="premium">
                                  Premium
                                </MenuItem>
                                <MenuItem key="custom" value="custom">
                                  Custom
                                </MenuItem>
                              </Field>
                            );
                          } else if (data.type === "selectarticlecategory") {
                            return (
                              <Field
                                name={data.key + suffix}
                                component={TextField}
                                type="text"
                                placeholder={data.title}
                                required={data.isRequired}
                                select={true}
                                style={{ overflow: "hidden" }}
                                variant="outlined"
                                helperText="Please select Category"
                                margin="normal"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                label={data.title}
                                error={
                                  (formikBag.errors as any)[data.key + suffix]
                                }
                              >
                                <MenuItem key="articles" value="articles">
                                  articles
                                </MenuItem>
                                <MenuItem key="news" value="news">
                                  news
                                </MenuItem>
                              </Field>
                            );
                          } else if (data.type === "pairfonts") {
                            return (
                              <FormControl>
                                <Typography variant="h5" className="my-2">
                                  {data.title}
                                </Typography>
                                <Field
                                  component={Select}
                                  variant="outlined"
                                  type="text"
                                  name={data.key + suffix}
                                  select={true}
                                  style={{ overflow: "hidden" }}
                                  // label={data.title}
                                  required={data.isRequired}
                                  error={
                                    (formikBag.errors as any)[data.key + suffix]
                                  }
                                  multiple={true}
                                  inputProps={{
                                    name: `${data.key + suffix}`,
                                    id: `${data.key + suffix}`
                                  }}
                                >
                                  <MenuItem key="noitem" value="noitem">
                                    noitem
                                  </MenuItem>
                                  <MenuItem key="noitem2" value="noitem2">
                                    noitem2
                                  </MenuItem>
                                  {/* {
                                      useObserver(() =>
                                        TypefaceStore.Typefaces.map(val => {
                                          return (
                                            <>

                                              <MenuItem key={val.content.en.copyright} value={val.content.en.copyright}>
                                                {val.content.en.copyright}
                                              </MenuItem>
                                            </>
                                          );
                                        })
                                      )
                                    } */}
                                </Field>
                              </FormControl>
                            );
                          } else if (data.type === "date") {
                            return (
                              <Field
                                component={DatePicker}
                                name={data.key + suffix}
                                margin="normal"
                                variant="outlined"
                                required={data.isRequired}
                                label={data.title}
                              />
                            );
                          } else if (data.type === "switch") {
                            const switchName = data.key + suffix;

                            return (
                              <FormControlLabel
                                control={
                                  <Field
                                    name={switchName}
                                    component={Switch}
                                    error={
                                      (formikBag.errors as any)[
                                        data.key + suffix
                                      ]
                                    }
                                  />
                                }
                                label={data.title}
                              />
                            );
                          } else if (data.type === "RichTextField") {
                            console.warn(
                              "focus3",
                              formikBag.values[data.key + suffix]
                            );
                            const [editorState, setEditorState] = useState(
                              EditorState.createEmpty()
                            );
                            return (
                              <>
                                <Editor
                                  // editorState={editorState}
                                  // initialContentState={convertFromRaw(formikBag.values[data.key + suffix])}
                                  // editorState={EditorState.createWithContent(JSON.parse(formikBag.values[data.key + suffix]))}
                                  editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(
                                    formikBag.values[data.key + suffix]
                                  )))}
                                  initialContentState={JSON.parse(
                                    formikBag.values[data.key + suffix]
                                  )}
                                  onContentStateChange={(
                                    contentState: RawDraftContentState
                                  ) => {
                                    formikBag.setFieldValue(
                                      data.key + suffix,
                                      JSON.stringify(contentState)
                                    );
                                  }}
                                />

                                {/* Export & Rendering HTML */}
                                {/* {myHtml} */}
                                {/* {stateToHTML(editorState.getCurrentContent())} */}
                                {/* { ReactHtmlParser(myHtml) } */}
                              </>
                            );
                          } else if (data.type === "textarea") {
                            return (
                              <Field
                                name={data.key + suffix}
                                component={TextField}
                                margin="normal"
                                variant="outlined"
                                placeholder={data.title}
                                required={data.isRequired}
                                label={data.title}
                                error={
                                  (formikBag.errors as any)[data.key + suffix]
                                }
                                multiline={true}
                                rows={12}
                                fullWidth={true}
                              />
                            );
                          } else {
                            return (
                              <Field
                                name={data.key + suffix}
                                component={TextField}
                                margin="normal"
                                variant="outlined"
                                placeholder={data.title}
                                required={data.isRequired}
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
                  marginBottom: 24,
                  marginLeft: 50
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
