import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface FontFeaturedGrid {
  key: string;
  id: number;
  content: Record<Languages, FontFeaturedGridContent>;
}

// tslint:disable-next-line: interface-name
export interface FontFeaturedGridContent {
  selectTypeface: Array<string | File | null>;
}
