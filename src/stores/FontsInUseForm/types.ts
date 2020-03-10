import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface FontInUse {
  key: string;
  id: number;
  content: Record<Languages, FontInUseContent>;
}

// tslint:disable-next-line: interface-name
export interface FontInUseContent {
  title: string;
  selectField: Array<string | File | null>;
}
