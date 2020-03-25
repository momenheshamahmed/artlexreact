import React, { useState, useEffect, PropsWithChildren, useRef } from "react";
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

import PdfFileField from "../adminComponents/PdfFileField";


import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

const languagesDropDown = [
  { code : 'ab', name : 'Abkhazian' },
  { code : 'aa', name : 'Afar' },
  { code : 'af', name : 'Afrikaans' },
  { code : 'ak', name : 'Akan' },
  { code : 'sq', name : 'Albanian' },
  { code : 'am', name : 'Amharic' },
  { code : 'ar', name : 'Arabic' },
  { code : 'an', name : 'Aragonese' },
  { code : 'hy', name : 'Armenian' },
  { code : 'as', name : 'Assamese' },
  { code : 'av', name : 'Avaric' },
  { code : 'ae', name : 'Avestan' },
  { code : 'ay', name : 'Aymara' },
  { code : 'az', name : 'Azerbaijani' },
  { code : 'bm', name : 'Bambara' },
  { code : 'ba', name : 'Bashkir' },
  { code : 'eu', name : 'Basque' },
  { code : 'be', name : 'Belarusian' },
  { code : 'bn', name : 'Bengali' },
  { code : 'bh', name : 'Bihari languages' },
  { code : 'bi', name : 'Bislama' },
  { code : 'bs', name : 'Bosnian' },
  { code : 'br', name : 'Breton' },
  { code : 'bg', name : 'Bulgarian' },
  { code : 'my', name : 'Burmese' },
  { code : 'ca', name : 'Catalan, Valencian' },
  { code : 'km', name : 'Central Khmer' },
  { code : 'ch', name : 'Chamorro' },
  { code : 'ce', name : 'Chechen' },
  { code : 'ny', name : 'Chichewa, Chewa, Nyanja' },
  { code : 'zh', name : 'Chinese' },
  { code : 'cu', name : 'Church Slavonic, Old Bulgarian, Old Church Slavonic' },
  { code : 'cv', name : 'Chuvash' },
  { code : 'kw', name : 'Cornish' },
  { code : 'co', name : 'Corsican' },
  { code : 'cr', name : 'Cree' },
  { code : 'hr', name : 'Croatian' },
  { code : 'cs', name : 'Czech' },
  { code : 'da', name : 'Danish' },
  { code : 'dv', name : 'Divehi, Dhivehi, Maldivian' },
  { code : 'nl', name : 'Dutch, Flemish' },
  { code : 'dz', name : 'Dzongkha' },
  { code : 'en', name : 'English' },
  { code : 'eo', name : 'Esperanto' },
  { code : 'et', name : 'Estonian' },
  { code : 'ee', name : 'Ewe' },
  { code : 'fo', name : 'Faroese' },
  { code : 'fj', name : 'Fijian' },
  { code : 'fi', name : 'Finnish' },
  { code : 'fr', name : 'French' },
  { code : 'ff', name : 'Fulah' },
  { code : 'gd', name : 'Gaelic, Scottish Gaelic' },
  { code : 'gl', name : 'Galician' },
  { code : 'lg', name : 'Ganda' },
  { code : 'ka', name : 'Georgian' },
  { code : 'de', name : 'German' },
  { code : 'ki', name : 'Gikuyu, Kikuyu' },
  { code : 'el', name : 'Greek (Modern)' },
  { code : 'kl', name : 'Greenlandic, Kalaallisut' },
  { code : 'gn', name : 'Guarani' },
  { code : 'gu', name : 'Gujarati' },
  { code : 'ht', name : 'Haitian, Haitian Creole' },
  { code : 'ha', name : 'Hausa' },
  { code : 'he', name : 'Hebrew' },
  { code : 'hz', name : 'Herero' },
  { code : 'hi', name : 'Hindi' },
  { code : 'ho', name : 'Hiri Motu' },
  { code : 'hu', name : 'Hungarian' },
  { code : 'is', name : 'Icelandic' },
  { code : 'io', name : 'Ido' },
  { code : 'ig', name : 'Igbo' },
  { code : 'id', name : 'Indonesian' },
  { code : 'ia', name : 'Interlingua (International Auxiliary Language Association)' },
  { code : 'ie', name : 'Interlingue' },
  { code : 'iu', name : 'Inuktitut' },
  { code : 'ik', name : 'Inupiaq' },
  { code : 'ga', name : 'Irish' },
  { code : 'it', name : 'Italian' },
  { code : 'ja', name : 'Japanese' },
  { code : 'jv', name : 'Javanese' },
  { code : 'kn', name : 'Kannada' },
  { code : 'kr', name : 'Kanuri' },
  { code : 'ks', name : 'Kashmiri' },
  { code : 'kk', name : 'Kazakh' },
  { code : 'rw', name : 'Kinyarwanda' },
  { code : 'kv', name : 'Komi' },
  { code : 'kg', name : 'Kongo' },
  { code : 'ko', name : 'Korean' },
  { code : 'kj', name : 'Kwanyama, Kuanyama' },
  { code : 'ku', name : 'Kurdish' },
  { code : 'ky', name : 'Kyrgyz' },
  { code : 'lo', name : 'Lao' },
  { code : 'la', name : 'Latin' },
  { code : 'lv', name : 'Latvian' },
  { code : 'lb', name : 'Letzeburgesch, Luxembourgish' },
  { code : 'li', name : 'Limburgish, Limburgan, Limburger' },
  { code : 'ln', name : 'Lingala' },
  { code : 'lt', name : 'Lithuanian' },
  { code : 'lu', name : 'Luba-Katanga' },
  { code : 'mk', name : 'Macedonian' },
  { code : 'mg', name : 'Malagasy' },
  { code : 'ms', name : 'Malay' },
  { code : 'ml', name : 'Malayalam' },
  { code : 'mt', name : 'Maltese' },
  { code : 'gv', name : 'Manx' },
  { code : 'mi', name : 'Maori' },
  { code : 'mr', name : 'Marathi' },
  { code : 'mh', name : 'Marshallese' },
  { code : 'ro', name : 'Moldovan, Moldavian, Romanian' },
  { code : 'mn', name : 'Mongolian' },
  { code : 'na', name : 'Nauru' },
  { code : 'nv', name : 'Navajo, Navaho' },
  { code : 'nd', name : 'Northern Ndebele' },
  { code : 'ng', name : 'Ndonga' },
  { code : 'ne', name : 'Nepali' },
  { code : 'se', name : 'Northern Sami' },
  { code : 'no', name : 'Norwegian' },
  { code : 'nb', name : 'Norwegian Bokmål' },
  { code : 'nn', name : 'Norwegian Nynorsk' },
  { code : 'ii', name : 'Nuosu, Sichuan Yi' },
  { code : 'oc', name : 'Occitan (post 1500)' },
  { code : 'oj', name : 'Ojibwa' },
  { code : 'or', name : 'Oriya' },
  { code : 'om', name : 'Oromo' },
  { code : 'os', name : 'Ossetian, Ossetic' },
  { code : 'pi', name : 'Pali' },
  { code : 'pa', name : 'Panjabi, Punjabi' },
  { code : 'ps', name : 'Pashto, Pushto' },
  { code : 'fa', name : 'Persian' },
  { code : 'pl', name : 'Polish' },
  { code : 'pt', name : 'Portuguese' },
  { code : 'qu', name : 'Quechua' },
  { code : 'rm', name : 'Romansh' },
  { code : 'rn', name : 'Rundi' },
  { code : 'ru', name : 'Russian' },
  { code : 'sm', name : 'Samoan' },
  { code : 'sg', name : 'Sango' },
  { code : 'sa', name : 'Sanskrit' },
  { code : 'sc', name : 'Sardinian' },
  { code : 'sr', name : 'Serbian' },
  { code : 'sn', name : 'Shona' },
  { code : 'sd', name : 'Sindhi' },
  { code : 'si', name : 'Sinhala, Sinhalese' },
  { code : 'sk', name : 'Slovak' },
  { code : 'sl', name : 'Slovenian' },
  { code : 'so', name : 'Somali' },
  { code : 'st', name : 'Sotho, Southern' },
  { code : 'nr', name : 'South Ndebele' },
  { code : 'es', name : 'Spanish, Castilian' },
  { code : 'su', name : 'Sundanese' },
  { code : 'sw', name : 'Swahili' },
  { code : 'ss', name : 'Swati' },
  { code : 'sv', name : 'Swedish' },
  { code : 'tl', name : 'Tagalog' },
  { code : 'ty', name : 'Tahitian' },
  { code : 'tg', name : 'Tajik' },
  { code : 'ta', name : 'Tamil' },
  { code : 'tt', name : 'Tatar' },
  { code : 'te', name : 'Telugu' },
  { code : 'th', name : 'Thai' },
  { code : 'bo', name : 'Tibetan' },
  { code : 'ti', name : 'Tigrinya' },
  { code : 'to', name : 'Tonga (Tonga Islands)' },
  { code : 'ts', name : 'Tsonga' },
  { code : 'tn', name : 'Tswana' },
  { code : 'tr', name : 'Turkish' },
  { code : 'tk', name : 'Turkmen' },
  { code : 'tw', name : 'Twi' },
  { code : 'ug', name : 'Uighur, Uyghur' },
  { code : 'uk', name : 'Ukrainian' },
  { code : 'ur', name : 'Urdu' },
  { code : 'uz', name : 'Uzbek' },
  { code : 've', name : 'Venda' },
  { code : 'vi', name : 'Vietnamese' },
  { code : 'vo', name : 'Volap_k' },
  { code : 'wa', name : 'Walloon' },
  { code : 'cy', name : 'Welsh' },
  { code : 'fy', name : 'Western Frisian' },
  { code : 'wo', name : 'Wolof' },
  { code : 'xh', name : 'Xhosa' },
  { code : 'yi', name : 'Yiddish' },
  { code : 'yo', name : 'Yoruba' },
  { code : 'za', name : 'Zhuang, Chuang' },
  { code : 'zu', name : 'Zulu' }
];

const EMPTY_HTML = "<p>write what ever you want!</p>";
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
        }  else if (schemaItem.type === "gallery") {
          data.content[lang][schemaItem.key] = [];
        }
        else if (schemaItem.type === "relatedarticles") {
          data.content[lang][schemaItem.key] = [];
        }
        else if (schemaItem.type === "languages") {
          data.content[lang][schemaItem.key] = [];
        }
        else if (schemaItem.type === "switch") {
          data.content[lang][schemaItem.key] = Boolean(false);
        } else if (schemaItem.type === "RichTextField") {
          data.content[lang][schemaItem.key] = JSON.stringify(
            EMPTY_HTML
          );
        } else {
          data.content[lang][schemaItem.key] = "";
        }
      });
    } else {
      if (schemaItem.type === "image") {
        data[schemaItem.key] = null;
      } else if (schemaItem.type === "gallery") {
        data[schemaItem.key] = [];
      }
      else if (schemaItem.type === "pairfonts") {
        data[schemaItem.key] = [];
      }
      else if (schemaItem.type === "relatedarticles") {
        data[schemaItem.key] = [];
      }
      else if (schemaItem.type === "languages") {
        data[schemaItem.key] = [];
      }
      else if (schemaItem.type === "switch") {
        data[schemaItem.key] = Boolean(false);
      } else if (schemaItem.type === "RichTextField") {
        data[schemaItem.key] = JSON.stringify(EMPTY_HTML);
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
    }
    else if (item.type === "woff") {
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
    else if (item.type === "pdf") {
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
                      formData[item.key + lang] = await StorageStore.uploadPdfFile(
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
              (formData as any)[item.key] = await StorageStore.uploadPdfFile(
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
    else if (item.type === "woff2") {
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
const pdfFileValidationSchema = Yup.mixed()
  .notRequired()
  .test("fileFormat", "files only (pdf)", (value: File | string) => {
    if (typeof value === "string") {
      return true;
    }
    return (
      value &&
      (getFileExtension1(value.name) === "pdf")
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
        }
        else if (value.type === "woff") {
          validationSchema[value.key + suffix] = fileValidationSchema.clone();
        }
        else if (value.type === "pdf") {
          validationSchema[value.key + suffix] = pdfFileValidationSchema.clone();
        }
        else if (value.type === "woff2") {
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
      }
      else if (value.type === "woff") {
        validationSchema[value.key] = fileValidationSchema.clone();
      }
      else if (value.type === "pdf") {
        validationSchema[value.key] = pdfFileValidationSchema.clone();
      }
      else if (value.type === "woff2") {
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
        }
        else if (schemaItem.type === "woff") {
          emptyData[(schemaItem.key as string) + suffix] = null;
        }
        else if (schemaItem.type === "pdf") {
          emptyData[(schemaItem.key as string) + suffix] = null;
        }
        else if (schemaItem.type === "woff2") {
          emptyData[(schemaItem.key as string) + suffix] = null;
        } else if (schemaItem.type === "gallery") {
          emptyData[(schemaItem.key as string) + suffix] = [];
        }
        else if (schemaItem.type === "pairfonts") {
          emptyData[(schemaItem.key as string) + suffix] = [];
        }
        else if (schemaItem.type === "relatedarticles") {
          emptyData[(schemaItem.key as string) + suffix] = [];
        }
        else if (schemaItem.type === "languages") {
          emptyData[(schemaItem.key as string) + suffix] = [];
        }
        else if (schemaItem.type === "switch") {
          emptyData[(schemaItem.key as string) + suffix] = Boolean(false);
        } else if (schemaItem.type === "RichTextField") {
          emptyData[(schemaItem.key as string) + suffix] = JSON.stringify(EMPTY_HTML);
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
                  }
                   else {
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
                          }
                          else if (data.type === "woff") {
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
                          }
                          else if (data.type === "pdf") {
                            return (
                              <div className="my-3">
                                <Divider />
                                <Typography variant="h5" className="my-2">
                                  {data.title}
                                </Typography>
                                <PdfFileField
                                  value={
                                    (formikBag.values as any)[data.key + suffix]
                                  }
                                  error={
                                    data.isRequired === true ? (formikBag.errors as any)[data.key + suffix] : null
                                  }
                                  setValue={value =>
                                    formikBag.setFieldValue(
                                      data.key + suffix,
                                      (value ? value : null)
                                    )
                                  }
                                  idButton={data.key + suffix}
                                  idInput={`${data.key}`}

                                />
                                <Divider className="mt-2" />
                              </div>
                            );
                          }
                          else if (data.type === "woff2") {
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
                                    idButton={data.key + suffix}
                                  idInput={`${data.key}`}
                                  }
                                />
                                <Divider className="mt-2" />
                              </div>
                            );
                          }
                          else if (data.type === "selecttypface") {
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
                                        <MenuItem key={val.key} value={val.key}>
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
                              </Field>
                            );
                          }

                          else if (data.type === "selectarticle") {
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
                                <MenuItem key="custom" value="Custom">
                                  Custom
                                </MenuItem>
                                {/* <MenuItem key="custom" value="custom">
                                  Custom
                                </MenuItem> */}
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
                          }
                          else if (data.type === "pairfonts") {
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
                                            <MenuItem
                                            key="noitems"
                                            value="noitems"
                                          >
                                            Please go and typefaces first!
                                          </MenuItem>
                                  {useObserver(() =>
                                    TypefaceStore.Typefaces.map(val => {
                                      return (<MenuItem key={val.key} value={val.key}>
                                          {val.content.en.typefaceName}
                                        </MenuItem>)                                  
                                    })
                                  )}
                                </Field>
                              </FormControl>
                            );
                          }
                          else if (data.type === "relatedarticles") {
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
                                <MenuItem
                                key="noarticles"
                                value="noarticles"
                              >
                                no articles!
                              </MenuItem>
                                  {useObserver(() =>
                        
                                      BlogStore.Blogs.map(val => {
                                        return (

                              
                                          <MenuItem key={val.key} value={val.key}>
                                            {val.content.en.title}
                                          </MenuItem>
                                        )
                                        
                                      })

                                   
                                  )}
                                  
                                </Field>
                              </FormControl>
                            );
                          }
                          else if (data.type === "languages") {
                            
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
                                <MenuItem
                                key="nolanguages"
                                value="nolanguages"
                              >
                                no languages!
                              </MenuItem>
                                  {useObserver(() =>
                        
                                      languagesDropDown.map(val => {
                                        return (
                                          <MenuItem key={val.code} value={val.name}>
                                            {val.name}
                                          </MenuItem>
                                        )
                                        
                                      })

                                   
                                  )}
                                  
                                </Field>
                              </FormControl>
                            );
                          }
                          else if (data.type === "switch") {
                            return (
                              <FormControlLabel
                                control={
                                  <Field
                                    name={data.key + suffix}
                                    component={Switch}
                                    error={
                                      (formikBag.errors as any)[
                                      data.key + suffix
                                      ]
                                    }
                                    checked={data.key + suffix}
                                    onChange={(e) => {formikBag.setFieldValue(data.key + suffix, e.target.checked)}}
                                  />
                                }
                                label={data.title}
                              />
                            );
                          } else if (data.type === "RichTextField") {
                            const modulesQuill = {toolbar: [  ['bold', 'italic', 'underline', 'strike'],     
                            ['blockquote', 'code-block'],
                          
                            [{ 'header': 1 }, { 'header': 2 }],          
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            [{ 'script': 'sub'}, { 'script': 'super' }],     
                            [{ 'indent': '-1'}, { 'indent': '+1' }],       
                            [{ 'direction': 'rtl' }],                     
                          
                            [{ 'size': ['small', false, 'large', 'huge'] }],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                          
                            [{ 'color': [] }, { 'background': [] }],       
                        
                            [{ 'align': [] }],
                            ['link', 'image', 'video'],
                            ['clean']      ]}
                            const formatsQuill = [
                              'header',
                              'bold', 'italic', 'underline', 'strike', 'blockquote',
                              'list', 'bullet', 'indent', 'align'
                              'link', 'image',
                              'video', ''
                            ]
                            return (
                              <>



                            <ReactQuill
                            modules={
                              modulesQuill
                            }
                            formats={formatsQuill}
                            value={JSON.parse(formikBag.values[data.key + suffix])} 
                            onChange={(val) => {
                              formikBag.setFieldValue(data.key + suffix, JSON.stringify(val)) 
                              console.log(data.key + suffix)
                            }}
                   />
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
