import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface ProtypeServices {
  key: string;
  id: number;
  content: Record<Languages, ProtypeServicesContent>;
}

// tslint:disable-next-line: interface-name
export interface ProtypeServicesContent {
  gallery1: string;
  richEditor1: string;
  gallery2: string;
  richEditor2: string;
}
