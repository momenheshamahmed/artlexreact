import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface FontFeaturedFullscreen {
  key: string;
  id: number;
  content: Record<Languages, FontFeaturedFullscreenContent>;
}

// tslint:disable-next-line: interface-name
export interface FontFeaturedFullscreenContent {
  selectTypeface: Array<string | File | null>;
  coverImage: string;
}
