import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface Typeface {
  key: string;
  id: number;
  name: string;
  typefaceurl: string;
  charactersenabled: boolean;
  content: Record<Languages, TypefaceContent>;
  typefaceweights: Record<Languages, [TypefaceWeights]>;
  typefaceinusegallery: Record<Languages, [TypefaceInUseGallery]>;
  typefacelanguage: Record<Languages, [Typefacelanguages]>;
}

// tslint:disable-next-line: interface-name
export interface TypefaceContent {
  typefacename?: string;
  description?: string;
  family?: string;
  familytext?: string;
  release?: string;
  releasedate?: string;
  designername?: string;
  designerlinks?: string;
  version?: string;
  manufuctring?: string;
  copyright?: string;
  date?: string;
}
// tslint:disable-next-line: interface-name
export interface TypefaceOpenTypeFeatures {
  featureName: string;
  imgUrl: string;
  url: string;
}
// tslint:disable-next-line: interface-name
export interface TypefaceWeights {
  fontweight: string;
  imgUrl: string;
  url: string;
}

// tslint:disable-next-line: interface-name
export interface TypefaceInUseGallery {
  title: string;
  imgUrl: string;
  grid: string;
}
// tslint:disable-next-line: interface-name
export interface TypefacePairs {
  title: string;
  imgUrl: string;
  grid: string;
}
// tslint:disable-next-line: interface-name
export interface Typefacelanguages {
  id: string;
  name: string;
}
