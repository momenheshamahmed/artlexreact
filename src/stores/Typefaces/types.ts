import { Languages } from "../../utils/translation/index";

// export interface Typeface {
//   key: string;
//   id: number;
//   name: string;
//   url: string;
//   featuredOnHomeSlider: boolean;
//   featuredOnHomeThumbnial: boolean;
//   featuredOnHomeTester: boolean;
// }

// export interface Weight {
//   key: string;
//   id: number;
//   weight: string;
//   url: string;
//   imgUrl: string;
  
// }

// tslint:disable-next-line: interface-name
export interface Typeface {
  key: string;
  id: number;
  name: string;
  url: string;
  gallery: TypefaceGallery[];
  weights: TypefaceWeight[];
  content: TypefaceContent;
}

// tslint:disable-next-line: interface-name
export interface TypefaceContent {
  title: string;
  imgURL: string;
  audioURL: string;
  
}
// tslint:disable-next-line: interface-name

export interface TypefaceGallery {
  id: string;
  title: string;
  imgUrl: string; 
}
// tslint:disable-next-line: interface-name

export interface TypefaceWeight {
  title: string;
  imgUrl: string;
  url: string;
}
