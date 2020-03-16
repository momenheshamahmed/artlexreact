import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface CustomTypeface {
  key: string;
  id: number;
  content: Record<Languages, CustomTypefaceContent>;
}

// tslint:disable-next-line: interface-name
export interface CustomTypefaceContent {
  websiteInternalURL: string;
  fileFont: string;
  fileSpecimenFont: string;
  fileUserTermsFont: string;
  CustomTypefaceCategory: string;
  CustomTypefaceName: string;
  CustomTypefaceDescription: string;
  designerName: string;
  version: string;
  manufacturing: string;
  copyright: string;
  releaseDate: string;
  storeUrl: string;
  familyStyles: string;
  CustomTypefaceTestWords: string;
  galleryField: Array<string | File | null>;
  charactersImage: boolean;
  fontInUseField: Array<string | File | null>;
  pairfonts: Array<string | object |null>;
  CustomTypefaceLinkFacebook: string;
  CustomTypefaceLinkBehance: string;
  CustomTypefaceLinkDribbble: string;
  CustomTypefaceLinkTwitter: string;
  CustomTypefaceLinkWebsite: string;
  standardLigatures: boolean;
  contextuaLalternates: boolean;
  discretionLigatures: boolean;
  swash: boolean;
  fractions: boolean;
  stylisticOne: boolean;
  stylisticTwo: boolean;
  stylisticThree: boolean;
  stylisticFour: boolean;
  stylisticFive: boolean;
  stylisticSix: boolean;
  stylisticSeven: boolean;

}
