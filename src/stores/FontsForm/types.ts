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
