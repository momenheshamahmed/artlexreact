import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface Typeface {
  key: string;
  id: number;
  content: Record<Languages, TypefaceContent>;
}

// tslint:disable-next-line: interface-name
export interface TypefaceContent {
  // basic info
  dividerforbasicinfo: string;
  websiteInternalURL: string;
  typefaceName: string;
  typefaceDescription: string;
  familyStyles: string;
  typefaceCategory: string;
  typefaceSorting: string;
  fileFont: string;
  // font tester specs
  dividerfortester: string;
  typefaceFeaturedTester: boolean;
  typefaceTestWords: string;
  /* next three lines are hard coded*/
  fontSize: string;
  lineHeight: string;
  leading: string;
  // if the fone is featured on fullscreen or it is custom font
  dividerforfullscreen: string;
  coverImage: string;
  typefaceFeaturedFullScreen: boolean;
  // images fields
  dividerforimages: string;
  galleryField: Array<string | File | null>;
  embededVideo: string;
  charactersImage: string;
  // for all fonts, if featured in grid on home
  dividerforfeatured: string;
  typefaceFeaturedGrid: boolean;
  typefaceFeaturedGridNumberCover: string;
  typefaceFeaturedGridNumberHover: string;
  showInFooter: boolean;
  // store info
  dividerforstore: string;
  fullPackageImageStore: string;
  fullPackageStoreUrl: string;
  // pair font info
  dividerforpair: string;
  pairFontImage: string;
  pairfonts: Array<string | object | null>;
  // lang supported and files (speciment & end-user agreement)
  dividerforlangfiles: string;
  languagesSupported: Array<string | object |null>;
  specimenFilePdf: string;
  specimenFileText: string;
  userAgreementPdf: string;
  userAgreementText: string;
  // font info and designer info
  dividerforinfo: string;
  version: string;
  manufacturing: string;
  copyright: string;
  releaseDate: string;
  designerName: string;
  typefaceLinkFacebook: string;
  typefaceLinkBehance: string;
  typefaceLinkDribbble: string;
  typefaceLinkTwitter: string;
  typefaceLinkInstgram: string;
  typefaceLinkPinterest: string;
  typefaceLinkLinkedin: string;
  typefaceLinkWebsite: string;
  // typeface open type features
  dividerforfeatures: string;
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

