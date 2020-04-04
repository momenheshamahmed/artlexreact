import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface FontInUse {
  key: string;
  id: number;
  content: Record<Languages, FontInUseContent>;
}

// tslint:disable-next-line: interface-name
export interface FontInUseContent {
  selectTypeface: string;
  imageGridCols: string;
  imageGridRows: string;
  imageInUse: string;
}
// tslint:disable-next-line: interface-name
// export interface SelectedFont {
//   key: string;
//   name: string;
// }