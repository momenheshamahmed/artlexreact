import { Languages } from "../../utils/translation/index";

// tslint:disable-next-line: interface-name
export interface Blog {
  key: string;
  id: number;
  content: Record<Languages, BlogContent>;
}

// tslint:disable-next-line: interface-name
export interface BlogContent {
  articleInternalURL: string;
  title: string;
  gridNumber: string;
  image1: string;
  articleCategory: string;
  richEditor1: string;
  relatedArticles: Array<string | object |null>;
}
