import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface Typeface {
  key: string;
  id: number;
  content: Record<Languages, TypefaceContent>;
}

// tslint:disable-next-line: interface-name
export interface TypefaceContent {
  fileFont: string;
  typefaceName: string;
  typefaceDescription: string;
  designerName: string;
  version: string;
  manufacturing: string;
  copyright: string;
  releaseDate: string;
  storeUrl: string;
  familyStyles: string;
  typefaceTestWords: string;
  galleryField: Array<string | File | null>;
  charactersImage: boolean;
  fontInUseField: Array<string | File | null>;
  pairfonts: Array<string | object |null>;
}

// tslint:disable-next-line: interface-name
export interface FontinuseInterface {
  key?: string;
  title?: string;
  items?: Fontinuseitem[];
}

// tslint:disable-next-line: interface-name
export interface Fontinuseitem {
  key: string;
  title: string;
  type: string;
}
// tslint:disable-next-line: interface-name
export interface Typefacelanguages {
  id: string;
  name: string;
}
// imgUrl: string;
// typefaceurl: string;
// typefacename?: string;
// description?: string;
// typefacelanguages?: string;
// charactersenabled?: boolean;
// family?: string;
// familytext?: string;
// release?: string;
// releasedate?: string;
// designername?: string;
// designerlinks?: string;
// version?: string;
// manufuctring?: string;
// copyright?: string;
// date?: string;
// fontWeights?: object[];
// fontinuse?: FontinuseInterface[];
