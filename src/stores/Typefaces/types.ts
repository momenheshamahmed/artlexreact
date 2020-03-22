import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface Typeface {
  key: string;
  id: number;
  content: Record<Languages, TypefaceContent>;
}

// tslint:disable-next-line: interface-name
export interface TypefaceContent {
  websiteInternalURL: string;
  fileFont: string;
  coverImage: string;
  fileSpecimenFont: string;
  fileUserTermsFont: string;
  typefaceCategory: string;
  typefaceName: string;
  typefaceTestWords: string;
  fontSize: string;
  lineHeight: string;
  leading: string;
  typefaceDescription: string;
  specimenFilePdf: string;
  specimenFileText: string;
  userAgreementPdf: string;
  userAgreementText: string;
  pairFontImage: string;
  designerName: string;
  version: string;
  manufacturing: string;
  copyright: string;
  releaseDate: string;
  fullPackageImageStore: string;
  fullPackageStoreUrl: string;
  familyStyles: string;
  galleryField: Array<string | File | null>;
  charactersImage: string;
  fontInUseField: Array<string | File | null>;
  pairfonts: Array<string | object | null>;
  typefaceLinkFacebook: string;
  typefaceLinkBehance: string;
  typefaceLinkDribbble: string;
  typefaceLinkTwitter: string;
  typefaceLinkWebsite: string;
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

