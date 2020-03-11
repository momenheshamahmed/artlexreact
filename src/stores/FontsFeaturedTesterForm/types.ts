import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface FontFeaturedTester {
  key: string;
  id: number;
  content: Record<Languages, FontFeaturedTesterContent>;
}

// tslint:disable-next-line: interface-name
export interface FontFeaturedTesterContent {
  selectTypeface: Array<string | File | null>;
}
