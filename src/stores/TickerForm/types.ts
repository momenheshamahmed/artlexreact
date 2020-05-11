import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface Ticker {
  key: string;
  id: number;
  content: Record<Languages, TickerContent>;
}

// tslint:disable-next-line: interface-name
export interface TickerContent {
  title: string;
  href: string;
  order: string;
}
