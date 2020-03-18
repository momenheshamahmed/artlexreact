import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface CustomFontFeaturedFullScreen {
  key: string;
  id: number;
  content: Record<Languages, CustomFontFeaturedFullscreenContent>;
}

// tslint:disable-next-line: interface-name
export interface CustomFontFeaturedFullscreenContent {
  selectTypeface: Array<string | File | null>;
  coverImage: string;
}
