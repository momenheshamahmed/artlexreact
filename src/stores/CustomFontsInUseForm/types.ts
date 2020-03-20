import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface CustomFontInUse {
  key: string;
  id: number;
  content: Record<Languages, CustomFontInUseContent>;
}

// tslint:disable-next-line: interface-name
export interface CustomFontInUseContent {
  selectTypeface: Array<string | File | null>;
  imageGrid: string;
  imageInUse: string;
}
