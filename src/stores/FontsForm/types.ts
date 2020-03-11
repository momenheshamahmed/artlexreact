import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface Font {
  key: string;
  id: number;
  content: Record<Languages, FontContent>;
}

// tslint:disable-next-line: interface-name
export interface FontContent {
  selectTypeface: Array<string | File | null>;
  fontWeight: string;
  fontImage: string;
  fontUrl: string;
}
// tslint:disable-next-line: interface-name

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
